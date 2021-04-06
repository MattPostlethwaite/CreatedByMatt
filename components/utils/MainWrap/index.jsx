// Context
import { useAppContext } from "../AppContext";

// Components
import PartyMode from "../PartyMode";

// Styling
import styles from "./MainWrap.module.scss";

const MainWrap = ({ children }) => {
  return (
    <PartyMode>
      <div className={styles.MainWrap}>{children}</div>
    </PartyMode>
  );
};

export default MainWrap;
