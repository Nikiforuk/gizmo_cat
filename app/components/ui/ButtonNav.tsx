import Image from 'next/image';

import styles from '../ui/ButtonNav.module.scss';

interface ButtonNavProps {
  icon: string;
  width: number;
  height: number;
}

export default function ButtonNav({ icon, width, height }: ButtonNavProps) {
  return (
    <>
      <button type="button" className={styles.button}>
        <Image src={icon} width={width} height={height} alt="nav icon" />
      </button>
    </>
  );
}
