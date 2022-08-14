import styles from './ProductCard.module.css';
import {IconedLabel} from "./iconed-label/iconed-label";
import {Icon} from "./icon/icon";
import {BouquetHeightIcon, BouquetWidthIcon, EmptyFavoriteIcon, FillHeartIcon, FlowersCountIcon} from "./icons";
import {Badge} from "./badge/badge";
import {Button} from "./button/button";
import classnames from "classnames";
import {digitSplitter} from "../utiils/digitSplitter";

export const TestIds = {
  PRODUCT_CARD: 'product-card',
  BADGE_HIT: 'badge-hit',
  BADGE_SALE: 'badge-sale',
  FAVOURITE_FILLED: 'favourite-filled',
  FAVOURITE_OUTLINED: 'favourite-outlined',
  IMAGE: 'image',
  TITLE: 'title',
  PRICE_CURRENT: 'price-current',
  PRICE_OLD: 'price-old',
  FLOWERS_COUNT: 'flowers-count',
  BOUQUET_HEIGHT: 'bouquet-height',
  BOUQUET_WIDTH: 'bouquet-width',
  ADD_TO_CART: 'add-to-cart',
  BUY_NOW: 'buy-now',
}

export const ProductCard = ({
                              bouquetHeight,
                              bouquetWidth,
                              currentPrice,
                              flowersCount,
                              id,
                              imageUrl,
                              isFavorite,
                              isHit,
                              isSale,
                              oldPrice,
                              title,
                            }) => {
  const disabled = !(flowersCount > 0);

  return <div data-testid={TestIds.PRODUCT_CARD} className={styles.root}>
    <div className={styles.badges}>
      {isHit && <Badge type={'hit'} data-testid={TestIds.BADGE_HIT}>ХИТ</Badge>}
      {isSale && <Badge type={'sale'} data-testid={TestIds.BADGE_SALE}>СКИДКА</Badge>}
    </div>
    <div className={styles.favourite}>
      <Icon data-testid={isFavorite ? TestIds.FAVOURITE_FILLED : TestIds.FAVOURITE_OUTLINED}>
        {isFavorite ? <FillHeartIcon/> : <EmptyFavoriteIcon/>}
      </Icon>
    </div>
    <div>
      <img src={imageUrl} alt={title} className={styles.image} data-testid={TestIds.IMAGE}/>
      <div className={styles.info}>
        <div className={styles.title} data-testid={TestIds.TITLE}>
          {title}
        </div>
        <div className={classnames(styles.priceContainer, {})}>
          <div
            className={classnames(styles.priceCurrent, {[styles.priceDiscount]: oldPrice && currentPrice})}
            data-testid={TestIds.PRICE_CURRENT}
          >
            {digitSplitter(currentPrice)}&nbsp;&#x20bd;
          </div>
          {oldPrice && <div
            className={classnames(styles.priceOld, {
              [styles.priceCrossedOut]: oldPrice && currentPrice
            })}
            data-testid={TestIds.PRICE_OLD}
          >
            {digitSplitter(oldPrice)}&nbsp;&#x20bd;
          </div>}
        </div>
        <div className={styles.details}>
          {flowersCount !== undefined && <IconedLabel
            icon={<Icon>
              <FlowersCountIcon/>
            </Icon>}
            text={<>{digitSplitter(flowersCount)}&nbsp;шт.</>}
            data-testid={TestIds.FLOWERS_COUNT}
          />}
          {bouquetHeight !== undefined && <IconedLabel
            icon={<Icon>
              <BouquetHeightIcon/>
            </Icon>}
            text={<>{digitSplitter(bouquetHeight)}&nbsp;см</>}
            data-testid={TestIds.BOUQUET_HEIGHT}
          />}
          {bouquetWidth !== undefined && <IconedLabel
            icon={<Icon>
              <BouquetWidthIcon/>
            </Icon>}
            text={<>{digitSplitter(bouquetWidth)}&nbsp;см</>}
            data-testid={TestIds.BOUQUET_WIDTH}
          />}
        </div>
      </div>
    </div>
    <div className={styles.actions}>
      <Button disabled={disabled} data-testid={TestIds.ADD_TO_CART}>
        В корзину
      </Button>
      <Button type={'secondary'} disabled={disabled} data-testid={TestIds.BUY_NOW}>
        Купить сразу
      </Button>
    </div>
  </div>
}