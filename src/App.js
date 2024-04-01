import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Data from './components/Data';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Viewpage from './components/Viewpage';
import Createpage from './components/createpage';
import Editpage from './components/editpage';
import Deletepage from './components/deletepage';

const Newcontext=createContext();
function App() {
  const myroute=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/viewpage/:user",
      element:<Viewpage/>
    },
    {
      path:"/editpage/:user",
      element:<Editpage/>
    },
    {
      path:"/deletepage/:user",
      element:<Deletepage/>
    },
    {
      path:"/createpage",
      element:<Createpage/>
    }
  ])

  const [data,setdata] = useState(Data)
  console.log(data)
  return (
    <div className="App">
      <Newcontext.Provider value={[data,setdata]}>
       <RouterProvider router={myroute}></RouterProvider>

      </Newcontext.Provider>
    </div>
  );
}

export default App;
export {Newcontext};
