import { ChangeEvent } from 'react';

import Image from 'next/image';

import searchIcon from '../../assets/icons/search.svg';
import styles from '../ui/SearchInput.module.scss';

interface SearchInputProps {
  onSubmitCallback: () => void;
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  size: boolean;
}

export default function SearchInput({
  onSubmitCallback,
  onChangeCallback,
  value,
  placeholder,
  size,
}: SearchInputProps) {
  return (
    <form onSubmit={onSubmitCallback} className={styles.form}>
      <input
        value={value}
        type="Search"
        placeholder={placeholder}
        onChange={onChangeCallback}
        className={`${styles.search} ${size ? styles.inputLarge : styles.inputSmall}`}
      />
      <Image
        src={searchIcon}
        width={24}
        height={24}
        alt="logo-image"
        className={styles.searchIcon}
      />
    </form>
  );
}
