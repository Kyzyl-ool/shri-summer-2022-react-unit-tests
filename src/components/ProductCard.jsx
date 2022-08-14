import styles from './ProductCard.module.css';
import {IconedLabel} from "./iconed-label/iconed-label";
import {Icon} from "./icon/icon";
import {BouquetHeightIcon, BouquetWidthIcon, EmptyFavoriteIcon, FillHeartIcon, FlowersCountIcon} from "./icons";
import {Badge} from "./badge/badge";
import {Button} from "./button/button";
import classnames from "classnames";
import {digitSplitter} from "../utiils/digitSplitter";

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

  return <div data-testid="product-card" className={styles.root}>
    <div className={styles.badges}>
      {isHit && <Badge type={'hit'}>ХИТ</Badge>}
      {isSale && <Badge type={'sale'}>СКИДКА</Badge>}
    </div>
    <div className={styles.favourite}>
      <Icon>
        {isFavorite ? <FillHeartIcon/> : <EmptyFavoriteIcon/>}
      </Icon>
    </div>
    <div>
      <img src={imageUrl} alt={title} className={styles.image}/>
      <div className={styles.info}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={classnames(styles.priceContainer, {})}>
          <div className={classnames(styles.priceCurrent,
            {[styles.priceDiscount]: oldPrice && currentPrice})}>
            {digitSplitter(currentPrice)}&nbsp;&#x20bd;
          </div>
          {oldPrice && <div className={classnames(styles.priceOld, {
            [styles.priceCrossedOut]: oldPrice && currentPrice
          })}>
            {digitSplitter(oldPrice)}&nbsp;&#x20bd;
          </div>}
        </div>
        <div className={styles.details}>
          {flowersCount !== undefined && <IconedLabel
            icon={<Icon>
              <FlowersCountIcon/>
            </Icon>}
            text={<>{digitSplitter(flowersCount)}&nbsp;шт.</>}
          />}
          {bouquetHeight !== undefined && <IconedLabel
            icon={<Icon>
              <BouquetHeightIcon/>
            </Icon>}
            text={<>{digitSplitter(bouquetHeight)}&nbsp;см</>}
          />}
          {bouquetWidth !== undefined && <IconedLabel
            icon={<Icon>
              <BouquetWidthIcon/>
            </Icon>}
            text={<>{digitSplitter(bouquetWidth)}&nbsp;см</>}
          />}
        </div>
      </div>
    </div>
    <div className={styles.actions}>
      <Button disabled={disabled}>
        В корзину
      </Button>
      <Button type={'secondary'} disabled={disabled}>
        Купить сразу
      </Button>
    </div>
  </div>
}