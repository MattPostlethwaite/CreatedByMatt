// Components
import ProjectToggle from '../../atom/ProjectToggle';
// Styling
import styles from './ProjectHeader.module.scss';

const ProjectHeader = () => {
  return (
    <div className={styles.ProjectHeader}>
      <h3>My creations</h3>
      <ProjectToggle />
    </div>
  );
};

export default ProjectHeader;
