// Styling
import styles from './ContentWrap.module.scss';

const ContentWrap = ({ children }) => {
  return <div className={styles.ContentWrap}>{children}</div>;
};

export default ContentWrap;
