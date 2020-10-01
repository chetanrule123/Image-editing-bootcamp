import { AddRounded, CloseRounded, CloudUploadRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/addTask.css'

function Addtask({toggle, addTask}) {
    const [imgSrc, setImgSrc] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc]= useState("")
    return (
        <div className="addTask_con center">
            <div className="addTask_form center">
                <p className="title">Add Task</p>
                <img src={imgSrc} alt=""/>
                <input id="selected_img" type="file" accept="image/*" style={{display: "none"}} onChange={(e)=>{
                    if(e.target.files.length>0){
                        const reader = new FileReader()
                        reader.readAsDataURL(e.target.files[0])
                        reader.onload = ()=>{
                            setImgSrc(reader.result)
                        }
                    }
                }}/>
                <label htmlFor="selected_img" className="upload_img_butt">Upload image <CloudUploadRounded style={{marginLeft: "5px"}}/> </label>
                <input className="inputs" type="text" placeholder="Task title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea className="inputs" rows="5" placeholder="Task description" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
                
                <div className="func_butts" style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <button className="func_butt close" onClick={()=>toggle()}>Close <CloseRounded/> </button>
                    <button className="func_butt" onClick={()=>{
                        if(title!=="" && desc!=="" && imgSrc!=="") {
                            addTask({
                                id: Date.now(),
                                imgSrc: imgSrc,
                                title : title,
                                desc: desc
                            })
                            setImgSrc("")
                            toggle()
                        }
                        else if(imgSrc==="") alert("Please upload photo.")
                        else alert("Please fill the details.")
                    }}>Add task <AddRounded/> </button>
                </div>
            </div>
        </div>
    )
}

export default Addtask
