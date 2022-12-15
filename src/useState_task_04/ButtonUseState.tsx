import React, {useState} from "react";
import {Button} from "../button_task_03/Button";

export const ButtonUseState = () => {

    let [num, setNum] = useState(1);
    const buttonPlus = () => {
        ++num;
        setNum(num);
    }
    const buttonMinus = () => {
        --num;
        setNum(num);
    }
    const buttonSetZero = () => {
        num = 0;
        setNum(num);
    }

    return (
        <div>
            <div>{num}</div>
            <button onClick={buttonPlus}>+</button>
            <button onClick={buttonMinus}>-</button>
            <button onClick={buttonSetZero}>set 0</button>
        </div>
    );
}
