// Context
import { useAppContext } from "../../utils/AppContext";

// Styling
import styles from "./OnAir.module.scss";

const OnAir = () => {
  const { speech, setSpeech } = useAppContext();

  return (
    <div className={styles.OnAir}>
      {speech ? (
        <>
          <div className={styles.light}></div>
          <p>ON AIR</p>
        </>
      ) : null}
      <button type="button" onClick={() => setSpeech((current) => !current)}>
        🎙
      </button>
    </div>
  );
};

export default OnAir;
