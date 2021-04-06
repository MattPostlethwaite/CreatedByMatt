// Context
import { useAppContext } from "../AppContext";

// Styling
import styles from "./PartyMode.module.scss";

const PartyMode = ({ children }) => {
  const { partyMode } = useAppContext();

  return <div className={partyMode ? styles.PartyMode : null}>{children}</div>;
};

export default PartyMode;
