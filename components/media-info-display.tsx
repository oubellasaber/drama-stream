"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Volume2, FileText, Clock, Maximize, Info, Languages, ChevronDown, ChevronUp } from "lucide-react"

interface MediaInfoDisplayProps {
  mediaAnalysis: {
    duration: string // TimeSpan as string "00:45:30"
    format: {
      formatName: string
      formatLongName: string
    }
    primaryVideoStream?: {
      codecName: string
      codecLongName: string
      width: number
      height: number
      frameRate: number
      bitRate: number
      bitDepth?: number
      pixelFormat: string
    }
    primaryAudioStream?: {
      codecName: string
      codecLongName: string
      channels: number
      channelLayout: string
      sampleRateHz: number
      bitRate: number
    }
    subtitleStreams: {
      language?: string
      codecName: string
    }[]
  }
}

export default function MediaInfoDisplay({ mediaAnalysis }: MediaInfoDisplayProps) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false)

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
    if (!mediaAnalysis.primaryVideoStream) return "Unknown"

    const { width, height } = mediaAnalysis.primaryVideoStream

    if (width >= 3840 || height >= 2160) return "4K"
    if (width >= 1920 || height >= 1080) return "1080p"
    if (width >= 1280 || height >= 720) return "720p"
    if (width >= 854 || height >= 480) return "480p"
    return `${height}p`
  }

  // Get audio quality label
  const getAudioQualityLabel = () => {
    if (!mediaAnalysis.primaryAudioStream) return "Unknown"

    const { channels, channelLayout, bitRate } = mediaAnalysis.primaryAudioStream

    let channelDesc = ""
    if (channels === 1) channelDesc = "Mono"
    else if (channels === 2) channelDesc = "Stereo"
    else if (channels === 6) channelDesc = "5.1"
    else if (channels === 8) channelDesc = "7.1"
    else channelDesc = `${channels} channels`

    return `${channelDesc} (${formatBitrate(bitRate)})`
  }

  // Get subtitle languages
  const getSubtitleLanguages = () => {
    return mediaAnalysis.subtitleStreams
      .map((sub) => sub.language || "Unknown")
      .filter((lang, index, self) => self.indexOf(lang) === index) // Remove duplicates
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center text-xl">
          <FileText className="w-5 h-5 mr-2" />
          Media Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Video Info */}
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
              <Film className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Video</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="rounded-full">
                  {getVideoQualityLabel()}
                </Badge>
                {mediaAnalysis.primaryVideoStream?.bitDepth && (
                  <Badge variant="outline" className="rounded-full">
                    {mediaAnalysis.primaryVideoStream.bitDepth}-bit
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {mediaAnalysis.primaryVideoStream?.codecName.toUpperCase() || "Unknown codec"}
              </p>
            </div>
          </div>

          {/* Audio Info */}
          <div className="flex items-start gap-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mt-1">
              <Volume2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Audio</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="rounded-full">
                  {getAudioQualityLabel()}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {mediaAnalysis.primaryAudioStream?.codecName.toUpperCase() || "Unknown codec"}
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-3">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mt-1">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Duration</p>
              <p className="text-sm">{mediaAnalysis.duration}</p>
            </div>
          </div>

          {/* Resolution */}
          {mediaAnalysis.primaryVideoStream && (
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full mt-1">
                <Maximize className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Resolution</p>
                <p className="text-sm">
                  {mediaAnalysis.primaryVideoStream.width} × {mediaAnalysis.primaryVideoStream.height}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Subtitles */}
        {mediaAnalysis.subtitleStreams.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="h-4 w-4 text-gray-500" />
              <h3 className="text-sm font-medium">Subtitles</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {getSubtitleLanguages().map((language, index) => (
                <Badge key={index} variant="outline" className="rounded-full">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Technical Details Toggle */}
        <button
          onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
          className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 mt-4 transition-colors"
        >
          <Info className="h-3.5 w-3.5" />
          {showTechnicalDetails ? (
            <>
              <span>Hide technical details</span>
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              <span>Show technical details</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        {/* Technical Details */}
        {showTechnicalDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Tabs defaultValue="video">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
                <TabsTrigger value="format">Format</TabsTrigger>
              </TabsList>

              <TabsContent value="video" className="mt-4">
                {mediaAnalysis.primaryVideoStream ? (
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-500">Codec:</div>
                      <div>{mediaAnalysis.primaryVideoStream.codecLongName}</div>

                      <div className="text-gray-500">Frame Rate:</div>
                      <div>{mediaAnalysis.primaryVideoStream.frameRate.toFixed(2)} fps</div>

                      <div className="text-gray-500">Bit Rate:</div>
                      <div>{formatBitrate(mediaAnalysis.primaryVideoStream.bitRate)}</div>

                      <div className="text-gray-500">Pixel Format:</div>
                      <div>{mediaAnalysis.primaryVideoStream.pixelFormat}</div>

                      {mediaAnalysis.primaryVideoStream.bitDepth && (
                        <>
                          <div className="text-gray-500">Bit Depth:</div>
                          <div>{mediaAnalysis.primaryVideoStream.bitDepth}-bit</div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No video stream found</p>
                )}
              </TabsContent>

              <TabsContent value="audio" className="mt-4">
                {mediaAnalysis.primaryAudioStream ? (
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-500">Codec:</div>
                      <div>{mediaAnalysis.primaryAudioStream.codecLongName}</div>

                      <div className="text-gray-500">Channels:</div>
                      <div>
                        {mediaAnalysis.primaryAudioStream.channels} ({mediaAnalysis.primaryAudioStream.channelLayout})
                      </div>

                      <div className="text-gray-500">Sample Rate:</div>
                      <div>{mediaAnalysis.primaryAudioStream.sampleRateHz} Hz</div>

                      <div className="text-gray-500">Bit Rate:</div>
                      <div>{formatBitrate(mediaAnalysis.primaryAudioStream.bitRate)}</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No audio stream found</p>
                )}
              </TabsContent>

              <TabsContent value="format" className="mt-4">
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-500">Format:</div>
                    <div>{mediaAnalysis.format.formatLongName}</div>

                    <div className="text-gray-500">Container:</div>
                    <div>{mediaAnalysis.format.formatName}</div>

                    <div className="text-gray-500">Duration:</div>
                    <div>{mediaAnalysis.duration}</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
