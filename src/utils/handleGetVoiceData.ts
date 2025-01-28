import axios from "axios"
import { APITranscriptionResponse } from "../types/TranscriptionResponse"
// import { API_ROUTES } from "../constants"


const API_ENDPOINT = "https://api.lemonfox.ai/v1/audio/transcriptions"
export const handleGetVoiceData = async (audioBlob: Blob) => {
  console.log({ data :import.meta.env.VITE_BEAR_KEY_AI})
  try {
    const formData = new FormData()
    formData.append("file", audioBlob)
    formData.append("language", "english")
    formData.append("response_format", "json")

    const { data } = await axios.post<APITranscriptionResponse>(
      `${API_ENDPOINT}`,
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Authorization': `Bearer ${import.meta.env.VITE_BEAR_KEY_AI}`
        },
      }
    )
    console.log("🚀 ~ downloadAudio ~ data:", data)

    return data.text
  } catch (error) {
    console.log("🚀 ~ downloadAudio ~ error:", error)
  }
}
