import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"

export function NavbarComponent() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-300 hover:to-pink-300 transition-colors">
          <a href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-300 hover:to-pink-300 transition-colors">
            BULLS & COWS
          </a>
        </a>
        <Button
          variant="outline"
          className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-purple-900 transition-colors duration-300"
        >
          <Trophy className="mr-2 h-4 w-4" />
          Leaderboard
        </Button>
      </div>
      <div className="absolute inset-0 bg-grid-cyan-500/10 bg-[size:20px_20px] pointer-events-none"></div>
    </nav>
  )
}