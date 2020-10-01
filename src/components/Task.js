import { ArrowRightRounded } from '@material-ui/icons'
import React from 'react'
import '../css/task.css'
import {Link} from 'react-router-dom'
function Task(props) {
    return (
        <div className="task">
            <img src={props.imgSrc} alt=""/>
            <div className="task_info">
                <p className="task_title">{props.title}</p>
                <p className="task_desc">{props.desc}</p>
                {
                    props.show ? 
                    <Link to={{pathname: "/submissions", state: props}} >
                        <button>submissions <ArrowRightRounded/> </button>
                    </Link>
                    : null
                }
                
            </div>
        </div>
    )
}

export default Task
