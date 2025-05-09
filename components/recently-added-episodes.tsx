import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Download } from "lucide-react"

const recentEpisodes = [
  {
    title: "Drama Title 1",
    originalTitle: "드라마 제목 1",
    episode: 19,
    subtitles: ["EN", "ES"],
    downloadSources: ["Torrent", "GDrive"],
    slug: "drama-1",
    timeAgo: "2 hours ago",
  },
  {
    title: "Drama Title 2",
    originalTitle: "드라마 제목 2",
    episode: 18,
    subtitles: ["EN", "ES", "FR"],
    downloadSources: ["Torrent", "GDrive", "Mega"],
    slug: "drama-2",
    timeAgo: "5 hours ago",
  },
  {
    title: "Drama Title 3",
    originalTitle: "드라마 제목 3",
    episode: 17,
    subtitles: ["EN", "ES", "FR", "DE"],
    downloadSources: ["Torrent"],
    slug: "drama-3",
    timeAgo: "1 day ago",
  },
  {
    title: "Drama Title 4",
    originalTitle: "드라마 제목 4",
    episode: 16,
    subtitles: ["EN"],
    downloadSources: ["Torrent", "GDrive"],
    slug: "drama-4",
    timeAgo: "2 days ago",
  },
]

export default function RecentlyAddedEpisodes() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">Recently Added Episodes</h2>
          <Link href="/recent" className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentEpisodes.map((episode) => (
            <Card
              key={`${episode.slug}-${episode.episode}`}
              className="overflow-hidden card-hover-effect border-0 shadow-lg"
            >
              <div className="aspect-[16/9] relative bg-muted img-hover-zoom">
                <img
                  src={`/placeholder.svg?height=360&width=640&text=${episode.title}+Episode+${episode.episode}`}
                  alt={`${episode.title} Episode ${episode.episode}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span className="text-xs">{episode.timeAgo}</span>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold line-clamp-1">{episode.title}</h3>
                    <Badge variant="secondary" className="mt-1 rounded-full">
                      Episode {episode.episode}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/episode/${episode.slug}/${episode.episode}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Watch</Button>
                    </Link>
                    <Link href={`/download/${episode.slug}/${episode.episode}`}>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Download className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-full">
                    Subtitles: {episode.subtitles.join(", ")}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    {episode.downloadSources.join(", ")}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
