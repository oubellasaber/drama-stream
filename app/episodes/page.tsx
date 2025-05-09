import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const episodeList = [
  {
    filename: "Crash.Landing.on.You.S01E01.1080p.WEB-DL.AAC2.0.H.264-NEXT",
    qualities: ["1080p", "720p"],
    releaseGroup: "NEXT",
    subtitles: ["English", "Korean"],
    size: "1.5 GB",
    encoding: "H.264/AVC",
    runtime: "1h 15m",
    source: "WEB-DL",
  },
  {
    filename: "Itaewon.Class.S01E01.1080p.NF.WEB-DL.DDP2.0.x264-TEPES",
    qualities: ["1080p", "720p", "480p"],
    releaseGroup: "TEPES",
    subtitles: ["English", "Spanish", "Korean"],
    size: "1.8 GB",
    encoding: "H.264/AVC",
    runtime: "1h 10m",
    source: "WEB-DL",
  },
  {
    filename: "Goblin.S01E01.1080p.BluRay.x264-REGRET",
    qualities: ["1080p", "720p"],
    releaseGroup: "REGRET",
    subtitles: ["English", "French", "Korean"],
    size: "2.1 GB",
    encoding: "H.264/AVC",
    runtime: "1h 20m",
    source: "BluRay",
  },
  {
    filename: "Descendants.of.the.Sun.S01E01.720p.HDTV.x264-NEXT",
    qualities: ["720p", "480p"],
    releaseGroup: "NEXT",
    subtitles: ["English", "Chinese", "Korean"],
    size: "900 MB",
    encoding: "H.264/AVC",
    runtime: "1h 05m",
    source: "HDTV",
  },
]

export default function EpisodeListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Episode Listing</h1>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Release Group</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select release group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NEXT">NEXT</SelectItem>
                        <SelectItem value="TEPES">TEPES</SelectItem>
                        <SelectItem value="REGRET">REGRET</SelectItem>
                        <SelectItem value="OTHER">OTHER</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Video Source</label>
                    <div className="space-y-2">
                      {["WEB-DL", "BluRay", "HDTV"].map((source) => (
                        <div key={source} className="flex items-center">
                          <Checkbox id={source} />
                          <label htmlFor={source} className="ml-2 text-sm">
                            {source}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Quality</label>
                    <div className="space-y-2">
                      {["4K", "1080p", "720p"].map((quality) => (
                        <div key={quality} className="flex items-center">
                          <Checkbox id={quality} />
                          <label htmlFor={quality} className="ml-2 text-sm">
                            {quality}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subtitles</label>
                    <div className="space-y-2">
                      {["English", "Spanish", "Korean", "None"].map((lang) => (
                        <div key={lang} className="flex items-center">
                          <Checkbox id={lang} />
                          <label htmlFor={lang} className="ml-2 text-sm">
                            {lang}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">File Size</label>
                    <Slider defaultValue={[0, 10]} max={10} step={0.1} />
                    <div className="flex justify-between text-sm mt-1">
                      <span>0 GB</span>
                      <span>10 GB</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Encoding</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select encoding" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="H.264/AVC">H.264/AVC</SelectItem>
                        <SelectItem value="H.265/HEVC">H.265/HEVC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <Input type="search" placeholder="Search episodes..." className="max-w-sm" />
              <Select defaultValue="grid">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">Grid</SelectItem>
                  <SelectItem value="list">List</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-4">
              {episodeList.map((episode, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{episode.filename}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {episode.qualities.map((quality) => (
                        <Badge key={quality} variant="secondary">
                          {quality}
                        </Badge>
                      ))}
                      <Badge>{episode.releaseGroup}</Badge>
                      <Badge>{episode.source}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-semibold">Subtitles:</span> {episode.subtitles.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-semibold">Size:</span> {episode.size} |
                      <span className="font-semibold"> Encoding:</span> {episode.encoding} |
                      <span className="font-semibold"> Runtime:</span> {episode.runtime}
                    </p>
                    <div className="flex justify-end">
                      <Button variant="outline">Download</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
