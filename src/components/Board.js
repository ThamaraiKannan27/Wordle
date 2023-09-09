import React from 'react';
import Letter from './Letter';

function Board() {
  return (
    <div className='board'>
        <div className='row'>
           <Letter row={0} pos={0}/>
            <Letter row={0} pos={1} />
            <Letter row={0} pos={2} />
            <Letter row={0} pos={3} />
            <Letter row={0} pos={4} />
        </div>
        <div className='row'>
            <Letter row={1} pos={0} />
            <Letter row={1} pos={1} />
            <Letter row={1} pos={2} />
            <Letter row={1} pos={3} />
            <Letter row={1} pos={4} />
        </div>
        <div className='row'>
            <Letter row={2} pos={0} />
            <Letter row={2} pos={1} />
            <Letter row={2} pos={2} />
            <Letter row={2} pos={3} />
            <Letter row={2} pos={4} />
        </div>
        <div className='row'>
            <Letter row={3} pos={0} />
            <Letter row={3} pos={1} />
            <Letter row={3} pos={2} />
            <Letter row={3} pos={3} />
            <Letter row={3} pos={4} />
        </div>
        <div className='row'>
            <Letter row={4} pos={0} />
            <Letter row={4} pos={1} />
            <Letter row={4} pos={2} />
            <Letter row={4} pos={3} />
            <Letter row={4} pos={4} />
        </div>
        <div className='row'>
            <Letter row={5} pos={0} />
            <Letter row={5} pos={1} />
            <Letter row={5} pos={2} />
            <Letter row={5} pos={3} />
            <Letter row={5} pos={4} />
        </div>
    </div>
  )
}

export default Board