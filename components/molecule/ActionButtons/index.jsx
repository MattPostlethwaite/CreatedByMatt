// Components
import OnAir from "../../atom/OnAir";
import PartyToggle from "../../atom/PartyToggle";

// Styling
import styles from "./ActionButtons.module.scss";

const ActionButtons = () => {
  return (
    <div className={styles.ActionButtons}>
      <OnAir />
      <PartyToggle />
    </div>
  );
};

export default ActionButtons;
