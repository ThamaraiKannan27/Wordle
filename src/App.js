import './App.css';
import Board from './components/Board';
import { wordGenerate } from './words';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState} from 'react';
import GameOver from './components/GameOver';
export const AppContext = createContext();
function App() {
  const defaultBoard = [['','','','',''],
                      ['','','','',''],
                      ['','','','',''],
                      ['','','','',''],
                      ['','','','',''],
                      ['','','','','']];
  const temp = [...defaultBoard]
  const[board,setBoard] = useState(temp);
  const [currAttempt, setCurrAttempt] = useState({ row: 0, col: 0 });
  const [CorrectWord,setCorrectWord] = useState("")
  const [disabledLetters, setDisabledLetters] = useState([]);
  const[gameOver,setgameOver] = useState(false)
  const[won,setWinner] = useState(false)
  useEffect(()=>{
  if(!gameOver){ wordGenerate().then((w)=>{
    setCorrectWord(w.word.trim().toUpperCase())
    console.log(w.word)
   }, )}
  },[gameOver])
  const enter = ()=>{
    if(currAttempt.col===5){
      let cur = "";
      for(var i = 0;i<5;i++)
        cur+=board[currAttempt.row][i]
    setCurrAttempt({row:currAttempt.row+1,col:0})
    if(cur===CorrectWord ||( currAttempt.row===5 && currAttempt.col===5)){
      setWinner(CorrectWord===cur)
      setgameOver(true)
    }
    }

  }
  const remove = ()=>{
    if(currAttempt.col===0)return;
    const newboard = [...board];
    newboard[currAttempt.row][currAttempt.col-1] = "";
    setBoard(newboard)
    setCurrAttempt({row:currAttempt.row,col:currAttempt.col-1});
    return;
  }
  const insert = (key)=>{
    if(currAttempt.col===5)return
    const newboard = [...board]
    newboard[currAttempt.row][currAttempt.col] = key;
    setBoard(newboard)
    setCurrAttempt({row:currAttempt.row,col:currAttempt.col+1})
    return;
  }
  const restartGame = () => {
    
    setBoard(defaultBoard);
    setCurrAttempt({ row: 0, col: 0 });
    setCorrectWord("");
    setDisabledLetters([]);
    setgameOver(false);
    setWinner(false);
    
  };
  return (
    <div className="App">
      <nav><h1 className='title'>Wordle</h1></nav>
      <AppContext.Provider value={{disabledLetters,won,setDisabledLetters,currAttempt, setCurrAttempt,enter,board,setBoard,remove,insert,CorrectWord}}>
      <div className='game'>
      {gameOver?<div><GameOver /> <button className='restart' onClick={restartGame}>Restart</button></div>:<div><Board /><Keyboard/></div>}
      </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
