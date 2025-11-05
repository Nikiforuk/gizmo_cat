import Image from 'next/image';

import logoWhite from '../../assets/icons/logo-white.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

import styles from '../../ui/common/Footer.module.scss';

export default function Footer() {
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
              src={logoWhite}
              alt='white-logo'
            />
          </li>
          <li className={styles.firstList_item}>
            We are a residential interior design firm located in Portland. Our
            <br></br>
            boutique-studio offers more than
          </li>
        </ul>
        <ul className={styles.secondList}>
          <h6 className={styles.secondList_title}>Services</h6>
          <li className={styles.secondList_item}>
            Bonus program
          </li>
          <li className={styles.secondList_item}>
            Gift cards
          </li>
          <li className={styles.secondList_item}>
            Credit and payment
          </li>
          <li className={styles.secondList_item}>
            Service contracts
          </li>
          <li className={styles.secondList_item}>
            Non-cash account
          </li>
          <li className={styles.secondList_item}>
            Payment
          </li>
        </ul>
        <ul className={styles.secondList}>
          <h6 className={styles.secondList_title}>Assistance to the buyer</h6>
          <li className={styles.secondList_item}>
            Find an order
          </li>
          <li className={styles.secondList_item}>
            Terms of delivery
          </li>
          <li className={styles.secondList_item}>
            Exchange and return of goods
          </li>
          <li className={styles.secondList_item}>
            Guarantee
          </li>
          <li className={styles.secondList_item}>
            Erequently asked questions
          </li>
          <li className={styles.secondList_item}>
            Terms of use of the site
          </li>
        </ul>
      </div>
      <div className={styles.groupIcons}>
          <Image
            className={styles.firstList_item_logo}
            width={16}
            height={16} 
            src={twitterIcon}
            alt='twitter-logo'
          />
          <Image
            className={styles.firstList_item_logo}
            width={16}
            height={16} 
            src={facebookIcon}
            alt='twitter-logo'
          />
          <Image
            className={styles.firstList_item_logo}
            width={16}
            height={16} 
            src={tiktokIcon}
            alt='twitter-logo'
          />
          <Image
            className={styles.firstList_item_logo}
            width={16}
            height={16} 
            src={instagramIcon}
            alt='twitter-logo'
          />
        </div>
      </div>
    </footer>
  )
}