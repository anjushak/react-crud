import React, { useContext } from 'react'
import { Newcontext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'

function Viewpage() {
    const [data] = useContext(Newcontext)
    const {user}=useParams()
    const viewdata=data[user]
    const navigate=useNavigate();

    const back=()=>{
       navigate('/')
    }

    const val={
        color:"black",
        width:"350px",
        paddingLeft:"150px",
        fontSize:"20px",
        marginTop:"10px",border:"none",borderRadius:"20px"
    }
    const val1={marginTop:"20px",width:"350px",
    paddingLeft:"150px",
    fontSize:"20px",border:"none",borderRadius:"20px"}

    const button1={
       marginLeft:"100px",
       border:"none",
       marginTop:"30px",
       borderRadius:"30px",
       width:"150px",
       height:"40px",
       backgroundColor:"pink"
       
    }
  return (
    <div>
        <div style={{backgroundColor:"lightblue",width:"350px",height:"350px",marginTop:"30px",marginLeft:"500px",border:"solid light blue 1px",borderRadius:"30px"}}>
          <h2 style={{fontWeight:"bold",marginLeft:"100px",fontSize:"25px",fontFamily:'fantasy',paddingTop:"20px"}}>View details</h2>
          <input type="text" value={viewdata.id} style={val1}/>
           <input type="text" value={viewdata.name} style={val}/>
           <input type="text" value={viewdata.age} style={val}/>
           <input type="text" value={viewdata.course} style={val}/>
           <button style={button1} onClick={back}>back to home</button>

        </div>
    </div>
  )
}

export default Viewpage