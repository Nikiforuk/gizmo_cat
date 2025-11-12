'use client';

import React from 'react';

import Link from 'next/link';

import ProductCard from './ProductCard';
import iphoneImg from '../../assets/images/product-iphone.png';
import styles from '../ui/Products.module.scss';

export default function Products() {
  const links = [{ title: 'New Arrival' }, { title: 'Bestseller' }, { title: 'Featured Products' }];
  const products = [
    { text: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price: '$900' },
    { text: 'Blackmagic Pocket Cinema Camera 6k', price: '$2535' },
    { text: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', price: '$399' },
    { text: 'AirPods Max Silver)', price: '$369' },
    { text: 'Samsung Galaxy Watch6 Classic 47mm Black', price: '$369' },
    { text: 'Galaxy Buds FEGraphite)', price: '$99.99' },
    { text: 'Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021', price: '$900' },
    { text: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', price: '$398' },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.tags}>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <Link href="" className={styles.tags_select}>
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.products}>
        {products.map((item, i) => (
          <React.Fragment key={i}>
            <ProductCard image={iphoneImg} text={item.text} price={item.price} icon={true} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
