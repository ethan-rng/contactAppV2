from openai import OpenAI
from configSecrets import PASSWORD
def voicerecognition (audiofile):
  client = OpenAI(api_key = PASSWORD )

  audio_file= open(audiofile, "rb")
  transcription = client.audio.transcriptions.create(
    model="whisper-1", 
    file=audio_file
  )
  print(transcription.text)