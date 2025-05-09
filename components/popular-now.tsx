import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp } from "lucide-react"

const popularDramas = [
  {
    title: "Drama Title 1",
    originalTitle: "드라마 제목 1",
    episodes: 15,
    network: "TVN",
    quality: "4K, 1080p, 720p, 480p",
    source: "WEB-DL, HDTV, BluRay",
    rating: 4.9,
    status: "New episode today!",
    slug: "drama-1",
    trending: true,
  },
  {
    title: "Drama Title 2",
    originalTitle: "드라마 제목 2",
    episodes: 14,
    network: "MBC",
    quality: "4K, 1080p, 720p",
    source: "WEB-DL, HDTV",
    rating: 4.8,
    status: "2 days ago",
    slug: "drama-2",
    trending: false,
  },
  {
    title: "Drama Title 3",
    originalTitle: "드라마 제목 3",
    episodes: 13,
    network: "SBS",
    quality: "4K, 1080p",
    source: "WEB-DL",
    rating: 4.7,
    status: "3 days ago",
    slug: "drama-3",
    trending: true,
  },
  {
    title: "Drama Title 4",
    originalTitle: "드라마 제목 4",
    episodes: 12,
    network: "JTBC",
    quality: "4K",
    source: "",
    rating: 4.6,
    status: "4 days ago",
    slug: "drama-4",
    trending: false,
  },
]

export default function PopularNow() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">Popular Now</h2>
          <Link href="/popular" className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {popularDramas.map((drama) => (
            <Card key={drama.slug} className="overflow-hidden card-hover-effect border-0 shadow-lg">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <div className="aspect-[2/3] relative bg-muted img-hover-zoom">
                    <img
                      src={`/placeholder.svg?height=450&width=300&text=${drama.title}`}
                      alt={drama.title}
                      className="object-cover w-full h-full"
                    />
                    {drama.trending && (
                      <div className="absolute top-0 left-0 bg-gradient-blue text-white px-3 py-1 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        <span className="text-xs font-medium">Trending</span>
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="sm:w-2/3 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold line-clamp-1">{drama.title}</h3>
                    <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {drama.rating}
                    </Badge>
                  </div>
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
                    {drama.quality && (
                      <Badge variant="outline" className="rounded-full">
                        {drama.quality}
                      </Badge>
                    )}
                    {drama.source && (
                      <Badge variant="outline" className="rounded-full">
                        {drama.source}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={`rounded-full ${drama.status.includes("New") ? "bg-green-100 text-green-800 border-green-300" : ""}`}
                    >
                      {drama.status}
                    </Badge>
                    <Link href={`/drama/${drama.slug}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Watch Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
