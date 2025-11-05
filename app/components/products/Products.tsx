'use client';

import ProductCard from '../cards/ProductCard';

import productIphoneImg from '../../assets/icons/product-iphone.png';
import productBlackmagicImg from '../../assets/icons/product-blackmagic.png';
import productWatchesImg from '../../assets/icons/product-watches.png';
import productWatches2Img from '../../assets/icons/product-watches-2.png';
import productHpImg from '../../assets/icons/product-hp.png';
import productGalaxyImg from '../../assets/icons/product-galaxy.png';
import productBudsImg from '../../assets/icons/product-buds.png';
import productIpadImg from '../../assets/icons/product-ipad.png';

import styles from '../../ui/products/Products.module.scss';
import Link from 'next/link';

export default function Products() {
  return (
    <section className={styles.container}>
      <div className={styles.tags}>
        <Link href="" className={styles.tags_select}>New Arrival</Link>
        <Link href="" className={styles.tags_select}>Bestseller</Link>
        <Link href="" className={styles.tags_select}>Featured Products</Link>
      </div>
      <div className={styles.products}>
        <ProductCard
          image={productIphoneImg}
          text="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
          price='$900'
          icon={true}
        />
         <ProductCard
          image={productBlackmagicImg}
          text="Blackmagic Pocket Cinema Camera 6k"
          price='$2535'
          icon={true}
        />
         <ProductCard
          image={productWatchesImg}
          text="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
          price='$399'
          icon={true}
        />
         <ProductCard
          image={productHpImg}
          text="AirPods Max Silver"
          price='$549'
          icon={true}
        />
         <ProductCard
          image={productWatches2Img}
          text="Samsung Galaxy Watch6 Classic 47mm Black"
          price='$369'
          icon={true}
        />
         <ProductCard
          image={productGalaxyImg}
          text="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
          price='$1799'
          icon={true}
        />
         <ProductCard
          image={productBudsImg}
          text="Galaxy Buds FEGraphite"
          price='$99.99'
          icon={true}
        />
         <ProductCard
          image={productIpadImg}
          text="Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021"
          price='$398'
          icon={true}
        />
      </div>
    </section>
  )
}
