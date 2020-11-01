import { useState } from 'react';

// Components
import Intro from '../components/molecule/Intro';
import Projects from '../components/organism/Projects';
import ContentWrap from '../components/utils/ContentWrap';

export default function Home() {
  return (
    <ContentWrap>
      <Intro />
      <Projects />
    </ContentWrap>
  );
}
