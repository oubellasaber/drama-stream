"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Star, Calendar, Clock, User, PlayCircle, Download, ChevronLeft } from "lucide-react"
import { useState } from "react"

const dramaDetails = {
  title: "Crash Landing on You",
  originalTitle: "사랑의 불시착",
  rating: 4.9,
  episodes: 16,
  year: 2019,
  synopsis:
    "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.",
  availableOn: ["tvN", "Netflix", "Viki"],
  genre: ["Romance", "Drama", "Comedy"],
  director: "Lee Jung-hyo",
  writer: "Park Ji-eun",
  cast: ["Hyun Bin", "Son Ye-jin", "Seo Ji-hye", "Kim Jung-hyun"],
  episodeList: [
    {
      number: 1,
      title: "Crash Landing",
      airDate: "Dec 14, 2019",
      duration: "1h 15m",
      synopsis:
        "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.",
    },
    {
      number: 2,
      title: "The Beginning",
      airDate: "Dec 15, 2019",
      duration: "1h 12m",
      synopsis:
        "Determined to escape, Se-ri sets out on foot to the DMZ. The soldiers devise a plan to get her back before Cheol-gang finds her.",
    },
    {
      number: 3,
      title: "Hidden Away",
      airDate: "Dec 21, 2019",
      duration: "1h 18m",
      synopsis:
        "Back in Pyongyang, Se-ri resumes her attempt to return to South Korea. Jung-hyeok tries to keep her safe from Cheol-gang's prying eyes.",
    },
    {
      number: 4,
      title: "The Secret",
      airDate: "Dec 22, 2019",
      duration: "1h 14m",
      synopsis:
        "Se-ri's presence in his home causes Jung-hyeok trouble at work. He debates a risky move, while Se-ri tries to lay low among the neighbors.",
    },
  ],
}

export default function DramaDetails({ params }: { params: { slug: string } }) {
  const [showAllEpisodes, setShowAllEpisodes] = useState(false)
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Drama+Cover"
            alt={dramaDetails.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
              <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 mb-4">
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{dramaDetails.title}</h1>
              <p className="text-xl text-gray-300 mb-4">{dramaDetails.originalTitle}</p>
              <div className="flex flex-wrap items-center gap-4 text-white">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold">{dramaDetails.rating}</span>
                </div>
                <Badge variant="outline" className="text-white border-white">
                  {dramaDetails.episodes} Episodes
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  {dramaDetails.year}
                </Badge>
                {dramaDetails.genre.map((genre) => (
                  <Badge key={genre} variant="outline" className="text-white border-white">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
                  <p className="text-gray-700 leading-relaxed">{dramaDetails.synopsis}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="episodes">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="episodes">Episodes</TabsTrigger>
                      <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
                    </TabsList>
                    <TabsContent value="episodes">
                      <div className="space-y-4">
                        {dramaDetails.episodeList.slice(0, showAllEpisodes ? undefined : 8).map((episode) => (
                          <Card key={episode.number}>
                            <CardContent className="p-4">
                              <div className="flex gap-4">
                                <div className="w-32 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                  <img
                                    src={`/placeholder.svg?height=80&width=128&text=Episode+${episode.number}`}
                                    alt={`Episode ${episode.number}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <h3 className="font-semibold">
                                        Episode {episode.number}: {episode.title}
                                      </h3>
                                      <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center">
                                          <Calendar className="w-4 h-4 mr-1" />
                                          {episode.airDate}
                                        </span>
                                        <span className="flex items-center">
                                          <Clock className="w-4 h-4 mr-1" />
                                          {episode.duration}
                                        </span>
                                      </div>
                                    </div>
                                    <Link href={`/episode/${params.slug}/${episode.number}`}>
                                      <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                      </Button>
                                    </Link>
                                  </div>
                                  <p className="text-sm text-gray-600 line-clamp-2">{episode.synopsis}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        {!showAllEpisodes && dramaDetails.episodeList.length > 8 && (
                          <Button onClick={() => setShowAllEpisodes(true)} className="w-full mt-4">
                            Show All Episodes
                          </Button>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="cast">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {dramaDetails.cast.map((actor) => (
                          <Card key={actor}>
                            <CardContent className="p-4 flex flex-col items-center text-center">
                              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mb-2">
                                <img
                                  src={`/placeholder.svg?height=64&width=64&text=${actor
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}`}
                                  alt={actor}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h3 className="font-semibold">{actor}</h3>
                              <p className="text-sm text-gray-500">Actor</p>
                            </CardContent>
                          </Card>
                        ))}
                        <Card>
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mb-2">
                              <img
                                src={`/placeholder.svg?height=64&width=64&text=${dramaDetails.director
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`}
                                alt={dramaDetails.director}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold">{dramaDetails.director}</h3>
                            <p className="text-sm text-gray-500">Director</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mb-2">
                              <img
                                src={`/placeholder.svg?height=64&width=64&text=${dramaDetails.writer
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`}
                                alt={dramaDetails.writer}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold">{dramaDetails.writer}</h3>
                            <p className="text-sm text-gray-500">Writer</p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6 sticky top-4">
                <CardContent className="p-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Now
                  </Button>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Available On</h3>
                      <div className="flex flex-wrap gap-2">
                        {dramaDetails.availableOn.map((platform) => (
                          <Badge key={platform} variant="secondary">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <User className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Director: {dramaDetails.director}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Writer: {dramaDetails.writer}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Year: {dramaDetails.year}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-gray-400" />
                          <span>Episodes: {dramaDetails.episodes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
