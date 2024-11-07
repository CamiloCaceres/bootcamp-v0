import './App.css'
import GameScreen from './components/ui/game-screen'
import { Toaster } from '@/components/ui/toaster'
import { NavbarComponent } from '@/components/navbar'

function App() {
  return (
    <>
      <NavbarComponent />
      <GameScreen />
      <Toaster />
    </>
  )
}

export default App
