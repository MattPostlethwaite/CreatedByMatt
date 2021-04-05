import cx from "classnames";

// styling
import styles from "./Intro.module.scss";

// Assets
import Dribbble from "../../../assets/brands/dribbble.svg";
import LinkedIn from "../../../assets/brands/linkedin.svg";
import Twitter from "../../../assets/brands/twitter.svg";
import CodePen from "../../../assets/brands/codepen.svg";
import Instagram from "../../../assets/brands/instagram.svg";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <h1>
        Hi, I'm{" "}
        <span className={styles.Name}>
          Matt Postlethwaite <span className={styles.Wave}>👋</span>
        </span>
      </h1>
      <h2>
        I'm a developer, designer, photographer
        <br />
        and I create things!
      </h2>
      <a
        className={cx(styles.SocialLink, styles.Dribbble)}
        href="https://dribbble.com/CreatedByMatt"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">Dribbble</span>
        <Dribbble />
      </a>
      <a
        className={cx(styles.SocialLink, styles.Twitter)}
        href="https://twitter.com/TweetedByMatt"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">Twitter</span>
        <Twitter />
      </a>
      <a
        className={cx(styles.SocialLink, styles.LinkedIn)}
        href="https://www.linkedin.com/in/mattpostlethwaite/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">LinkedIn</span>
        <LinkedIn />
      </a>
      <a
        className={cx(styles.SocialLink, styles.CodePen)}
        href="https://codepen.io/Createdbymatt"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">CodePen</span>
        <CodePen />
      </a>
      <a
        className={cx(styles.SocialLink, styles.Instagram)}
        href="https://www.instagram.com/instabymatt/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="sr-only">Instagram</span>
        <Instagram />
      </a>
    </div>
  );
};

export default Intro;
