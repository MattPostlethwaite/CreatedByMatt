import React from 'react';

// styling
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <h1>
        Hi, I'm{' '}
        <span className={styles.Name}>
          Matt Postlethwaite <span className={styles.Wave}>👋</span>
        </span>
      </h1>
      <h2>
        I'm a developer, designer,
        <br />
        and I create things...
      </h2>
    </div>
  );
};

export default Intro;
