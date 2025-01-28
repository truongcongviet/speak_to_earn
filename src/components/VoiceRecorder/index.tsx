import { AudioOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useVoice } from "../../providers/VoiceProvider";

const VoiceRecorder = () => {
  const { startRecording, stopRecording, isRecording, setIsRecording, reset } =
    useVoice();
  const toggleRecordingState = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <div
          onClick={toggleRecordingState}
          className="flex size-12 shadow-md mt-auto items-center justify-center cursor-pointer rounded-xl bg-purple-200"
        >
          {isRecording ? (
            <img src={"/audio.svg"} className="size-10 animate-pulse" />
          ) : (
            <AudioOutlined className="text-2xl" />
          )}
        </div>
         
        <div className="flex flex-col justify-center items-center gap-[-12px]">
          <CaretUpOutlined />
          <p className="text-[14px]">Click here to <span className="font-bold">{isRecording ? "finish": "start"}</span></p>
        </div>
        <button
          className="cursor-pointer rounded-xl bg-purple-300 p-4 mt-4 btn-grad"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      
    </div>
  );
};

export default VoiceRecorder;
