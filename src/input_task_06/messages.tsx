import React, {useState} from "react";
import {FullInput} from "./fullInput/FullInput";
import {Input} from "./input/Input";
import {Button} from "../button_task_03/Button";


type messageType = {
    message: string
}

export const Messages = () => {

    // ----full----
    let [messages, setMessages] = useState<messageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessageCallBack = (m: string) => {
        setMessages([{message: m}, ...messages])
    }

    // ----button + input----
    let [inputValue, setInputValue] = useState('');

    const callBackButtonHandler = () => {
        addMessageCallBack(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <h4>-Full Input</h4>
            <FullInput addMessageCallBack={addMessageCallBack}/>
            <h4>-Input/Button</h4>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {messages.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                );
            })}
        </div>
    );
}