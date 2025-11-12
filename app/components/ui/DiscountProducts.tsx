'use client';

import React from 'react';

import ProductCard from './ProductCard';
import iphoneGoldImage from '../../assets/images/discount-iphone-gold.png';
import styles from '../ui/DiscountProducts.module.scss';

export default function DiscountProducts() {
  const products = [1, 2, 3, 4];
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Discounts up to -50%</h2>
      <div className={styles.products}>
        {products.map((_, i) => (
          <React.Fragment key={i}>
            <ProductCard
              image={iphoneGoldImage}
              text="Apple iPhone 14 Pro 512GB Gold (MQ233)"
              price="$1437"
              icon={true}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
