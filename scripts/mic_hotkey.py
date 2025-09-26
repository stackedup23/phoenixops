import os
import sounddevice as sd
import soundfile as sf
import threading
import keyboard
from datetime import datetime

# Config
AUDIO_DIR = os.path.expanduser("~/phoenixops/audio_logs")
FILENAME = "areap.wav"
SAMPLE_RATE = 44100  # CD quality
CHANNELS = 1         # Mono
FORMAT = 'WAV'
recording = False
frames = []

# Ensure audio_logs exists
os.makedirs(AUDIO_DIR, exist_ok=True)

def record_audio():
    global frames
    print("[🎙️] Recording started. Press F9 to stop...")
    with sd.InputStream(samplerate=SAMPLE_RATE, channels=CHANNELS, dtype='int16', callback=callback):
        while recording:
            sd.sleep(100)
    print("[✅] Recording stopped.")

def callback(indata, frames_count, time_info, status):
    if status:
        print(f"[⚠️] Audio Status Warning: {status}")
    frames.append(indata.copy())

def save_audio():
    filepath = os.path.join(AUDIO_DIR, FILENAME)
    combined = b''.join([frame.tobytes() for frame in frames])
    with sf.SoundFile(filepath, mode='w', samplerate=SAMPLE_RATE, channels=CHANNELS, format=FORMAT) as file:
        for frame in frames:
            file.write(frame)
    print(f"[💾] Audio saved to: {filepath}")

def toggle_recording():
    global recording, frames
    if not recording:
        frames = []
        recording = True
        threading.Thread(target=record_audio, daemon=True).start()
    else:
        recording = False
        save_audio()

def main():
    print("[🎛️] Reaper Audio Hotkey Live: Press F9 to toggle recording")
    keyboard.add_hotkey('f9', toggle_recording)
    keyboard.wait('esc')  # Use Esc to quit cleanly
    print("[🛑] Exiting cleanly.")

if __name__ == "__main__":
    main()
