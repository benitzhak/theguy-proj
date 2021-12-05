import React, {useEffect, useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Question = ({ question, answer }) => {

    const [showAnswer, setShowAnswer] = useState(false);
    
    const [arrowClass, setArrowClass] = useState('');

    useEffect(()=>{
        if(showAnswer) {
            setArrowClass('open')
        } else {
            setArrowClass('')
        }
    },[showAnswer])

    return (
            <li className="question">
                <div className="question-container flex" onClick={()=>setShowAnswer(!showAnswer)}>
                    <div className="title">
                        {question}
                    </div>
                    <div className="flex align-center">
                        {/* {showAnswer ? ( */}
                            {/* <MdKeyboardArrowUp className={`asked-question-icon ${arrowClass}`} /> */}
                        {/* ) : ( */}
                            <MdKeyboardArrowDown className={`asked-question-icon ${arrowClass}`} />
                        {/* )} */}
                    </div>
                </div>
                {
                    showAnswer &&  
                    <div className="text">
                       <p> {answer} </p>
                    </div>
                }
            </li>
    )
}
