import Image from 'next/image';
import Link from 'next/link';
import styles from '../../ui/navigations/SubNav.module.scss';

import phonesIcon from '../../assets/icons/phones.svg';
import computersIcon from '../../assets/icons/computers.svg';
import smartWatchesIcon from '../../assets/icons/gaming.svg';
import camerasIcon from '../../assets/icons/cameras.svg';
import headphonesIcon from '../../assets/icons/headphones.svg';
import gamingIcon from '../../assets/icons/gaming.svg';


export default function SubNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={phonesIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Phones</p>
          </Link>
        </li>
        <div className={styles.nav_line} />
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={computersIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Computers</p>
          </Link>
        </li>
        <div className={styles.nav_line} />
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={smartWatchesIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Smart Watches</p>
          </Link>
        </li>
        <div className={styles.nav_line} />
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={camerasIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Cameras</p>
          </Link>
        </li>
        <div className={styles.nav_line} />
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={headphonesIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Headphones</p>
          </Link>
        </li>
        <div className={styles.nav_line} />
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} href="">
            <Image src={gamingIcon} width={24} height={24} alt='category icon' />
            <p className={styles.nav_text}>Gaming</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
