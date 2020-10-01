import { EditRounded } from '@material-ui/icons'
import React from 'react'
import '../css/submission.css'

function Submission({id, imgSrc, username, score, updateSubmissions}) {
    return (
        <div className="submission">
            <img src={imgSrc} alt=""/>
            <div className="submission_info">
                <div className="user_info">
                    <p style={{fontSize:"10px", fontStyle:"italic"}}>Submitted by :</p>
                    <p>{username}</p>
                </div>
                <div className="score center">
                    <p style={{color:"#FF64C1"}}>Score : <span style={{color:"#479CFF"}}>{score}</span> <span style={{color:"black"}}>/ 10</span> </p>
                    <button className="center" onClick={()=>{
                        const editedScore = prompt(`Enter score for ${username}`, score)
                        if(editedScore===null){}
                        else if(editedScore.length>0 && (editedScore>=0 && editedScore<=10)){
                            updateSubmissions(
                                id,
                                {
                                    id: id,
                                    username: username,
                                    score: Number(editedScore)
                                }
                            )
                        }
                        else alert("Invalid input. Enter a number between 1-10")
                        
                    }}>Edit <EditRounded style={{fontSize:"12px", marginLeft:"3px"}}/> </button>
                </div>
            </div>
        </div>
    )
}

export default Submission
