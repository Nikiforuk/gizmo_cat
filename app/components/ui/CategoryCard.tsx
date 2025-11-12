import Image from 'next/image';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  icon: string;
  text: string;
}

export default function CategoryCard({ icon, text }: CategoryCardProps) {
  return (
    <div className={styles.container}>
      <Image width={48} height={48} src={icon} alt="phones-icon" />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
