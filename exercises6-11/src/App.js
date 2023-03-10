import { useState } from 'react'

const Header = () => {
  const title = 'give feedback';
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>{props.name}</button>
    </>
  )
}

const StatisticsTitle = () => {
  return (
    <>
      <h1>Statistics</h1>
    </>
  )
}

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  if(props.all.length === 0) {
  return (
    <>
    <p>No feedback has been gathered</p>
    </>
  )
  } else {
    return (
      <>
        <table >
          <tbody>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='all' value={props.all.length} />
          <StatisticsLine text='average' value={(props.all.reduce((a,b) => a+b || 0) / props.all.length) || 0}/>
          <StatisticsLine text='positive' value={((props.all.filter(char => char === 1).length / props.all.length) *100).toString().concat('%')} />
          </tbody>
        </table>
      </>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])


  const handleGoodClick = () => {
    setAll(all.concat(1))
    setGood(good + 1)    
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(0))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all.concat(-1))
  }

  return (
    <div>
      <Header />
      <Button name='good' handler={handleGoodClick} />
      <Button name='neutral' handler={handleNeutralClick} />
      <Button name='bad' handler={handleBadClick} />
      <StatisticsTitle />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
  
    </div>
  )
}

export default App