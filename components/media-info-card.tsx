"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Film, Volume2, Clock, Maximize, Languages, ChevronDown } from "lucide-react"

interface IMediaAnalysis {
  Duration: string
  Format: {
    FormatName: string
    FormatLongName: string
  }
  PrimaryAudioStream?: {
    Channels: number
    ChannelLayout: string
    SampleRateHz: number
    CodecName: string
    BitRate: number
  }
  PrimaryVideoStream?: {
    Width: number
    Height: number
    FrameRate: number
    CodecName: string
    BitRate: number
    BitDepth?: number
  }
  SubtitleStreams: {
    Language?: string
    CodecName: string
    Title?: string
    Default?: boolean
    Forced?: boolean
    Format?: string
    SDH?: boolean
  }[]
}

export default function MediaInfoCard({ mediaInfo }: { mediaInfo: IMediaAnalysis }) {
  const [showAllSubtitles, setShowAllSubtitles] = useState(false)

  // Format bitrate to be more readable
  const formatBitrate = (bitrate: number) => {
    if (bitrate > 1000000) {
      return `${(bitrate / 1000000).toFixed(2)} Mbps`
    } else {
      return `${(bitrate / 1000).toFixed(0)} Kbps`
    }
  }

  // Get video quality label
  const getVideoQualityLabel = () => {
    if (!mediaInfo.PrimaryVideoStream) return "Unknown"

    const { Width, Height } = mediaInfo.PrimaryVideoStream

    if (Width >= 3840 || Height >= 2160) return "4K"
    if (Width >= 1920 || Height >= 1080) return "1080p"
    if (Width >= 1280 || Height >= 720) return "720p"
    if (Width >= 854 || Height >= 480) return "480p"
    return `${Height}p`
  }

  // Get audio quality label
  const getAudioQualityLabel = () => {
    if (!mediaInfo.PrimaryAudioStream) return "Unknown"

    const { Channels, ChannelLayout, BitRate } = mediaInfo.PrimaryAudioStream

    let channelDesc = ""
    if (Channels === 1) channelDesc = "Mono"
    else if (Channels === 2) channelDesc = "Stereo"
    else if (Channels === 6) channelDesc = "5.1"
    else if (Channels === 8) channelDesc = "7.1"
    else channelDesc = `${Channels} channels`

    return `${channelDesc} (${formatBitrate(BitRate)})`
  }

  // Language name mapping for better display
  const languageNames: Record<string, string> = {
    eng: "English",
    spa: "Spanish",
    kor: "Korean",
    jpn: "Japanese",
    chi: "Chinese",
    fra: "French",
    ger: "German",
    ita: "Italian",
    por: "Portuguese",
    rus: "Russian",
    ara: "Arabic",
    hin: "Hindi",
    tha: "Thai",
    vie: "Vietnamese",
    ind: "Indonesian",
    may: "Malay",
  }

  // Get full language name
  const getLanguageName = (code: string) => {
    return languageNames[code.toLowerCase()] || code
  }

  // Process subtitle streams to group by language and type
  const processSubtitles = () => {
    const subtitles = mediaInfo.SubtitleStreams.map((sub) => ({
      ...sub,
      LanguageName: getLanguageName(sub.Language || "Unknown"),
    }))

    // Sort by default first, then by language name
    return subtitles.sort((a, b) => {
      if (a.Default && !b.Default) return -1
      if (!a.Default && b.Default) return 1
      return a.LanguageName.localeCompare(b.LanguageName)
    })
  }

  const subtitles = processSubtitles()
  const hasSDH = subtitles.some((sub) => sub.SDH)
  const subtitleFormat = subtitles.length > 0 ? subtitles[0].Format || "SubRip (SRT)" : "Unknown"

  // Determine how many subtitles to show initially
  const visibleSubtitles = showAllSubtitles ? subtitles : subtitles.slice(0, 4)
  const hasMoreSubtitles = subtitles.length > 4

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Video */}
        {mediaInfo.PrimaryVideoStream && (
          <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Film className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900">Video</p>
              <p className="text-sm text-blue-700">
                {getVideoQualityLabel()} {mediaInfo.PrimaryVideoStream.CodecName.toUpperCase()}
              </p>
            </div>
          </div>
        )}

        {/* Audio */}
        {mediaInfo.PrimaryAudioStream && (
          <div className="flex items-center gap-3 bg-purple-50 rounded-lg p-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Volume2 className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-900">Audio</p>
              <p className="text-sm text-purple-700">
                {getAudioQualityLabel().split(" ")[0]} {mediaInfo.PrimaryAudioStream.CodecName.toUpperCase()}
              </p>
            </div>
          </div>
        )}

        {/* Resolution */}
        {mediaInfo.PrimaryVideoStream && (
          <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-3">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Maximize className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-900">Resolution</p>
              <p className="text-sm text-emerald-700">
                {mediaInfo.PrimaryVideoStream.Width}×{mediaInfo.PrimaryVideoStream.Height}
              </p>
            </div>
          </div>
        )}

        {/* Duration */}
        <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
          <div className="bg-amber-100 p-2 rounded-full">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-amber-900">Duration</p>
            <p className="text-sm text-amber-700">{mediaInfo.Duration}</p>
          </div>
        </div>
      </div>

      {/* Subtitles - New Netflix-style design */}
      {subtitles.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-gray-700" />
              <h3 className="text-sm font-medium">Available Subtitles</h3>
            </div>
            <Badge variant="secondary" className="rounded-full bg-gray-900 text-white text-xs px-3">
              {subtitles.length} Languages
            </Badge>
          </div>

          <div className="space-y-2">
            {visibleSubtitles.map((subtitle, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${subtitle.Default ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <span className="text-sm font-medium">{subtitle.LanguageName}</span>
                  {subtitle.SDH && (
                    <Badge variant="outline" className="text-xs bg-transparent">
                      SDH
                    </Badge>
                  )}
                </div>
                {subtitle.Default && (
                  <Badge className="bg-green-500 text-white text-xs px-3 rounded-full">Default</Badge>
                )}
              </div>
            ))}
          </div>

          {hasMoreSubtitles && (
            <Button
              variant="ghost"
              className="w-full mt-2 text-sm text-gray-600 flex items-center justify-center"
              onClick={() => setShowAllSubtitles(!showAllSubtitles)}
            >
              <ChevronDown className={`h-4 w-4 mr-1 transition-transform ${showAllSubtitles ? "rotate-180" : ""}`} />
              {showAllSubtitles ? "Show Less" : `Show All ${subtitles.length} Languages`}
            </Button>
          )}

          {/* Subtitle Information */}
          <div className="mt-3">
            <h4 className="text-sm font-medium mb-2">Subtitle Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Format</p>
                <p className="text-sm">{subtitleFormat}</p>
              </div>
              {hasSDH && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Accessibility</p>
                  <p className="text-sm">SDH Available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
