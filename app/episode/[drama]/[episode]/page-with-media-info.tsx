// This is an example of how to use the MediaInfoDisplay component
// You can integrate this into your existing episode page

import { MediaInfoDisplay } from "@/components/media-info-display"

// Example data - replace this with your actual data from the ffprobe wrapper
const exampleMediaAnalysis = {
  duration: "00:45:30",
  format: {
    formatName: "matroska,webm",
    formatLongName: "Matroska / WebM",
  },
  primaryVideoStream: {
    codecName: "h264",
    codecLongName: "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
    width: 1920,
    height: 1080,
    frameRate: 23.976,
    bitRate: 4500000, // 4.5 Mbps
    bitDepth: 8,
    pixelFormat: "yuv420p",
  },
  primaryAudioStream: {
    codecName: "aac",
    codecLongName: "AAC (Advanced Audio Coding)",
    channels: 2,
    channelLayout: "stereo",
    sampleRateHz: 48000,
    bitRate: 192000, // 192 Kbps
  },
  subtitleStreams: [
    { language: "English", codecName: "subrip" },
    { language: "Spanish", codecName: "subrip" },
    { language: "Korean", codecName: "subrip" },
  ],
}

// In your episode page component:
const PageWithMediaInfo = () => {
  return (
    <div className="mb-8">
      <MediaInfoDisplay mediaAnalysis={exampleMediaAnalysis} />
    </div>
  )
}

export default PageWithMediaInfo
