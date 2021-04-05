// Styling
import styles from './MainWrap.module.scss';

const MainWrap = ({ children }) => {
  return <div className={styles.MainWrap}>{children}</div>;
};

export default MainWrap;
