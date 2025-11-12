'use client';

import Image from 'next/image';

import ButtonAction from './ButtonAction';
import macImg from '../../assets/images/popular-mac.png';
import styles from '../ui/Popular.module.scss';

export default function Popular() {
  const handleClick = () => {
    console.log('Shop now');
  };
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.firstContent}`}>
        <div className={styles.top}>
          <Image src={macImg} width={272} height={312} alt="product-image" />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlock_name}>Macbook Pro</h3>
          <p className={styles.textBlock_desc}>
            iPad combines a magnificent 10.2-inch Retina
            <br></br>
            display, incredible performance, multitasking and
            <br></br>
            ease of use.
          </p>
          <ButtonAction
            callback={handleClick}
            radius={8}
            width={185}
            bgColor="#FFFFFF"
            borderColor="black"
            text="Shop now"
            textColor="black"
          />
        </div>
      </div>
      <div className={`${styles.content} ${styles.secondContent}`}>
        <div className={styles.top}>
          <Image src={macImg} width={272} height={312} alt="product-image" />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlock_name}>Macbook Pro</h3>
          <p className={styles.textBlock_desc}>
            iPad combines a magnificent 10.2-inch Retina
            <br></br>
            display, incredible performance, multitasking and
            <br></br>
            ease of use.
          </p>
          <ButtonAction
            callback={handleClick}
            radius={8}
            width={185}
            bgColor="#F9F9F9"
            borderColor="black"
            text="Shop now"
            textColor="black"
          />
        </div>
      </div>
      <div className={`${styles.content} ${styles.thirdContent}`}>
        <div className={styles.top}>
          <Image src={macImg} width={272} height={312} alt="product-image" />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlock_name}>Macbook Pro</h3>
          <p className={styles.textBlock_desc}>
            iPad combines a magnificent 10.2-inch Retina
            <br></br>
            display, incredible performance, multitasking and
            <br></br>
            ease of use.
          </p>
          <ButtonAction
            callback={handleClick}
            radius={8}
            width={185}
            bgColor="#EAEAEA"
            borderColor="black"
            text="Shop now"
            textColor="black"
          />
        </div>
      </div>
      <div className={`${styles.content} ${styles.fourthContent}`}>
        <div className={styles.top}>
          <Image src={macImg} width={272} height={312} alt="product-image" />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlock_name}>Macbook Pro</h3>
          <p className={styles.textBlock_desc}>
            iPad combines a magnificent 10.2-inch Retina
            <br></br>
            display, incredible performance, multitasking and
            <br></br>
            ease of use.
          </p>
          <ButtonAction
            callback={handleClick}
            radius={8}
            width={185}
            bgColor="#2C2C2C"
            borderColor="#FFFFFF"
            text="Shop now"
            textColor="#FFFFFF"
          />
        </div>
      </div>
    </section>
  );
}
