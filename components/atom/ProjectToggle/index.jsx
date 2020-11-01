import React, { useState } from 'react';

// styling
import styles from './ProjectToggle.module.scss';

const ProjectToggle = () => {
  const [showingSlider, setShowingSlider] = useState(false);

  return (
    <button
      type="button"
      className={styles.ProjectToggle}
      onClick={() => setShowingSlider(!showingSlider)}
    >
      <p>{showingSlider ? 'grid' : 'slider'}</p>
      <div className={styles.Icon}>
        <span className={styles.IconSpan1}></span>
        <span className={styles.IconSpan2}></span>
        <span className={styles.IconSpan3}></span>
        <span className={styles.IconSpan4}></span>
      </div>
    </button>
  );
};

export default ProjectToggle;
