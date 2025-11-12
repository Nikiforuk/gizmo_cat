import Image, { StaticImageData } from 'next/image';

import ButtonAction from './ButtonAction';
import favoriteIcon from '../../assets/icons/favorites-gray.svg';
import styles from '../ui/ProductCard.module.scss';

interface ProductCardProps {
  image: StaticImageData;
  icon: boolean;
  text: string;
  price: string;
}

export default function ProductCard({ image, icon, text, price }: ProductCardProps) {
  const handleClick = () => {
    console.log('Buy now');
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={icon && favoriteIcon} width={32} height={32} alt="favourite-icon" />
      </div>
      <div className={styles.product}>
        <Image src={image} alt="iphone-image" />
      </div>
      <div className={styles.textBlock}>
        <p className={styles.textBlock_name}>{text}</p>
        <b className={styles.textBlock_price}>{price}</b>
      </div>
      <div className={styles.option}>
        <ButtonAction
          callback={handleClick}
          radius={12}
          width={160}
          bgColor="black"
          text="Buy now"
          borderColor="none"
        />
      </div>
    </div>
  );
}
