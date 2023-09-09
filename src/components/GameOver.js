import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
function GameOver() {
    const{CorrectWord,won,currAttempt,board,setBoard} = useContext(AppContext)
  return (
    <div className="gameOver">
    <h3>
      {won? "You Correctly Guessed the Wordle": "You Failed to Guess the Word"}
    </h3>
    <h1>Correct Word: {CorrectWord}</h1>
    {won && (<h3>You guessed in {currAttempt.row} attempts</h3>
    )}
  </div>
  )
}

export default GameOver