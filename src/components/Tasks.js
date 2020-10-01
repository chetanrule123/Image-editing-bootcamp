import React, { useState, useEffect } from 'react'
import '../css/tasks.css'
import Task from '../components/Task'

function Tasks({tasks}) {
    const [searchText, setSearchText] = useState("")
    console.log(tasks);
    return (
        <div className="tasks">
            <div className="tasks_con">
                <div className="tasks_head center">
                    <div>
                    <p style={{color: "white", fontSize: "16px"}}>Tasks you created.</p>
                    <input type="text" placeholder="Search tasks" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    </div>
                </div>
                <div className="task_coll">
                    {
                        tasks.length===0 ? 
                        <div className="empty">
                            <p>No tasks yet. Create one...</p>
                            <img src={require('../assets/empty_illustration.jpg')} alt=""/>
                        </div>
                         :
                        tasks.filter(
                            (task)=>task.title.match(RegExp(`^${searchText}`,'i'))
                        ).map(task=> <Task key={task.id} id={task.id} imgSrc={task.imgSrc} title={task.title} desc={task.desc} show={true}/> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasks
