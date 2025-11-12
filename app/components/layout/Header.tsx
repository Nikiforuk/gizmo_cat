'use client';
import { ChangeEvent, useState } from 'react';

import Image from 'next/image';

import Navigation from './Navigation';
import logo from '../../assets/icons/logo-black.svg';
import styles from '../layout/Header.module.scss';
import SearchInput from '../ui/SearchInput';

export default function Header() {
  const [searchValue, setSearchvalue] = useState<string>('');

  const handleSubmitForm = () => {
    console.log('submit');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(e.target.value);
  };

  return (
    <header className={styles.container}>
      <div className={styles.flexBox}>
        <Image src={logo} width={92} height={32} alt="logo-black" className={styles.logo} />
        <SearchInput
          value={searchValue}
          onSubmitCallback={handleSubmitForm}
          onChangeCallback={handleChangeInput}
          placeholder={'Search'}
          size={true}
        />
        <Navigation />
      </div>
    </header>
  );
}
