import React, {MouseEventHandler} from "react";

export const ButtonSubscribe = () => {

    const onClickHandler = (name: string) => {
        console.log(`Hi! ${name}`);
    }

    const foo1 = () => {
        //ничего не передаём
        console.log("empty");
    }
    const foo2 = (n:number) => {
        //передать 100500
       console.log(n);
    }

    return (
        <div>
            <div>
                <button onClick={() => onClickHandler('Mishka')}>MyYouTubeChanel-1</button>
                <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            </div>
            <div>
                <button onClick={foo1}>1</button>
                <button onClick={()=>foo2(100500)}>2</button>
            </div>
        </div>
    );
}