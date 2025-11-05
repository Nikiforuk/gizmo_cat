'use client';

import styles from '../../ui/products/DiscountProducts.module.scss';
import ProductCard from '../cards/ProductCard';
import productIphoneGold from '../../assets/images/discount-iphone-gold.png';


export default function DiscountProducts() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Discounts up to -50%</h2>
      <div className={styles.products}>
        <ProductCard
          image={productIphoneGold}
          text="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          price='$1437'
          icon={true}
        />
        <ProductCard
          image={productIphoneGold}
          text="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          price='$1437'
          icon={true}
        />
        <ProductCard
          image={productIphoneGold}
          text="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          price='$1437'
          icon={true}
        />
        <ProductCard
          image={productIphoneGold}
          text="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          price='$1437'
          icon={true}
        />
      </div>
    </section>
  )
}
