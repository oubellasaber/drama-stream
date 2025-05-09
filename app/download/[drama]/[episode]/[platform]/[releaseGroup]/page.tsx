import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Download, FileText, Film, HardDrive, Clock } from "lucide-react"

const downloadDetails = {
  dramaTitle: "Face Me (페이스 미)",
  episodeNumber: 1,
  episodeTitle: "Episode 1",
  platform: "TV Broadcast",
  releaseGroup: "NEXT",
  videoSource: "HDTV",
  runtime: "55:16",
  qualities: [
    {
      format: "720p MP4",
      filename: "Face.Me.S01E01.241106.720p-NEXT [DRAMADAY.mp4]",
      size: "1.47 GB",
      encoding: "H.264/AVC",
      colorDepth: "8-bit",
      frameRate: "29.97 fps",
      audio: "AAC 2.0 256 kbps",
      aspectRatio: "16:9",
      downloads: [
        { platform: "DataNodes", count: "15,234", url: "#" },
        { platform: "GDBot", count: "12,156", url: "#" },
        { platform: "SemiCM", count: "8,976", url: "#" },
        { platform: "MEGA", count: "10,543", url: "#" },
        { platform: "PixelDrain", count: "7,654", url: "#" },
        { platform: "BuzzHeaver", count: "6,543", url: "#" },
      ],
    },
    {
      format: "720p MKV",
      filename: "Face.Me.S01E01.241106.720p-NEXT [DRAMADAY.mkv]",
      size: "995 MB",
      encoding: "H.264/AVC",
      colorDepth: "8-bit",
      frameRate: "29.97 fps",
      audio: "AAC 2.0 128 kbps",
      aspectRatio: "16:9",
      downloads: [
        { platform: "DataNodes", count: "14,321", url: "#" },
        { platform: "GDBot", count: "11,987", url: "#" },
        { platform: "MEGA", count: "9,876", url: "#" },
        { platform: "SemiCM", count: "8,765", url: "#" },
        { platform: "BuzzHeaver", count: "7,654", url: "#" },
        { platform: "PixelDrain", count: "6,543", url: "#" },
      ],
    },
    {
      format: "540p MKV",
      filename: "Face.Me.S01E01.241106.540p-NEXT [DRAMADAY.mkv]",
      size: "647 MB",
      encoding: "H.264/AVC",
      colorDepth: "8-bit",
      frameRate: "29.97 fps",
      audio: "AAC 2.0 128 kbps",
      aspectRatio: "16:9",
      downloads: [
        { platform: "DataNodes", count: "12,210", url: "#" },
        { platform: "GDBot", count: "11,056", url: "#" },
        { platform: "MEGA", count: "9,076", url: "#" },
        { platform: "SemiCM", count: "7,654", url: "#" },
        { platform: "BuzzHeaver", count: "6,543", url: "#" },
        { platform: "PixelDrain", count: "6,543", url: "#" },
      ],
    },
  ],
  subtitles: [
    { language: "English", format: "SRT", size: "52 KB" },
    { language: "Spanish", format: "SRT", size: "48 KB" },
    { language: "French", format: "SRT", size: "51 KB" },
    { language: "German", format: "SRT", size: "50 KB" },
    { language: "Korean", format: "SRT", size: "45 KB" },
  ],
}

export default function DownloadPage({
  params,
}: {
  params: { drama: string; episode: string; platform: string; releaseGroup: string }
}) {
  // We can handle both 'platform' and 'version' parameters here
  const platformOrVersion = params.platform

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Link
          href={`/episode/${params.drama}/${params.episode}`}
          className="inline-flex items-center text-blue-600 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Episode
        </Link>

        <Card className="mb-6 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{downloadDetails.dramaTitle}</h1>
                <p className="text-lg text-gray-600">
                  Episode {downloadDetails.episodeNumber}: {downloadDetails.episodeTitle}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="rounded-full">
                  {downloadDetails.videoSource}
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Runtime: {downloadDetails.runtime}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue={downloadDetails.qualities[0].format}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Select quality" />
              </SelectTrigger>
              <SelectContent>
                {downloadDetails.qualities.map((quality) => (
                  <SelectItem key={quality.format} value={quality.format}>
                    {quality.format}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {downloadDetails.qualities.map((quality, index) => (
            <Collapsible key={quality.format}>
              <Card className="border-0 shadow-lg">
                <CardHeader className="p-4">
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <div className="flex flex-wrap items-center gap-4">
                      <Badge className="bg-blue-100 text-blue-800 rounded-full">{quality.format}</Badge>
                      <span className="text-sm text-gray-600">{quality.size}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200" />
                  </CollapsibleTrigger>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Encoding: {quality.encoding}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Color: {quality.colorDepth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">FPS: {quality.frameRate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Audio: {quality.audio}</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="text-sm text-gray-600 mb-2">Filename:</div>
                    <code className="text-sm bg-gray-100 p-3 rounded-md block mb-4 overflow-x-auto">
                      {quality.filename}
                    </code>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {quality.downloads.map((download) => (
                        <Card
                          key={download.platform}
                          className="border border-gray-200 hover:border-blue-200 transition-colors"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">{download.platform}</span>
                              <span className="text-sm text-gray-600">{download.count} downloads</span>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full" asChild>
                              <a href={download.url} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Subtitles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {downloadDetails.subtitles.map((subtitle) => (
                  <Card
                    key={subtitle.language}
                    className="border border-gray-200 hover:border-blue-200 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">{subtitle.language}</div>
                          <div className="text-sm text-gray-600">
                            {subtitle.format} • {subtitle.size}
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
