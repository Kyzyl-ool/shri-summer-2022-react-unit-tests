import {render, waitFor, screen} from "@testing-library/react";
import {ProductCard} from "./ProductCard";

describe('Компонент «Карточка товара»', () => {
  test('Сама карточка рендерится при валидных пропсах', async () => {
    render(<ProductCard
      bouquetHeight={96}
      bouquetWidth={50}
      currentPrice={"74798"}
      flowersCount={43}
      id={"3cb712d2-31ec-431e-ab05-20a284e1c339"}
      imageUrl={"https://loremflickr.com/400/400/nature?94638"}
      isFavorite={true}
      isHit={false}
      isSale={true}
      oldPrice={"60938"}
      title={"Потрясающий Натуральный Кулон"}
    />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
    expect(screen.getByTestId(''))
  });


});
