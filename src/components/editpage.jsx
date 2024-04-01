import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Newcontext } from '../App'



function Editpage() {
    const Navigate=useNavigate()
   
   
    const [data,setdata] = useContext(Newcontext)
    const {user}=useParams()
    const editdata=data[user]
    const [input, setinputs] = useState({id:editdata.id,name:editdata.name,age:editdata.age,course:editdata.course})

    const handlechange=(event)=>{
 
        setinputs({...input,[event.target.name]:event.target.value})

      }

    const edit=(e)=>{
       const newdata=[...data];
       newdata[user]=input
       setdata(newdata)
        Navigate('/')
     
     }
  return (
    <div style={{backgroundColor:"lightblue",height:"350px",width:"500px",marginLeft:"500px",borderRadius:"30px",marginTop:"30px"}}>



           <h3 style={{paddingLeft:"160px",fontWeight:"bold"}}>Edit Details</h3>
           <form >

        <table style={{marginLeft:"70px",marginTop:"30px"}} >
        <tr>
                <td style={{marginTop:"40px"}}>id:</td>
                <td><input type="text"  name='id' value={input.id} onChange={handlechange} style={{marginLeft:"50px",border:"none",borderRadius:"20px",width:"250px"}} /></td>
            </tr>
            <tr>
                <td style={{marginTop:"40px"}}>name:</td>
                <td><input type="text"  name='name' value={input.name} onChange={handlechange} style={{marginLeft:"50px",border:"none",borderRadius:"20px",width:"250px",marginTop:"20px"}} /></td>
            </tr>
            <tr>
                <td ><label style={{marginTop:"30px"}}>age:</label></td>
                <td><input type="text"  name='age'  value={input.age} onChange={handlechange} style={{marginLeft:"50px",border:"none",borderRadius:"20px",width:"250px",marginTop:"20px"}} /></td>
            </tr>
            <tr>
                <td ><label style={{marginTop:"20px"}}>Course:</label></td>
                <td><input type="text" name='course'  value={input.course} onChange={handlechange} style={{marginLeft:"50px",border:"none",borderRadius:"20px",width:"250px",marginTop:"20px"}}/></td>
            </tr>
        
             
            
        </table>
        <button style={{backgroundColor:"green",marginLeft:"90px",marginTop:"30px",width:"130px",borderRadius:"30px"}} onClick={()=>{Navigate('/')}} >back</button>
        <button style={{backgroundColor:"blue",marginLeft:"50px",marginTop:"30px",width:"130px",borderRadius:"30px"}} onClick={edit}>submit</button>
        </form>
        
    </div>
  )
}

export default Editpage