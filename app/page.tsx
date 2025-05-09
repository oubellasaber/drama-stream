import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturedSeries from "@/components/featured-series"
import PopularNow from "@/components/popular-now"
import RecentlyAddedEpisodes from "@/components/recently-added-episodes"
import GenreSection from "@/components/genre-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="space-y-0">
          <FeaturedSeries />
          <PopularNow />
          <div className="py-12 container mx-auto px-4">
            <GenreSection />
          </div>
          <RecentlyAddedEpisodes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
