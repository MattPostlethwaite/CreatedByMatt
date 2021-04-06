// Context
import { useAppContext } from "../../utils/AppContext";

// Styling
import styles from "./PartyToggle.module.scss";

const PartyToggle = ({ children, live }) => {
  const { setPartyMode } = useAppContext();

  return (
    <button
      type="button"
      className={styles.PartyToggle}
      onClick={() => setPartyMode((current) => !current)}
    >
      🎉
    </button>
  );
};

export default PartyToggle;
