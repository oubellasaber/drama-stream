import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

interface DramaCardProps {
  title: string
  originalTitle: string
  episodes: number
  network: string
  quality: string
  source: string
  rating?: number
  status?: string
  slug: string
}

export default function DramaCard({
  title,
  originalTitle,
  episodes,
  network,
  quality,
  source,
  rating,
  status,
  slug,
}: DramaCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-[2/3] relative">
        <img
          src={`/placeholder.svg?height=450&width=300&text=${title}`}
          alt={title}
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{originalTitle}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary">{episodes} episodes</Badge>
          <Badge variant="secondary">{network}</Badge>
          <Badge variant="secondary">{quality}</Badge>
          <Badge variant="secondary">{source}</Badge>
        </div>
        {rating && (
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700">{rating.toFixed(1)}</span>
          </div>
        )}
        {status && <Badge className="bg-green-500 text-white">{status}</Badge>}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/drama/${slug}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <PlayCircle className="w-4 h-4 mr-2" /> Watch Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
