'use client';

import Image from 'next/image';

import ButtonAction from './ButtonAction';
import hpImg from '../../assets/images/apple-hp.png';
import macProImg from '../../assets/images/mac-pro.png';
import playstationImg from '../../assets/images/playstation.png';
import vrImg from '../../assets/images/vr.png';
import styles from '../ui/SmallerBanners.module.scss';

export default function SmallerBanners() {
  const handleClick = () => {
    console.log('Shop now');
  };
  return (
    <section className={styles.container}>
      <div className={styles.groupBanners}>
        <div className={styles.wideSquare}>
          <Image src={playstationImg} alt="playstation-image" />
          <div className={styles.wideSquare_textBlock}>
            <h3 className={styles.wideSquare_title}>Playstation 5</h3>
            <p className={styles.wideSquare_desc}>
              Incredibly powerful CPUs, GPUs, and an SSD with
              <br></br>
              integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className={styles.squares}>
          <div className={styles.squareBanner}>
            <Image className={styles.squareBanner_hpImg} src={hpImg} alt="appleHp-image" />
            <div className={styles.squareBanner_textBlock}>
              <h5 className={styles.squareBanner_title}>
                Apple <br></br>AirPods <span className={styles.squareBanner_max}>Max</span>
              </h5>
              <p className={styles.squareBanner_desc}>
                Computational audio. <br></br> Listen, it&apos;s powerful
              </p>
            </div>
          </div>
          <div className={`${styles.squareBanner} ${styles.anotherBackground}`}>
            <Image className={styles.squareBanner_vrImg} src={vrImg} alt="vr-image" />
            <div className={`${styles.squareBanner_textBlock} ${styles.anotherBackground}`}>
              <h5 className={`${styles.squareBanner_title} ${styles.anotherColors}`}>
                Apple <br></br> Vision <span className={styles.squareBanner_pro}>Pro</span>
              </h5>
              <p className={styles.squareBanner_desc}>
                An immersive way to <br></br> experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bigBanner}>
        <div className={styles.bigBanner_content}>
          <h2 className={styles.bigBanner_title}>
            Macbook <span className={styles.bigBanner_air}>Air</span>
          </h2>
          <p className={styles.bigBanner_desc}>
            The new 15‑inch MacBook Air makes room for more of what
            <br></br>
            you love with a spacious Liquid Retina display.
          </p>
          <ButtonAction
            radius={9}
            width={184}
            bgColor="#EDEDED"
            borderColor="black"
            textColor="black"
            callback={handleClick}
            text="Shop now"
          />
        </div>
        <Image className={styles.bigBanner_macPro} src={macProImg} alt="macPro-image" />
      </div>
    </section>
  );
}
