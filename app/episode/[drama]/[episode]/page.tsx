import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Download, Calendar, Star, Subtitles, Share2, Clock } from "lucide-react"
import MediaInfoCard from "@/components/media-info-card"

const episodeDetails = {
  dramaTitle: "Crash Landing on You",
  originalTitle: "사랑의 불시착",
  episodeNumber: 1,
  episodeTitle: "Crash Landing",
  synopsis:
    "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.",
  airDate: "2019-12-14",
  runtime: "1h 25m",
  director: "Lee Jung-hyo",
  writer: "Park Ji-eun",
  rating: 4.9,
  guestStars: ["Kim Soo-hyun", "Jung Kyung-ho"],
  mainScreenshot: "/placeholder.svg?height=720&width=1280&text=Episode+Screenshot",
  thumbnails: [
    "/placeholder.svg?height=150&width=250&text=Thumbnail+1",
    "/placeholder.svg?height=150&width=250&text=Thumbnail+2",
    "/placeholder.svg?height=150&width=250&text=Thumbnail+3",
    "/placeholder.svg?height=150&width=250&text=Thumbnail+4",
  ],
  downloadOptions: [
    {
      releaseGroup: "NEXT",
      qualities: [
        {
          format: "1080p MP4",
          filename: "Crash.Landing.on.You.S01E01.1080p.NF.WEB-DL.AAC2.0.x264-NEXT.mp4",
          size: "1.8 GB",
          downloads: [
            { platform: "MEGA", count: "15,234", url: "#" },
            { platform: "GDrive", count: "12,156", url: "#" },
            { platform: "Torrent", count: "8,976", url: "#" },
          ],
          // Media info for this specific quality
          mediaInfo: {
            Duration: "01:25:00",
            Format: {
              FormatName: "mp4",
              FormatLongName: "QuickTime / MOV",
            },
            PrimaryVideoStream: {
              Width: 1920,
              Height: 1080,
              FrameRate: 23.976,
              CodecName: "h264",
              BitRate: 4500000, // 4.5 Mbps
              BitDepth: 8,
            },
            PrimaryAudioStream: {
              Channels: 2,
              ChannelLayout: "stereo",
              SampleRateHz: 48000,
              CodecName: "aac",
              BitRate: 256000, // 256 Kbps
            },
            SubtitleStreams: [
              { Language: "eng", CodecName: "mov_text" },
              { Language: "spa", CodecName: "mov_text" },
              { Language: "kor", CodecName: "mov_text" },
            ],
          },
        },
        {
          format: "720p MP4",
          filename: "Crash.Landing.on.You.S01E01.720p.NF.WEB-DL.AAC2.0.x264-NEXT.mp4",
          size: "950 MB",
          downloads: [
            { platform: "MEGA", count: "10,543", url: "#" },
            { platform: "GDrive", count: "8,765", url: "#" },
            { platform: "Torrent", count: "6,543", url: "#" },
          ],
          // Media info for this specific quality
          mediaInfo: {
            Duration: "01:25:00",
            Format: {
              FormatName: "mp4",
              FormatLongName: "QuickTime / MOV",
            },
            PrimaryVideoStream: {
              Width: 1280,
              Height: 720,
              FrameRate: 23.976,
              CodecName: "h264",
              BitRate: 2500000, // 2.5 Mbps
              BitDepth: 8,
            },
            PrimaryAudioStream: {
              Channels: 2,
              ChannelLayout: "stereo",
              SampleRateHz: 48000,
              CodecName: "aac",
              BitRate: 128000, // 128 Kbps
            },
            SubtitleStreams: [
              { Language: "eng", CodecName: "mov_text" },
              { Language: "spa", CodecName: "mov_text" },
              { Language: "kor", CodecName: "mov_text" },
            ],
          },
        },
      ],
    },
    {
      releaseGroup: "HDTV",
      qualities: [
        {
          format: "1080p MKV",
          filename: "Crash.Landing.on.You.S01E01.1080p.HDTV.x264-HDTV.mkv",
          size: "1.5 GB",
          downloads: [
            { platform: "MEGA", count: "8,765", url: "#" },
            { platform: "Torrent", count: "5,432", url: "#" },
          ],
          // Media info for this specific quality
          mediaInfo: {
            Duration: "01:25:00",
            Format: {
              FormatName: "matroska,webm",
              FormatLongName: "Matroska / WebM",
            },
            PrimaryVideoStream: {
              Width: 1920,
              Height: 1080,
              FrameRate: 29.97,
              CodecName: "h264",
              BitRate: 3800000, // 3.8 Mbps
              BitDepth: 8,
            },
            PrimaryAudioStream: {
              Channels: 2,
              ChannelLayout: "stereo",
              SampleRateHz: 48000,
              CodecName: "aac",
              BitRate: 192000, // 192 Kbps
            },
            SubtitleStreams: [
              { Language: "eng", CodecName: "subrip" },
              { Language: "kor", CodecName: "subrip" },
            ],
          },
        },
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

export default function EpisodePage({ params }: { params: { drama: string; episode: string } }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Link href={`/drama/${params.drama}`} className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to {episodeDetails.dramaTitle}
        </Link>

        <div className="grid gap-8">
          <div>
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <div className="relative aspect-video">
                <img
                  src={episodeDetails.mainScreenshot || "/placeholder.svg"}
                  alt={`${episodeDetails.dramaTitle} - Episode ${episodeDetails.episodeNumber}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="w-full">
                    <div className="flex flex-wrap justify-between items-end gap-4">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 text-shadow">
                          Episode {episodeDetails.episodeNumber}: {episodeDetails.episodeTitle}
                        </h1>
                        <div className="flex flex-wrap items-center text-white space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {episodeDetails.airDate}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {episodeDetails.runtime}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-yellow-500" />
                            {episodeDetails.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Watch Now</Button>
                        <Button variant="outline" className="text-white border-white hover:bg-white/20 rounded-full">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{episodeDetails.synopsis}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Director:</span> {episodeDetails.director}
                  </div>
                  <div>
                    <span className="font-semibold">Writer:</span> {episodeDetails.writer}
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold">Guest Stars:</span> {episodeDetails.guestStars.join(", ")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Download Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Select>
                    <SelectTrigger className="w-[180px] rounded-full">
                      <SelectValue placeholder="Select release group" />
                    </SelectTrigger>
                    <SelectContent>
                      {episodeDetails.downloadOptions.map((option) => (
                        <SelectItem key={option.releaseGroup} value={option.releaseGroup}>
                          {option.releaseGroup}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px] rounded-full">
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      {episodeDetails.downloadOptions.flatMap((option) =>
                        option.qualities.map((quality) => (
                          <SelectItem key={`${option.releaseGroup}-${quality.format}`} value={quality.format}>
                            {quality.format}
                          </SelectItem>
                        )),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {episodeDetails.downloadOptions.map((option) => (
                  <div key={option.releaseGroup}>
                    {option.qualities.map((quality, index) => (
                      <Collapsible key={quality.format} className="mb-4">
                        <Card className="border border-gray-200 hover:border-blue-200 transition-colors">
                          <CardHeader className="p-4">
                            <CollapsibleTrigger className="flex items-center justify-between w-full">
                              <div className="flex flex-wrap items-center gap-4">
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full">
                                  {option.releaseGroup}
                                </Badge>
                                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full">
                                  {quality.format}
                                </Badge>
                                <span className="text-sm text-gray-600">{quality.size}</span>
                              </div>
                              <ChevronDown className="h-4 w-4 text-gray-600 transition-transform duration-200" />
                            </CollapsibleTrigger>
                          </CardHeader>
                          <CollapsibleContent>
                            <CardContent className="p-4 pt-0">
                              {/* Media Info Card - Simplified version */}
                              {quality.mediaInfo && (
                                <div className="mb-6">
                                  <MediaInfoCard mediaInfo={quality.mediaInfo} />
                                </div>
                              )}

                              <Separator className="my-4" />
                              <div className="text-sm text-gray-600 mb-2">Filename:</div>
                              <code className="text-sm bg-gray-100 p-3 rounded-md block mb-4 overflow-x-auto">
                                {quality.filename}
                              </code>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {quality.downloads.map((download) => (
                                  <Card key={download.platform} className="border-0 shadow-sm">
                                    <CardContent className="p-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-900">{download.platform}</span>
                                        <span className="text-xs text-gray-600">{download.count} downloads</span>
                                      </div>
                                      <Button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                                        asChild
                                      >
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
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <Subtitles className="w-5 h-5 mr-2" />
                  Subtitles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {episodeDetails.subtitles.map((subtitle) => (
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
