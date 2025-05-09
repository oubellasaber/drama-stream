"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, Plus, ChevronDown } from "lucide-react"

const heroSlides = [
  {
    title: "Crash Landing on You",
    description:
      "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.",
    image: "/placeholder.svg?height=1080&width=1920&text=Crash+Landing+on+You",
    genres: ["Romance", "Comedy", "Drama"],
  },
  {
    title: "Squid Game",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    image: "/placeholder.svg?height=1080&width=1920&text=Squid+Game",
    genres: ["Thriller", "Drama", "Action"],
  },
  {
    title: "Extraordinary Attorney Woo",
    description:
      "Brilliant attorney Woo Young-woo tackles challenges in the courtroom and beyond as a newbie at a top law firm and a woman on the autism spectrum.",
    image: "/placeholder.svg?height=1080&width=1920&text=Extraordinary+Attorney+Woo",
    genres: ["Legal", "Drama", "Comedy"],
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen min-h-[600px] bg-gray-900 text-white overflow-hidden">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-16">
        <div className="max-w-3xl">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {index === currentSlide && (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {slide.genres.map((genre) => (
                      <span key={genre} className="px-3 py-1 bg-blue-600/80 rounded-full text-xs font-medium">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                      <PlayCircle className="mr-2 h-5 w-5" /> Watch Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white/20 rounded-full"
                    >
                      <Plus className="mr-2 h-5 w-5" /> Add to List
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-blue-500" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float"
        >
          <span className="text-sm font-medium mb-2">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
