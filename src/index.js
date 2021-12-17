import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const findMostVote = (arr) => {
    let max = 0
    let res = 0

    for (let i = 0; i < arr.length; i++) {
      // console.log("Posición", i, "valor:", arr[i])
      if (arr[i] >= max) {
        max = arr[i]
        res = i
      }
    }

    return res
  }

  const handleClickRandomAnecdote = () => {
    setSelected(parseInt(Math.random() * 5 + 1))
  }

  const handleClickVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleClickVote}>Vote</button>
      <button onClick={handleClickRandomAnecdote}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[findMostVote(points)]} <br />
        has {points[findMostVote(points)]} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
)
