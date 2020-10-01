import { AddRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import Tasks from './components/Tasks'
import AddTask from './components/Addtask'
import Submissions from './components/submissions'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

//contexts
export const contextUserContext = React.createContext()

function App() {
  const [user, setUser] = useState(null)
  const [tasks, setTasks] = useState([])
  const [toggle, setToggle] = useState(false)
  useEffect(()=>{
    window.onscroll = ()=>{
      if(user!==null){
        if (window.scrollY) {
          document.querySelector(".head").classList.add("black")
        } else {
          document.querySelector(".head").classList.remove("black")
        }
      }
    }
  },[user])
  return (
    <contextUserContext.Provider value={{user: user, setUser: setUser}}>
      <div className="App">
        {
          user===null ? 
          <Login/>
          : 
          <div>
            <div className="head">
              <header>
                <img src={require('./assets/logo.jpg')} alt=""/>
                <p className="head_line">Online Image Editing Bootcamp</p>
              </header>
              <header>
                <p className="hello">Hello! <span>{user.email[0]}</span></p>
                <button className="center" onClick={()=>setToggle(true)}>Create Task <AddRounded/> </button>
              </header>
            </div>
            <Router>
              <Switch>
                <Route path="/" exact component={()=><Tasks tasks={tasks}/>}/>
                <Route path="/submissions" exact component={Submissions}/>
              </Switch>
            </Router>
            
          </div>
        }
        {
          toggle ? 
            <AddTask toggle={()=>setToggle(false)} addTask={(task)=>setTasks([...tasks,task])}/>
          : <div></div>
        }
        <div className="app_layer"></div>
        <div className="app_layer2"></div>
      </div>
    </contextUserContext.Provider>
  );
}

export default App;
