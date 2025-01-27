import Container from "../../container";
import VoiceRecorder from "../../components/VoiceRecorder";
import Paragraph from "../../components/Paragraph";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useVoice } from "../../providers/VoiceProvider";
import { cosineSimilarity, getScoreMessage } from "../../utils/matchedFunc";

const Adventure = () => {
  const { script, finalTranscript } = useVoice()
  const numberPercent = Number(cosineSimilarity(script, finalTranscript))
  
  const messageAdvice = getScoreMessage(numberPercent)
  return (
    <Container>
      <div className="flex flex-col items-center">
        {/* <div className="flex flex-none" style={{ margin: "16px auto" }}>
          {<ConnectButton />}
        </div> */}
        <div className="flex">
          <Paragraph />
        </div>
      {finalTranscript && messageAdvice && <p className="mt-4">{messageAdvice}</p> }

        <div className="flex flex-1 mt-4">
          <VoiceRecorder />
        </div>
      </div>
    </Container>
  );
};

export default Adventure;
