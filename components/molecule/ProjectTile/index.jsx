import Link from 'next/link';
// Assets
// import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
// Styling
import styles from './ProjectTile.module.scss';

const ProjectTile = ({ title, type, href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className={styles.ProjectTile}>
        <div className={styles.TitleWrap}>
          <h3 className={styles.Title}>{title}</h3>
          {!!type && <small>{type}</small>}
          <button className={styles.Button} type="button">
            {`->`}
          </button>
        </div>
      </a>
    </Link>
  );
};

export default ProjectTile;
