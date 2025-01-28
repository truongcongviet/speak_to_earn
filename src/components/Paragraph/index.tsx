import { useVoice } from "../../providers/VoiceProvider"
import { highlightMatchedWords } from "../../utils/highlightMatchedWords"
import { calculateSimilarity } from "../../utils/matchedFunc"
import { removePunctuationAndQuotation } from "../../utils/stringToParagraph"

const Paragraph = () => {
  const { script, finalTranscript } = useVoice()
  const { percentage } = calculateSimilarity(finalTranscript, script)
  return (
    <div className="rounded-lg text-center max-h-full mx-4 lg:mx-10 p-4 overflow-auto text-lg lg:text-2xl bg-purple-50 shadow-lg">
      {finalTranscript ? (
        <>
          <p>Result: {Number(percentage)}%</p>
          {highlightMatchedWords(
            script,
            removePunctuationAndQuotation(finalTranscript.toLowerCase()).split(" ")
          )}
        </>
      ) : (
        script
      )}
    </div>
  )
}

export default Paragraph
