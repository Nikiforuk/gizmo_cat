import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import logo from '../../assets/icons/logo-white.svg';
import tiktokIcon from '../../assets/icons/tik-tok.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import styles from '../layout/Footer.module.scss';

export default function Footer() {
  const secondList = [
    { title: 'Services' },
    { text: 'Bonus program', href: 'link' },
    { text: 'Gift cards', href: 'link' },
    { text: 'Credit and payment', href: 'link' },
    { text: 'Service contracts', href: 'link' },
    { text: 'Non-cash account', href: 'link' },
    { text: 'Payment' },
  ];
  const secondList2 = [
    { title: 'Assistance to the buyer' },
    { text: 'Find an order', href: 'link' },
    { text: 'Terms of delivery', href: 'link' },
    { text: 'Exchange and return of goods', href: 'link' },
    { text: 'Guarantee', href: 'link' },
    { text: 'Erequently asked questions', href: 'link' },
    { text: 'Terms of use of the site', href: 'link' },
  ];
  const icons = [
    { logo: twitterIcon },
    { logo: facebookIcon },
    { logo: tiktokIcon },
    { logo: instagramIcon },
  ];
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.firstList}>
            <li className={styles.firstList_item}>
              <Image
                className={styles.firstList_item_logo}
                width={96}
                height={30}
                src={logo}
                alt="white-logo"
              />
            </li>
            <li className={styles.firstList_item}>
              We are a residential interior design firm located in Portland. Our
              <br></br>
              boutique-studio offers more than
            </li>
          </ul>
          <ul className={styles.secondList}>
            {secondList.map((item, i) => (
              <React.Fragment key={i}>
                {item.title ? (
                  <h6 className={styles.secondList_title}>{item.title}</h6>
                ) : item.href ? (
                  <li className={styles.secondList_item}>
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ) : null}
              </React.Fragment>
            ))}
          </ul>
          <ul className={styles.secondList}>
            {secondList2.map((item, i) => (
              <React.Fragment key={i}>
                {item.title ? (
                  <h6 className={styles.secondList_title}>{item.title}</h6>
                ) : item.href ? (
                  <li className={styles.secondList_item}>
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ) : null}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className={styles.groupIcons}>
          {icons.map((icon, i) => (
            <React.Fragment key={i}>
              <Image
                className={styles.firstList_item_logo}
                width={16}
                height={16}
                src={icon.logo}
                alt="logo-icon"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
