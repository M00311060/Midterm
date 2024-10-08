
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const QuizPage = () => {

  const navigate = useNavigate();
  const [answers, setAnswers]=useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [isValid, setIsValid]=useState(true);

  const correctAnswers = {
    question1: 'javascript',
    question2: 'node.js',
    question3: 'react'
  };

  const handleInput = (e) => {
    const{name, value} = e.target;
    setAnswers({
      ...answers,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if(
      answers.question1.toLowerCase() === correctAnswers.question1 &&
      answers.question2.toLowerCase() === correctAnswers.question2 &&
      answers.question3.toLowerCase() === correctAnswers.question3

    ){
      navigate('/landing');
    }else{
      setIsValid(false);
    }
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <div>
          <label>
            1. What language is used for client-side scripting in web development?
            <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            2. What runtime is commonly used for backend JavaScript?
            <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            3. Which JavaScript library is used for building user interfaces?
            <input
            type="text"
            name="question3"
            value={answers.question3}
            onChange={handleInput}
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Submit Quiz</button>
        {!isValid && <p style={{color: 'red'}}>Incorrect answer. Please try again!</p>}
      </div>
    );
  };
  
  export default QuizPage;
  
  