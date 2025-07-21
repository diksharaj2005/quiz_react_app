import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{
        width:"70%",
        padding:"15px",
        marginTop:"20px",
        borderRadius:'10px',
        backgroundColor:"orangered",
        textAlign:"center",
        color:"white",
        textTransform:"capitalize",
        fontSize:"large"
    }}
    >{children}</div>
  )
}

export default ErrorMessage