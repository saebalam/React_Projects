import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Home() {
    // const bool=true
    const [state,setState]=useState("Login")
    
    useEffect(() => {
      axios.get('user')
      .then((res)=>{
        const isLoggedin=localStorage.getItem('token')
        console.log(isLoggedin)
        console.log(res.data)
        if(isLoggedin==true){
            setState(res.data)
        }
      })
        
    }, [])
    

  return (
    <div style={{marginTop:'100px'}}>
        {console.log("state",state)}
        {state.length 
            ?
                <div>
                    {state}
                </div>
            :
                <h1>Please Login</h1>
        }
    </div>
  )
}

export default Home