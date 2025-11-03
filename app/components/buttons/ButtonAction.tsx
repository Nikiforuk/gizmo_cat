import styles from '../../ui/buttons/ButtonAction.module.scss';

interface ButtonActionProps {
  callback: () => void;
  text: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function ButtonAction({
  callback,
  text, 
  bgColor,
  borderColor,
  textColor
}: ButtonActionProps) {
  return (
    <button
      onClick={callback}
      type="button"
      className={`${styles.button} ${styles.background}`}
      style={{
        borderColor: borderColor,
        background: bgColor,
        color: textColor,
      }}
      >
        {text}
    </button>
  )
}
