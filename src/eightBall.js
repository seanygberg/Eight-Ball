import React, { useState } from "react";
import "./eightBall.css";
import answers from "./answers.json";

function EightBall({ choices = answers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function choice(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function handleClick(evt) {
        setAnswer(choice(answers));
    }
    
    return (
        <div
          className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;