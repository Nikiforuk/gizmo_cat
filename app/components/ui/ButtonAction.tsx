import styles from '../ui/ButtonAction.module.scss';

interface ButtonActionProps {
  callback: () => void;
  width: number;
  text: string;
  bgColor?: string;
  radius?: number;
  borderColor?: string;
  textColor?: string;
}

export default function ButtonAction({
  callback,
  width,
  text,
  bgColor,
  radius,
  borderColor,
  textColor,
}: ButtonActionProps) {
  return (
    <button
      onClick={callback}
      type="button"
      className={`${styles.button} ${styles.background}`}
      style={{
        borderColor: borderColor,
        borderRadius: radius,
        width: width,
        background: bgColor,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
}
