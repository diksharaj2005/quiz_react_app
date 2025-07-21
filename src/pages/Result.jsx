import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Result = ({name , score}) => {
  const navigate= useNavigate()
  useEffect(() => {
    if(!name){
     navigate('/')
    }

  }, [name,navigate])
  
  return (
    <div className='result'>
<span className='final_score'>FINAL SCORE : {score}</span>
<Button variant='contained' color='secondary' sx={{ fontSize: '2rem', padding: '12px 24px' }} style={{alignSelf:'center', marginTop: 25}}
href='/'>
  GO TO HOMEPAGE
</Button>
    </div>
  )
}

export default Result