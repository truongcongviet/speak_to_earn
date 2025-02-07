import Container from "../../container";
import VoiceRecorder from "../../components/VoiceRecorder";
import Paragraph from "../../components/Paragraph";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useVoice } from "../../providers/VoiceProvider";
import { calculateSimilarity, getScoreMessage } from "../../utils/matchedFunc";
import Celebrate from "../../components/Celebrate";

const Adventure = () => {
  const { script, finalTranscript } = useVoice()
  const { percentage } = calculateSimilarity(finalTranscript, script)
  
  const messageAdvice = getScoreMessage(Number(percentage))
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
    
      {!!finalTranscript && (
        <Celebrate
          isActive={true}
          duration={2800}
          particleCount={100}
          colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']}
        />
      )}
        <div className="flex flex-1 mt-4">
          <VoiceRecorder />
        </div>
      </div>
    </Container>
  );
};

export default Adventure;
