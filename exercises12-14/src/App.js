import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>Next anecdote</button>
    </>
  )
}

const Vote = (props) => {
  return (
    <>
      <button onClick={props.handlerCount}>Vote</button>
    </>
  )
}

const Votes = (props) => {
  return (
    <>
      <p>has {props.votes[props.selected]} votes</p>
    </>
  )
}

const MostPopular = (props) => {
  return (
    <>
    <h1>Most Popular quote</h1>
    <p>{props.anecdotes[props.popular]}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);

  const [popular, setPopular] = useState(0);

  const handleRandomClick = () => {  
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVoteClick = () => { 
    let newVotes = [...votes]; 
    newVotes[selected] += 1;
    let highestNum = Math.max(...newVotes);
    console.log(highestNum);
    let index = newVotes.indexOf(highestNum);
    setPopular(index)
    
    setVotes(newVotes);
  }
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes} selected={selected} />
      <Button handler={handleRandomClick}/>
      <Vote handlerCount={handleVoteClick}/>
      <MostPopular anecdotes={anecdotes} popular={popular}/>
    </>
  )
}

export default App