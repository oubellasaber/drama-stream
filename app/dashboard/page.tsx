import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Download, Settings, User, Clock } from "lucide-react"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  memberSince: "January 2023",
  totalDownloads: 47,
  recentDownloads: [
    { title: "Crash Landing on You", episode: "Episode 16", date: "2023-05-15" },
    { title: "Itaewon Class", episode: "Episode 8", date: "2023-05-14" },
    { title: "Goblin", episode: "Episode 1", date: "2023-05-12" },
    { title: "Descendants of the Sun", episode: "Episode 5", date: "2023-05-10" },
    { title: "Mr. Queen", episode: "Episode 20", date: "2023-05-08" },
  ],
  watchlist: [
    { title: "Hospital Playlist", episodes: 12 },
    { title: "Reply 1988", episodes: 20 },
    { title: "Signal", episodes: 16 },
  ],
}

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome, {userData.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.totalDownloads}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Member Since</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.memberSince}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Watchlist</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.watchlist.length} dramas</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {userData.recentDownloads.map((download, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{download.title}</h3>
                        <p className="text-sm text-gray-500">{download.episode}</p>
                      </div>
                      <Badge variant="outline">{download.date}</Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Membership</h3>
                  <p className="text-sm text-gray-500">Premium</p>
                </div>
                <Button className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>My Watchlist</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="space-y-4">
                {userData.watchlist.map((drama, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <h3 className="font-semibold">{drama.title}</h3>
                    <Badge variant="secondary">{drama.episodes} episodes</Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
