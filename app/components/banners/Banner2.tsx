'use client';

import styles from '../../ui/banners/Banner2.module.scss'
import ButtonAction from '../buttons/ButtonAction'

export default function Banner2() {
  const handleClick = () => {
    console.log('Shop now');
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.content_title}>
          Big Summer {' '}
          <span className={styles.content_sale}>Sale</span>
        </h1>
        <p className={styles.content_desc}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <ButtonAction
          callback={handleClick}
          radius={6}
          bgColor='transparent'
          borderColor='#FFFFFF'
          text='Shop now'
          textColor='#FFFFFF'
          width={184}
        />
      </div>
    </div>
  )
}
