import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import camerasIcon from '../../assets/icons/cameras-gray.svg';
import gamingIcon from '../../assets/icons/gaming-gray.svg';
import hpIcon from '../../assets/icons/hp-gray.svg';
import pcIcon from '../../assets/icons/pc-gray.svg';
import phoneIcon from '../../assets/icons/phone-gray.svg';
import styles from '../layout/SubNavigation.module.scss';

export default function SubNavigation() {
  const categories = [
    { icon: phoneIcon, title: 'Phones' },
    { icon: pcIcon, title: 'Computers' },
    { icon: gamingIcon, title: 'Smart-Watches' },
    { icon: camerasIcon, title: 'Cameras' },
    { icon: hpIcon, title: 'Headphones' },
    { icon: gamingIcon, title: 'Gaming' },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            {index !== 0 ? <div className={styles.nav_line} /> : ''}
            <li className={styles.nav_item}>
              <Link className={styles.nav_link} href="">
                <Image src={item.icon} width={24} height={24} alt="category-icon" />
                <p className={styles.nav_text}>{item.title}</p>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
