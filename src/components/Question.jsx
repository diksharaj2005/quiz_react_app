import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const Question = ({ currQues, questions, setCurrQues, options, correct, setScore, score, SetQuestions }) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select';
        }
        else if (selected === i && selected !== correct) {
            return 'wrong';
        }
        else if (i === correct) {
            return 'select';
        }
    }

    const handleCheck = (i) => {
        setSelected(i);
        if (i == correct) setScore(score + 1)
        setError(false);
    };

    const handleNext = () =>{
        if(currQues > 8){
            navigate('/result')
        }
        else if (selected){
            setCurrQues(currQues + 1)
            setSelected()
        }
        else{
            setError("Please select an option first ")
        }
    }

    const handleQuit = () =>{
           setCurrQues(0);
           SetQuestions();
    }

    return (
        <div className='questions'>
            <h1>Questions {currQues + 1}
            </h1>
            <div className="single_question">
                <h2>{questions[currQues].question} </h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    {
                        options &&
                        options.map(i => (
                            <button onClick={() => handleCheck(i)}  className={`singleOption ${selected && handleSelect(i)}`} key={i}
                                disabled={selected}

                            >

                                {i}
                            </button>
                        ))
                    }
                </div>
                <div className="controls">
                    <Button variant='contained' color='secondary' size='large' style={{ width: 240, height: 50, fontSize: '1.3rem' }} href='/' onClick={ handleQuit}>
                        Quit
                    </Button>
                    <Button variant='contained' color='primary' size='large' style={{width:200, height:80, fontSize:'1.3rem'}} onClick={handleNext}>
                      {currQues>20?"Submit":"Next Question"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Question