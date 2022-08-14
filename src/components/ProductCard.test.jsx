import {getDefaultNormalizer, render, screen} from "@testing-library/react";
import {ProductCard, TestIds} from "./ProductCard";
import {digitSplitter} from "../utiils/digitSplitter";

describe('Компонент «Карточка товара»', () => {
  const fullProps = {
    bouquetHeight: 96,
    bouquetWidth: 50,
    currentPrice: "74798",
    flowersCount: 43,
    id: "3cb712d2-31ec-431e-ab05-20a284e1c339",
    imageUrl: "https://loremflickr.com/400/400/nature?94638",
    isFavorite: true,
    isHit: false,
    isSale: true,
    oldPrice: "60938",
    title: "Потрясающий Натуральный Кулон",
  };

  const noAmountAndSizedProps = {
    currentPrice: "74798",
    id: "3cb712d2-31ec-431e-ab05-20a284e1c339",
    imageUrl: "https://loremflickr.com/400/400/nature?94638",
    isFavorite: true,
    isHit: false,
    isSale: true,
    oldPrice: "60938",
    title: "Потрясающий Натуральный Кулон",
  }
  test('Сама карточка рендерится при полных валидных пропсах', () => {
    render(<ProductCard
      {...fullProps}
    />);

    expect(screen.getByTestId(`${TestIds.PRODUCT_CARD}-${fullProps.id}`)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.BOUQUET_HEIGHT)).toHaveTextContent(`${fullProps.bouquetHeight} см`);
    expect(screen.getByTestId(TestIds.BOUQUET_WIDTH)).toHaveTextContent(`${fullProps.bouquetWidth} см`);
    expect(screen.getByTestId(TestIds.PRICE_OLD)).toHaveTextContent(`${digitSplitter(fullProps.oldPrice, 3, ' ')} ₽`);
    expect(screen.getByTestId(TestIds.PRICE_CURRENT)).toHaveTextContent(`${digitSplitter(fullProps.currentPrice, 3, ' ')} ₽`);
    expect(screen.getByTestId(TestIds.IMAGE)).toContainHTML('img');
    expect(screen.getByTestId(TestIds.FAVOURITE_FILLED)).toBeInTheDocument();
    expect(screen.queryByTestId(TestIds.BADGE_HIT)).not.toBeInTheDocument();
    expect(screen.getByTestId(TestIds.BADGE_SALE)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.TITLE)).toHaveTextContent(fullProps.title);
  });


  test('Если нет ни кол-ва, ни размеров, то не должно быть строки про эту информацию',
    async () => {
      render(<ProductCard{...noAmountAndSizedProps}/>);

      expect(screen.queryByTestId(TestIds.BOUQUET_HEIGHT)).not.toBeInTheDocument();
      expect(screen.queryByTestId(TestIds.BOUQUET_WIDTH)).not.toBeInTheDocument();
      expect(screen.queryByTestId(TestIds.FLOWERS_COUNT)).not.toBeInTheDocument();
    }
  );

  test('Если кол-во цветов 0, то кнопки покупки должны быть disabled', () => {
    render(<ProductCard{...fullProps} flowersCount={0}/>);

    expect(screen.getByTestId(TestIds.BOUQUET_HEIGHT)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.BOUQUET_WIDTH)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.FLOWERS_COUNT)).toBeInTheDocument();
    expect(screen.getByTestId(TestIds.BUY_NOW)).toBeDisabled();
    expect(screen.getByTestId(TestIds.ADD_TO_CART)).toBeDisabled();
  });
});
