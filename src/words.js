import words from './words.txt'
export const wordGenerate = async()=>{
    let word;
    await fetch(words).then((r)=>r.text()).then((res)=>{
        const arr =  res.split("\n")
        word = arr[Math.floor(Math.random()*arr.length)]
    })
    return {word}
}