import React, { useState } from "react";
import styled from "styled-components";
import '../src/';
const color1 = "#554236";
const color2 = "#f77825";
const color3 = "#d3ce3d";
const color4 = "#f1efa5";
const color5 = "#60b99a";

const Wrapper = styled.div`text-align: center; background-color: ${color1}; padding: 20px; border-radius: 10px; color: ${color4};`

const Title = styled.h1`font-size: 3rem; font-weight: bold; margin-bottom: 20px;`

const FormWrapper = styled.div`display: flex; justify-content: center; align-items: center; margin-bottom: 20px;`

const Form = styled.form
  `display: flex; justify-content: center; align-items: center;
`
const Input = styled.input`padding: 10px; font-size: 20px; margin-right: 10px; border: 2px solid ${color2}; border-radius: 5px; outline: none;`

const Button = styled.button
  `
padding: 10px 20px;
font-size: 20px;
background-color: ${color2};
color: ${color4};
border: none;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;

&:hover {
background-color: ${color3};
}
`;

const Result = styled.div`font-size: 24px; font-weight: bold; margin-bottom: 20px;`


const Tries = styled.div`font-size: 20px; margin-bottom: 20px;`

const Description = styled.p`font-size: 20px; text-align: left; margin-top: 20px;`
function GuessNumber() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState(5);
  const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 30) + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!correctNumber) {
      setCorrectNumber(Math.floor(Math.random() * 30) + 1);
    }

    if (tries === 0) {
      return;
    }

    const parsedGuess = parseInt(guess);
    if (parsedGuess < 0) {
      setResult("Please enter a positive number.");
      return;
    }

    if (parsedGuess === correctNumber) {
      setResult("You win!");
      setTries(0);
    } else if (parsedGuess < correctNumber) {
      setResult("The number is larger than your guess.");
      setTries((prevTries) => prevTries - 1);
    } else {
      setResult("The number is smaller than your guess.");
      setTries((prevTries) => prevTries - 1);
    }

    setGuess("");
  };

  const handleReset = () => {
    setTries(5);
    setResult("");
    setCorrectNumber(Math.floor(Math.random() * 30) + 1);
  };

  return (
    <Wrapper>
      <Title>Welcome to Game Guess Number</Title>
      <Description>
      This is a number guessing game. Choose a number between 1 and 30 and see if you get it right. You have 5 attempts. Good luck!
      </Description>
      <FormWrapper onSubmit={handleSubmit}>
        <Input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} disabled={tries === 0} />
        <Button type="submit" onClick={handleSubmit} disabled={tries === 0}>Guess</Button>
      </FormWrapper>
      <Result>{result}</Result>
      {tries === 0 && <div>The correct number was: {correctNumber}</div>}
      <Tries>Tries left: {tries}</Tries>
      {tries === 0 && <Button onClick={handleReset}>Play Again</Button>}
    </Wrapper>
  );
}

export default GuessNumber;