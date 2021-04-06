// Components
import Intro from "../components/molecule/Intro";
// import Projects from "../components/organism/Projects";
import ContentWrap from "../components/utils/ContentWrap";
import SkewWrap from "../components/utils/SkewWrap";
import OnAir from "../components/atom/OnAir";

// Context
import { useAppContext } from "../components/utils/AppContext";
import PartyToggle from "../components/atom/PartyToggle";
import ActionButtons from "../components/molecule/ActionButtons";

// Utils
// import useSpeechRecongition from "../utils/speech.js";

export default function Home() {
  const { setPartyMode, speech } = useAppContext();

  // useEffect(() => {
  //   if (speech) {
  //     // console.log(speechRecongition);
  //     useSpeechRecongition({ PARTY: "party" }).START();
  //     setSpeech(true);
  //   } else {
  //     useSpeechRecongition().STOP();
  //     setSpeech(false);
  //   }
  // }, [speech]);

  return (
    <>
      <ActionButtons />
      <SkewWrap>
        <ContentWrap>
          <Intro />
          <Intro />
          <Intro />
          <Intro />
          <Intro />
          <Intro />
          <Intro />
        </ContentWrap>
      </SkewWrap>
    </>
  );
}
