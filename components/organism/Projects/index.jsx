// Components
import ProjectHeader from '../../molecule/ProjectHeader';
import ProjectTile from '../../molecule/ProjectTile';
// Styling
import styles from './Projects.module.scss';

const Projects = (props) => {
  return (
    <div className={styles.Projects}>
      <ProjectHeader />

      <div className={styles.ProjectWrap}>
        <ProjectTile
          title="Seneca Partners"
          type="ui design"
          href="/project/[slug]"
          as="/project/seneca-partners"
        />
        <ProjectTile
          title="Seneca Partners"
          type="ui design"
          href="/project/[slug]"
          as="/project/seneca-partners"
        />
        <ProjectTile
          title="Seneca Partners"
          type="ui design"
          href="/project/[slug]"
          as="/project/seneca-partners"
        />
      </div>
    </div>
  );
};

export default Projects;
