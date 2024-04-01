import React, { useContext, useState } from 'react'
import { Newcontext } from '../App'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";

function Home() {
 const [data,setdata] = useContext(Newcontext)
 const [searchdata,setsearchdata] = useState('');

 const handlesearch=(e)=>{
     setsearchdata(e.target.value);
 }
 const change=()=>{
  const filterdata=data.filter(item=>item.id.toLowerCase().includes(searchdata.toLowerCase()));
  setdata(filterdata);
 }


    console.log(data)

  return (
    <div>
      <h3 style={{marginLeft:"660px",paddingTop:"90px",fontWeight:"bold",color:"green",fontFamily:"fantasy"}}>React crud</h3>
      <input type='text' placeholder='search' style={{marginLeft:"700px",width:"250px",height:"35px",marginTop:"30px"}} value={searchdata} onChange={handlesearch}></input>
      <button onClick={change} style={{marginLeft:"10px",height:"35px",marginTop:"70px"}}>search</button>
      <Link to={'createpage'}><CiCirclePlus style={{width:"100px",height:"40px",color:"green"}}/></Link>
          <Table style={{ width:"1000px",marginLeft:"400px",marginTop:"30px"}}>
               <thead>
                 <tr>
                  <th>Id</th>
                   <th>Name</th>
                   <th >Age</th>
                   <th >Course</th>
                  
                 </tr>
               </thead>
               {data.map((disp,ind)=>
               <>
              
              
               <tbody>
                 <tr style={{width:"100px"}}>
                  <td>{disp.id}</td>
                   <td>{disp.name}</td>
                   <td>{disp.age}</td>
                   <td>{disp.course}</td> 
                 
                   

                  <Link style={{textDecoration:"none"}} to={`viewpage/${ind}`}> <td> <Button variant="light" style={{backgroundColor:"green"}}>View</Button></td></Link>
                   <Link style={{textDecoration:"none"}} to={`editpage/${ind}`}> <td> <Button variant="light" style={{backgroundColor:"lightblue",marginLeft:"60px"}}>edit</Button></td></Link>
                  <Link style={{textDecoration:"none"}} to={`deletepage/${ind}`}><td> <Button variant="primary" style={{backgroundColor:"red",marginLeft:"60px"}}>delete</Button></td></Link> 
                 </tr>
               </tbody>

               </>
               )}
     
    </Table>
    
    </div>
  )
}

export default Home