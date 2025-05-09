import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import Image from "next/image"

// This would typically come from a database or API
const getEpisodeDetails = (id: string) => {
  // Placeholder data based on the provided JSON
  return {
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
    guestStars: ["Kim Soo-hyun", "Jung Kyung-ho"],
    screenshots: [
      "/placeholder.svg?height=100&width=180&text=Screenshot+1",
      "/placeholder.svg?height=100&width=180&text=Screenshot+2",
      "/placeholder.svg?height=100&width=180&text=Screenshot+3",
      "/placeholder.svg?height=100&width=180&text=Screenshot+4",
    ],
    versions: [
      {
        name: "TV Broadcast",
        logo: "/placeholder.svg?height=30&width=30&text=tvN",
        videoVersions: [
          {
            releaseGroup: "NEXT",
            videoSource: "WEB-DL",
            runtime: "1:25:00",
            qualities: ["1080p", "720p"],
            subtitles: ["English", "Spanish", "Korean"],
            downloadOptions: [
              {
                quality: "1080p",
                size: "1.5 GB",
                downloadLink: "/download/1?version=TV%20Broadcast&releaseGroup=NEXT&quality=1080p",
              },
              {
                quality: "720p",
                size: "800 MB",
                downloadLink: "/download/1?version=TV%20Broadcast&releaseGroup=NEXT&quality=720p",
              },
            ],
          },
          {
            releaseGroup: "F1RST",
            videoSource: "HDTV",
            runtime: "1:25:00",
            qualities: ["1080p", "720p"],
            subtitles: ["English", "Spanish"],
            downloadOptions: [
              {
                quality: "1080p",
                size: "1.4 GB",
                downloadLink: "/download/1?version=TV%20Broadcast&releaseGroup=F1RST&quality=1080p",
              },
              {
                quality: "720p",
                size: "750 MB",
                downloadLink: "/download/1?version=TV%20Broadcast&releaseGroup=F1RST&quality=720p",
              },
            ],
          },
        ],
      },
      {
        name: "Netflix",
        logo: "/placeholder.svg?height=30&width=30&text=Netflix",
        videoVersions: [
          {
            releaseGroup: "NF",
            videoSource: "WEB-DL",
            runtime: "1:25:00",
            qualities: ["4K", "1080p", "720p"],
            subtitles: ["English", "Spanish", "French", "German", "Korean"],
            downloadOptions: [
              {
                quality: "4K",
                size: "5.5 GB",
                downloadLink: "/download/1?version=Netflix&releaseGroup=NF&quality=4K",
              },
              {
                quality: "1080p",
                size: "2.5 GB",
                downloadLink: "/download/1?version=Netflix&releaseGroup=NF&quality=1080p",
              },
              {
                quality: "720p",
                size: "1.2 GB",
                downloadLink: "/download/1?version=Netflix&releaseGroup=NF&quality=720p",
              },
            ],
          },
        ],
      },
    ],
  }
}

export default function EpisodePage({ params }: { params: { id: string } }) {
  const episodeDetails = getEpisodeDetails(params.id)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/drama/1" className="inline-flex items-center text-primary hover:underline mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {episodeDetails.dramaTitle}
        </Link>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Image
                  src="/placeholder.svg?height=360&width=640"
                  alt={`${episodeDetails.dramaTitle} - ${episodeDetails.episodeTitle}`}
                  width={640}
                  height={360}
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <Badge variant="secondary">Episode {episodeDetails.episodeNumber}</Badge>
                  <Badge variant="secondary">{episodeDetails.airDate}</Badge>
                  <Badge variant="secondary">{episodeDetails.runtime}</Badge>
                </div>
              </div>
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold mb-2">{episodeDetails.dramaTitle}</h1>
                <p className="text-xl text-muted-foreground mb-4">{episodeDetails.originalTitle}</p>
                <h2 className="text-2xl font-semibold mb-4">{episodeDetails.episodeTitle}</h2>
                <p className="text-muted-foreground mb-6">{episodeDetails.synopsis}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold">Director</h3>
                    <p className="text-muted-foreground">{episodeDetails.director}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Writer</h3>
                    <p className="text-muted-foreground">{episodeDetails.writer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Guest Stars</h3>
                    <p className="text-muted-foreground">{episodeDetails.guestStars.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {episodeDetails.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={180}
                  height={100}
                  className="w-full rounded-lg shadow-lg"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Download Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={episodeDetails.versions[0].name}>
              <TabsList className="mb-4">
                {episodeDetails.versions.map((version) => (
                  <TabsTrigger key={version.name} value={version.name}>
                    <Image src={version.logo} alt={version.name} width={30} height={30} className="mr-2" />
                    {version.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {episodeDetails.versions.map((version) => (
                <TabsContent key={version.name} value={version.name}>
                  {version.videoVersions.map((videoVersion, index) => (
                    <Card key={index} className="mb-4">
                      <CardHeader>
                        <CardTitle>
                          {videoVersion.releaseGroup} - {videoVersion.videoSource}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          <strong>Runtime:</strong> {videoVersion.runtime}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {videoVersion.qualities.map((quality) => (
                            <Badge key={quality} variant="secondary">
                              {quality}
                            </Badge>
                          ))}
                        </div>
                        <p className="mt-2">
                          <strong>Subtitles:</strong> {videoVersion.subtitles.join(", ")}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                          {videoVersion.downloadOptions.map((option, optionIndex) => (
                            <Card key={optionIndex}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h3 className="font-bold">{option.quality}</h3>
                                    <p className="text-sm text-muted-foreground">{option.size}</p>
                                  </div>
                                  <Link href={option.downloadLink}>
                                    <Button variant="outline" size="sm">
                                      <Download className="w-4 h-4 mr-2" />
                                      Download
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-8">
          <Link href="/report/episode/1">
            <Button variant="outline">Report Issue</Button>
          </Link>
          <Link href="/episode/2">
            <Button>Next Episode</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
