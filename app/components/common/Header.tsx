'use client';

import Image from "next/image"
import { ChangeEvent, useState } from "react";
import SearchInput from "../inputs/SearchInput"

import Link from "next/link";
import ButtonNav from "../buttons/ButtonNav";

import favouriteIcon from '../../assets/icons/favourite.svg';
import cartIcon from '../../assets/icons/cart.svg';
import userIcon from '../../assets/icons/user.svg';

import styles from '../../ui/common/Header.module.scss';

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
        <Image
          src="/logo-black.svg"
          width={92}
          height={32}
          alt="logo black"
          className={styles.logo}
        />
        <SearchInput
          value={searchValue}
          onSubmitCallback={handleSubmitForm}
          onChangeCallback={handleChangeInput}
          placeholder={"Search"}
          size={true}
        />
      </div>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_item}>
              <Link href="nav">
                Home
              </Link>
              </li>
            <li className={styles.nav_list_item}>
              <Link href="">
                About
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="">
                Contact Us
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="">
                Blog
              </Link>
            </li>
          </ul>
          <div className={styles.btns}>
            <ButtonNav icon={favouriteIcon} width={32} height={32} />
            <ButtonNav icon={cartIcon} width={32} height={32} />
            <ButtonNav icon={userIcon} width={32} height={32} />
          </div>
        </nav>
    </header>
  )
}