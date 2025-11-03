'use client';

import Image from 'next/image';
import iphoneImg from '../../assets/images/iphone-banner.png';

import styles from '../../ui/banners/Banner.module.scss';
import ButtonAction from '../buttons/ButtonAction';

export default function Banner() {
  const handleClick = () => { 
    console.log('Shop now');
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <h3 className={styles.content_title}>
            Pro.Beyond.
          </h3>
          <h1 className={styles.content_smashTitle}>
            IPhone 14 {' '}
            <span className={styles.content_pro}>
              Pro
            </span>
          </h1>
          <p className={styles.content_desc}>Created to change everything for the better. For everyone</p>
          <ButtonAction callback={handleClick} text="Shop now" />
          </div>
          <div className={styles.rightBlock}>
            <Image src={iphoneImg} alt="iphone-image" />
          </div>
        </div>
    </section>
  )
}
