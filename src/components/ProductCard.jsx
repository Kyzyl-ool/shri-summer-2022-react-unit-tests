import styles from './ProductCard.module.css';
import {IconedLabel} from "./iconed-label/iconed-label";
import {Icon} from "./icon/icon";
import {BouquetHeightIcon, BouquetWidthIcon, EmptyFavoriteIcon, FillHeartIcon, FlowersCountIcon} from "./icons";
import {Badge} from "./badge/badge";
import {Button} from "./button/button";
import classnames from "classnames";

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
    <img src={imageUrl} alt={title} className={styles.image}/>
    <div className={styles.info}>


      <div className={styles.title}>
        {title}
      </div>
      <div className={classnames(styles.priceContainer, {})}>
        <div className={classnames(styles.priceCurrent,
          {[styles.priceDiscount]: oldPrice && currentPrice})}>
          {currentPrice}&nbsp;&#x20bd;
        </div>
        {oldPrice && <div className={classnames(styles.priceOld, {
          [styles.priceCrossedOut]: oldPrice && currentPrice
        })}>
          {oldPrice}&nbsp;&#x20bd;
        </div>}
      </div>
      <div className={styles.details}>
        <IconedLabel
          icon={<Icon>
            <FlowersCountIcon/>
          </Icon>}
          text={flowersCount}
        />
        <IconedLabel
          icon={<Icon>
            <BouquetHeightIcon/>
          </Icon>}
          text={bouquetHeight}
        />
        <IconedLabel
          icon={<Icon>
            <BouquetWidthIcon/>
          </Icon>}
          text={bouquetWidth}
        />
      </div>
    </div>
    <div className={styles.actions}>
      <Button>
        В корзину
      </Button>
      <Button type={'secondary'}>
        Купить сразу
      </Button>
    </div>
  </div>
}