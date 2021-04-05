// Styling
import styles from './SkewWrap.module.scss';

const SkewWrap = ({ children }) => {
  return (
    <div className={styles.SkewWrap}>
      <div className={styles.SkewCounter}>{children}</div>
    </div>
  );
};

export default SkewWrap;
