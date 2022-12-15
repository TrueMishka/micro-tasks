import React, {ChangeEvent} from 'react';

type InputPropsType = {
    inputValue: string
    setInputValue: (value: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={props.inputValue}></input>
    );
};
