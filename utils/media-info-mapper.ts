// This utility function transforms your C# ffprobe wrapper data to the format needed by the MediaInfoDisplay component

export function mapMediaAnalysis(mediaAnalysis: any) {
  return {
    duration: formatTimeSpan(mediaAnalysis.Duration),
    format: {
      formatName: mediaAnalysis.Format.FormatName,
      formatLongName: mediaAnalysis.Format.FormatLongName,
    },
    primaryVideoStream: mediaAnalysis.PrimaryVideoStream
      ? {
          codecName: mediaAnalysis.PrimaryVideoStream.CodecName,
          codecLongName: mediaAnalysis.PrimaryVideoStream.CodecLongName,
          width: mediaAnalysis.PrimaryVideoStream.Width,
          height: mediaAnalysis.PrimaryVideoStream.Height,
          frameRate: mediaAnalysis.PrimaryVideoStream.FrameRate,
          bitRate: mediaAnalysis.PrimaryVideoStream.BitRate,
          bitDepth: mediaAnalysis.PrimaryVideoStream.BitDepth,
          pixelFormat: mediaAnalysis.PrimaryVideoStream.PixelFormat,
        }
      : undefined,
    primaryAudioStream: mediaAnalysis.PrimaryAudioStream
      ? {
          codecName: mediaAnalysis.PrimaryAudioStream.CodecName,
          codecLongName: mediaAnalysis.PrimaryAudioStream.CodecLongName,
          channels: mediaAnalysis.PrimaryAudioStream.Channels,
          channelLayout: mediaAnalysis.PrimaryAudioStream.ChannelLayout,
          sampleRateHz: mediaAnalysis.PrimaryAudioStream.SampleRateHz,
          bitRate: mediaAnalysis.PrimaryAudioStream.BitRate,
        }
      : undefined,
    subtitleStreams: mediaAnalysis.SubtitleStreams.map((sub: any) => ({
      language: sub.Language,
      codecName: sub.CodecName,
    })),
  }
}

// Helper function to format TimeSpan to string
function formatTimeSpan(timeSpan: string) {
  // Assuming timeSpan is in a format that can be parsed
  // You may need to adjust this based on your actual data format
  try {
    const date = new Date(timeSpan)
    return date.toISOString().substr(11, 8) // Returns HH:MM:SS
  } catch (e) {
    return timeSpan.toString()
  }
}
