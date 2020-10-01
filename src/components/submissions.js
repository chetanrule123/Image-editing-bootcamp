import React, { useState } from 'react'
import '../css/submissions.css'
import Task from '../components/Task'
import Submission from '../components/Submission'
import {Link} from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'

function Submissions(props) {
    const task = props.location.state
    const [submissions, setSubmissions] = useState([
        {
            id: 1,
            username: "chetan",
            score: 8
        },
        {
            id: 2,
            username: "chandra",
            score: 9
        },
        {
            id: 3,
            username: "sai",
            score: 10
        }
    ])
    const [searchText, setSearchText] = useState("")
    const updateSubmissions = (index, data) => {
        const newSubmissions = [...submissions];
        newSubmissions[index-1] = data;
        console.log(newSubmissions);
        setSubmissions(newSubmissions);
      }
      
    return (
        <div className="submissions_con center">
            <div className="center sub_related">
                <div className="center" style={{color: "white",justifyContent:"flex-start", width:"100%"}}>
                    <Link to="/" style={{marginRight: "15px"}}>
                        <button className="center"> <ArrowBack style={{fontSize:"15px"}}/> Back</button>
                    </Link>
                    <p>Submissions related to <span style={{color: "rgb(242, 255, 66)"}}>{task.title}</span></p>
                    
                </div>
                <Task id={task.id} imgSrc={task.imgSrc} title={task.title} desc={task.desc} show={false}/>
            </div>
            <div className="center sub_related" style={{marginTop:0}}>
                <div className="center" style={{color: "white", justifyContent:"space-between", width:"100%"}}>
                    <p style={{color:"white", fontSize:"20px", }}>Submissions</p>
                    <input type="text" placeholder="Search by username" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                </div>
                
                <div className="submissions center">
                    {
                        submissions.filter(
                            submission => submission.username.match(RegExp(`^${searchText}`,'i'))
                        )
                        .map(submission=>
                            <Submission key={submission.id} 
                            id={submission.id} 
                            imgSrc={task.imgSrc}
                            username={submission.username} 
                            score={submission.score}
                            updateSubmissions={updateSubmissions}
                            />
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Submissions
