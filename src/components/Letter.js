import React, { useContext,useEffect } from 'react';
import { AppContext } from '../App';
function Letter({row,pos}) {
    const{board,CorrectWord,currAttempt,setDisabledLetters} = useContext(AppContext);
    const letter = board[row][pos]
    const correct = CorrectWord.toUpperCase()[pos] === letter
    const almost = !correct && letter!=="" && CorrectWord.toUpperCase().includes(letter)
    const letterState = currAttempt.row > row && (correct ? "correct" : almost ? "almost" : "disabled");
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
          setDisabledLetters((prev) => [...prev, letter]);
        }
      }, [currAttempt.row]);
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter