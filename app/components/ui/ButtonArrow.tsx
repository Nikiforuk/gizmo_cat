import Image from 'next/image';

import styles from '../ui/ButtonArrow.module.scss';

interface ButtonArrowProps {
  callback: () => void;
  icon: string;
}

export default function ButtonArrow({ icon, callback }: ButtonArrowProps) {
  return (
    <button onClick={callback} className={styles.button} type="button">
      <Image src={icon} width={32} height={32} alt="arrow-icon" />
    </button>
  );
}
