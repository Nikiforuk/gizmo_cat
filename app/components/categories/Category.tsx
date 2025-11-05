'use client';

import Image from 'next/image';

import ButtonArrow from '../buttons/ButtonArrow';

import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import categoryPhonesIcon from '../../assets/icons/category-phones.svg';
import categoryWatchesIcon from '../../assets/icons/category-watches.svg';
import categoryHpIcon from '../../assets/icons/category-hp.svg';
import categoryCamerasIcon from '../../assets/icons/category-cameras.svg';
import categoryComputersIcon from '../../assets/icons/category-computers.svg';
import categoryGamingIcon from '../../assets/icons/category-gaming.svg';

import styles from '../../ui/categories/Category.module.scss';

export default function Category() {
  const handleClickLeft = () => {
    console.log('left');
  }

  const handleClickRight = () => {
    console.log('left');
  }
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
          <h2 className={styles.top_title}>
            Browse By Category
          </h2>
          <div className={styles.top_groupButtons}>
            <ButtonArrow callback={handleClickLeft} icon={arrowLeftIcon} />
            <ButtonArrow callback={handleClickRight} icon={arrowRightIcon} />
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryPhonesIcon} alt='phones-icon' />
            <p className={styles.category_text}>Phones</p>
          </div>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryWatchesIcon} alt='phones-icon' />
            <p className={styles.category_text}>Smart Watches</p>
          </div>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryHpIcon} alt='phones-icon' />
            <p className={styles.category_text}>Cameras</p>
          </div>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryCamerasIcon} alt='phones-icon' />
            <p className={styles.category_text}>Computers</p>
          </div>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryComputersIcon} alt='phones-icon' />
            <p className={styles.category_text}>Phones</p>
          </div>
          <div className={styles.category}>
            <Image width={48} height={48} src={categoryGamingIcon} alt='phones-icon' />
            <p className={styles.category_text}>Gaming</p>
          </div>
        </div>
      </div>
    </section>
  )
}
