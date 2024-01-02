import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
      // 1) drawCard is a function utilizing the Math built in method with .floor and .random on both of the arrays contained within the suit and rank variables to create a new output by multiplying the entire length of the array. 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
      // 2) Conditional statement starts off with if hand.indexOf the vairable draw which is absolutely equated to -1 then return the setter function
    if (hand.indexOf(draw) === -1) {
      // 3) This can aid with keeping track of what cards have specifically dealt and what is not included in the deck as the draw card function is being used. This stops multiples of the same card from being dealt.
      setHand([...hand, draw])
      // 4) The setter function's value uses a  spreader operator to reiterate the information from the already dealt hand const as well as the draw function placed on line 26.
    } else if (hand.length !== 52) {
      // 5) The function is referred to if the last else if statement rings true: If all 52 cards have NOT been dealt then run the function of darawCard.  
      drawCard()
      // 6) This is the final portion of the decision tree. If all others portions have equated to false then execute the final portion. 
    } else {
      // 7) This alert is for the final condition on the decision tree. A pop up window opens so that when all 52 cards have been dealt then this window will appear on the screen.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
