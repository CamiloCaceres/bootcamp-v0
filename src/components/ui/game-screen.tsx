import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast';

// Add these type definitions
type Guess = {
  guess: string;
  bulls: number;
  cows: number;
};

export default function Component() {
  const { toast } = useToast()
  const [guess, setGuess] = useState<string>('')
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [secretNumber, setSecretNumber] = useState<string>(() => generateSecretNumber())
  const [showSecret, setShowSecret] = useState(false)

  // Add these new functions
  function generateSecretNumber(): string {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const result: string[] = [];
    
    while (result.length < 4) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const digit = digits[randomIndex];
      if (!result.includes(digit)) {
        result.push(digit);
      }
    }
    
    return result.join('');
  }

  function calculateBullsAndCows(userGuess: string, secret: string): { bulls: number; cows: number } {
    let bulls = 0;
    let cows = 0;

    // Count bulls (correct digit in correct position)
    for (let i = 0; i < 4; i++) {
      if (userGuess[i] === secret[i]) {
        bulls++;
      }
    }

    // Count cows (correct digit in wrong position)
    for (let i = 0; i < 4; i++) {
      if (secret.includes(userGuess[i]) && userGuess[i] !== secret[i]) {
        cows++;
      }
    }

    return { bulls, cows };
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '') // Only allow numbers
    if (value.length <= 4) {
      setGuess(value)
    }
  }

  const handleGuess = () => {
    // Validate guess
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      toast({
        variant: "destructive",
        title: "Invalid input",
        description: "Please enter a 4-digit number with unique digits"
      })
      return
    }

    const result = calculateBullsAndCows(guess, secretNumber)
    setGuesses([...guesses, { guess, ...result }])
    setGuess('')

    // Check if won
    if (result.bulls === 4) {
      toast({
        title: "🎉 Congratulations!",
        description: "You won! Starting a new game...",
      })
      // Reset game
      setSecretNumber(generateSecretNumber())
      setGuesses([])
    }
  }

  const handleNewGame = () => {
    setSecretNumber(generateSecretNumber())
    setGuesses([])
    setGuess('')
    toast({
      title: "🎮 New Game Started",
      description: "Try to guess the new number!",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-pink-800 text-white p-8 flex flex-col items-center justify-center overflow-hidden ">
      {/* Retro sun */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200%] aspect-square rounded-[100%] bg-gradient-to-t from-yellow-500 via-orange-500 to-transparent opacity-20"></div>
      
      <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-wider">
        BULLS & COWS
      </h1>


      <div className="w-full max-w-md bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-cyan-400 shadow-lg shadow-cyan-400/50">
        {showSecret && (
          <div className="text-center mb-4 text-cyan-400">
            Secret: {secretNumber}
          </div>
        )}
        
        <button
          onClick={() => setShowSecret(!showSecret)}
          className="w-full mb-4 py-2 px-4 text-sm bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-md border border-red-500/50"
        >
          {showSecret ? 'Hide Secret' : 'Show Secret'}
        </button>

        <div className="mb-6">
          <Input
            type="text"
            value={guess}
            onChange={handleInputChange}
            maxLength={4}
            placeholder="Enter 4 unique digits"
            className="w-full bg-transparent border-cyan-400 text-cyan-400 placeholder-cyan-600"
          />
          <Button 
            onClick={handleGuess}
            className="w-full mt-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold hover:from-cyan-500 hover:to-pink-500"
          >
            GUESS
          </Button>
          <Button
            className="w-full mt-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-bold hover:from-cyan-500 hover:to-pink-500"
          onClick={handleNewGame}
          variant="outline"
        >
            New Game
          </Button>
        </div>

        <div className="space-y-2">
          {guesses.map((g, index) => (
            <div key={index} className="flex justify-between items-center bg-gradient-to-r from-cyan-900 to-pink-900 p-2 rounded">
              <span className="text-xl">{g.guess}</span>
              <span className="text-sm">
                🐂 {g.bulls} &nbsp; 🐄 {g.cows}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-cyan-500/10 bg-[size:50px_50px] pointer-events-none"></div>
    </div>
  )
}