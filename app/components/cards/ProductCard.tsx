import Image, { StaticImageData } from 'next/image';
import likeIcon from '../../assets/icons/like.svg';

import ButtonAction from '../buttons/ButtonAction';
import styles from '../../ui/cards/ProductCard.module.scss';

interface ProductCardProps {
  image: StaticImageData;
  icon: boolean;
  text: string;
  price: string;
}

export default function ProductCard({
  image,
  icon,
  text,
  price,   
}: ProductCardProps) {
  const handleClick = () => {
    console.log('Buy now');
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={icon && likeIcon} width={32} height={32} alt='favourite-icon'/>
      </div>
      <div className={styles.product}>
        <Image src={image} alt='iphone-image' />
      </div>
      <div className={styles.textBlock}>
        <p className={styles.textBlock_name}>{text}</p>
        <b className={styles.textBlock_price}>{price}</b>
      </div>
      <div className={styles.option}>
        <ButtonAction
          callback={handleClick}
          radius={12}
          width={184}
          bgColor='black'
          text='Buy now'
          borderColor='none'
        />
      </div>
    </div>
  )
}
