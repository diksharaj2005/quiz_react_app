import React, { useEffect, useState } from 'react'
import backgroundImage from './assets/bg.png'
import Header from './components/Header'
import { BrowserRouter, Route ,Routes } from 'react-router-dom' 
import Footer from './components/Footer'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import axios from 'axios'


const App = () => {

const [name, setName] = useState('')
const [questions, setQuestions] = useState();
const [score, setScore] = useState(0)

const fetchQuestions = async (category = '', difficulty = '') => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${category ? `&category=${category}` : ''}${difficulty ? `&difficulty=${difficulty}` : ''}&type=multiple`
  );
  setQuestions(data.results);
  // console.log(data);
};



  return (
    <>
  <BrowserRouter>
    <div className="app" style={{background: `url(${backgroundImage}) `,backgroundSize:"cover",backgroundRepeat:'no-repeat', minHeight: '98vh',
          border:"8px solid rgb(247, 188, 59)", margin:"10px",padding:'10px', }}>
            <div style={{
              
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.05)', 
            zIndex: 0,
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
            <Header />
         
              <Routes>
                  <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
                  <Route path='/quiz' element={<Quiz
                  name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}/>
                  <Route path='/result' element={<Result name={name} score={score} />}/>
                  </Routes>
            </div>
          </div>
         <Footer />
    </BrowserRouter>
    </>
  )
}

export default App