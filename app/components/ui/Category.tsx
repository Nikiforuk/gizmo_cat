'use client';

import React from 'react';

import ButtonArrow from './ButtonArrow';
import CategoryCard from './CategoryCard';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import camerasIcon from '../../assets/icons/cameras.svg';
import gamingIcon from '../../assets/icons/gaming.svg';
import hpIcon from '../../assets/icons/hp.svg';
import pcIcon from '../../assets/icons/pc.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import swIcon from '../../assets/icons/sw.svg';
import styles from '../ui/Category.module.scss';

export default function Category() {
  const categories = [
    { icon: phoneIcon, text: 'Phones' },
    { icon: swIcon, text: 'Smart Watches' },
    { icon: camerasIcon, text: 'Cameras' },
    { icon: hpIcon, text: 'Headphones' },
    { icon: pcIcon, text: 'Computers' },
    { icon: gamingIcon, text: 'Gaming' },
  ];
  const handleClickLeft = () => {
    console.log('left');
  };

  const handleClickRight = () => {
    console.log('left');
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.top_title}>Browse By Category</h2>
          <div className={styles.top_groupButtons}>
            <ButtonArrow callback={handleClickLeft} icon={arrowLeftIcon} />
            <ButtonArrow callback={handleClickRight} icon={arrowRightIcon} />
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((item, i) => (
            <React.Fragment key={i}>
              <CategoryCard icon={item.icon} text={item.text} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
