import Link from 'next/link';
// Styling
import styles from './Button.module.scss';

const Button = ({ href, as, onClick, children }) => {
  return href ? (
    <Link href={href} as={as}>
      <a className={styles.Button}>{children}</a>
    </Link>
  ) : (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
