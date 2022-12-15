import React, {MouseEventHandler} from "react";
import {moneyListType} from "./Filter";

type FilterPropsType = {
    currentMoney: Array<CurrentMoneyType>;
    onClickHandler: (value: moneyListType) => void;
}

type CurrentMoneyType = {
    banknots: string;
    value: number;
    number: string;
}

export const FilterComponent = (props:FilterPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots} {el.value} {el.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={() => props.onClickHandler('RUB')}>RUB</button>
                <button onClick={() => props.onClickHandler('USD')}>USD</button>
                <button onClick={() => props.onClickHandler('ALL')}>ALL</button>
            </div>
        </>
    );
}