import React from "react";
import { useState ,useRef} from "react";
import './Task.css'
function Task(){
    const [tasks,setTasks]=useState([
        {
            text:"this is task 1",
            completed:true,
        },
        {
            text:"this is task 2",
            completed:true,
        }
    ]);
    const ta=useRef(); 

    return(
        <div>
            <div className="all_task">
                {
                    tasks.map((item,index)=>{
                        return(
                            <div 
                                className={item.completed == false ? "indi_task_completed":"indi_task"}>
                                    {item.text}
                                    <div className="del" onClick={()=>{
                                        let allTask=tasks;
                                        allTask.splice(index,1);
                                        setTasks([...allTask]);
                                    }}>
                                        <svg xmlns="www.w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>

                                    </div>
                                    <div className={item.completed==true? "done" :"un_done"
                                    } onClick={()=>{
                                        let allTasks=tasks;
                                        if(allTasks[index].completed==true){
                                            allTasks[index].completed=false;
                                        }
                                        else{
                                            allTasks[index].completed=true;
                                        }
                                        
                                        setTasks([...allTasks])

                                    }}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="adding">
                <textarea  ref={ta}></textarea>
                <button onClick={()=>{
                    let allTasks=tasks;
                    allTasks.push({
                        text :ta.current.value,
                        completed :true,
                    })
                    setTasks([...allTasks]);
                }}>Add</button>
            </div>
        </div>
    )
}
export default Task;