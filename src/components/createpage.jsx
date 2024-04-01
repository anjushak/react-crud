import React, { useContext, useState } from 'react'
import { Newcontext } from '../App';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Createpage() {

  const Navigate=useNavigate()
const [input, setinputs] = useState([{id:" ",name:" ",age:" ",course:" "}])
const [data,setdata] = useContext(Newcontext)
const handlechange=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setinputs(values=>({...values,[name]:value}))
}


const change=(event)=>{
   event.preventDefault();
   setdata([...data,input]);
   Navigate(-1)

}
  
 
  return (
    <div  style={{backgroundColor:"lightblue",height:"300px",width:"500px",marginLeft:"500px",borderRadius:"30px",marginTop:"30px"}}>
        <h3 style={{fontWeight:"bold",marginLeft:"150px"}}> Create Details</h3>
        <table style={{marginTop:"30px"}}>
            <tr>
              <td><label style={{marginLeft:"80px"}}>id:</label></td>
              <td><input type='text' value={input.id} onChange={handlechange} name='id' style={{border:"none",borderRadius:"20px",width:"250px"}} /></td>
            </tr>
            <tr>
                <td><label style={{marginLeft:"80px"}}>Name:</label></td>
                <td><input type="text" value={input.name} onChange={handlechange} name='name'style={{border:"none",borderRadius:"20px",width:"250px",marginTop:"10px"}} /></td>
            </tr>
            <tr>
                <td><label style={{marginLeft:"80px"}}>age:</label></td>
                <td><input type="text" value={input.age} onChange={handlechange} name='age' style={{border:"none",borderRadius:"20px",width:"250px",marginTop:"10px"}} /></td>
            </tr>
            <tr>
                <td><label style={{marginLeft:"80px"}}>Course:</label></td>
                <td><input type="text" value={input.course} onChange={handlechange} name='course' style={{border:"none",borderRadius:"20px",width:"250px",marginTop:"10px"}} /></td>
            </tr>
            
        </table>
        <button style={{backgroundColor:'green',border:"none",borderRadius:"20px",marginLeft:'150px',width:"100px"}} onClick={()=>{Navigate("/")}}>Back</button>
        <Link to={'/'} ><button style={{backgroundColor:"blue",border:"none",marginLeft:"10px",borderRadius:"20px",width:"100px",marginTop:"20px"}} onClick={change}>submit</button>  </Link> 

    </div>
  )
}

export default Createpage