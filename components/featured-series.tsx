import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Star } from "lucide-react"

const featuredSeries = [
  {
    title: "Drama Title 1",
    originalTitle: "드라마 제목 1",
    episodes: 15,
    network: "TVN",
    quality: "4K, 1080p",
    source: "WEB-DL",
    rating: 4.8,
    slug: "drama-1",
  },
  {
    title: "Drama Title 2",
    originalTitle: "드라마 제목 2",
    episodes: 14,
    network: "MBC",
    quality: "4K, 1080p, 720p",
    source: "WEB-DL, HDTV",
    rating: 4.9,
    slug: "drama-2",
  },
  {
    title: "Drama Title 3",
    originalTitle: "드라마 제목 3",
    episodes: 13,
    network: "SBS",
    quality: "4K, 1080p, 720p, 480p",
    source: "WEB-DL, HDTV, BluRay",
    rating: 4.7,
    slug: "drama-3",
  },
]

export default function FeaturedSeries() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">Featured Series</h2>
          <Link href="/featured" className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSeries.map((drama) => (
            <Card key={drama.slug} className="overflow-hidden card-hover-effect border-0 shadow-lg">
              <div className="aspect-[16/9] relative bg-muted img-hover-zoom">
                <img
                  src={`/placeholder.svg?height=360&width=640&text=${drama.title}`}
                  alt={drama.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{drama.rating}</span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-1 line-clamp-1">{drama.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{drama.originalTitle}</p>
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      {drama.episodes} Episodes
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      {drama.network}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="rounded-full">
                      {drama.quality}
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      {drama.source}
                    </Badge>
                  </div>
                </div>
                <Link href={`/drama/${drama.slug}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    <PlayCircle className="w-4 h-4 mr-2" /> Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
