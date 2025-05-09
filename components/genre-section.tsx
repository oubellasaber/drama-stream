import { Button } from "@/components/ui/button"

const genres = [
  "Romance",
  "Comedy",
  "Thriller",
  "Action",
  "Historical",
  "Fantasy",
  "Melodrama",
  "Crime",
  "Medical",
  "Legal",
  "School",
  "Supernatural",
]

export default function GenreSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Explore by Genre</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant="outline"
            className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            {genre}
          </Button>
        ))}
      </div>
    </section>
  )
}
