import React from 'react';

import Link from 'next/link';

import cartIcon from '../../assets/icons/cart.svg';
import favoriteIcon from '../../assets/icons/favorites.svg';
import userIcon from '../../assets/icons/user.svg';
import styles from '../layout/Navigation.module.scss';
import ButtonNav from '../ui/ButtonNav';

export default function Navigation() {
  const links = [
    { text: 'Home', href: 'nav' },
    { text: 'About', href: 'nav' },
    { text: 'Contact Us', href: 'nav' },
    { text: 'Blog', href: 'nav' },
  ];
  const groupIcons = [{ icon: favoriteIcon }, { icon: cartIcon }, { icon: userIcon }];
  return (
    <nav className={styles.container}>
      <ul className={styles.nav_list}>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <li className={styles.nav_list_item}>
              <Link className={styles.nav_list_link} href="nav">
                {item.text}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.btns}>
        {groupIcons.map((item, i) => (
          <React.Fragment key={i}>
            <ButtonNav icon={item.icon} width={32} height={32} />
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
