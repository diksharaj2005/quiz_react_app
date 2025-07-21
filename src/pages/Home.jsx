import React, { useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../Data/Categories';
import { useNavigate } from 'react-router';
import ErrorMessage from '../components/ErrorMessage';

const Home = ({name,setName,fetchQuestions}) => {
  const inputStyle = {
    style: { fontWeight: 'bold', color: 'black' },
  };

  const labelStyle = {
    style: { fontWeight: 'bold', color: 'black' }, 
  };
const [category, setCategory] = useState('');
const [difficulty, setDifficulty] = useState('')
const [error, setError] = useState(false)

const navigate = useNavigate();

const handleSubmit = ()=>{
 if(!category||!difficulty||!name){
  setError(true);
  return;
 }
 else{
  setError(false)
  fetchQuestions(category,difficulty);
  navigate('/quiz')
 }
};


  return (
    <div className='content'>
      <div className="setting">
        <span className='head'>Quiz Settings</span>
        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
        <div className="settings_select">
          <TextField style={{ marginBottom: 30 }} label='Enter Your Name' variant='outlined' InputProps={inputStyle}
            InputLabelProps={labelStyle}
            onChange={(e)=>setName(e.target.value)} />






          <TextField select
            label='Select Category' variant='outlined' style={{ marginBottom: 30 }} InputProps={inputStyle}
            InputLabelProps={labelStyle} onChange={(e)=>setCategory(e.target.value)} value={category}
            >
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              )
              )
            }

          </TextField>
          <TextField select
            label='Select Difficulty Level' variant='outlined' style={{ marginBottom: 30 }} InputProps={inputStyle}
            InputLabelProps={labelStyle} onChange={(e)=>setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>

          </TextField>

          <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
            Start Quiz
          </Button>

        </div>
      </div>
      <img src="/quiz_svg.svg" alt="quiz_img" className='banner' />

    </div>
  )
}

export default Home
