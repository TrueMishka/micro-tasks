import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessageCallBack: (message: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [message, setMessage] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessageCallBack(message);
        setMessage('');
    }

    return (
      <div>
          <input onChange={onChangeInputHandler} value={message}/>
          <button onClick={onClickButtonHandler}>+</button>
      </div>
    );
}