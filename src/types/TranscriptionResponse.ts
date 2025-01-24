export type TranscriptionResponse = {
  text: string
}

export type APITranscriptionResponse = {
  text: any
  success: boolean
  data: {
    text: string
  }
}