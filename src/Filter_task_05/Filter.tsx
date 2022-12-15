import React, {useState} from "react";
import {FilterComponent} from "./FilterComponent";

export type moneyListType = 'RUB' | 'USD' | 'ALL';

export const Filter = () => {


    const [money, setMoney] = useState([
        {banknots: 'USD', value: 100, number: ' a1234567890'},
        {banknots: 'USD', value: 50, number: ' z1234567890'},
        {banknots: 'RUB', value: 100, number: ' w1234567890'},
        {banknots: 'USD', value: 100, number: ' e1234567890'},
        {banknots: 'USD', value: 50, number: ' c1234567890'},
        {banknots: 'RUB', value: 100, number: ' r1234567890'},
        {banknots: 'USD', value: 50, number: ' x1234567890'},
        {banknots: 'RUB', value: 50, number: ' v1234567890'},
    ])

    let [currentMoney, setCurrentMoney] = useState(money);

    const onClickHandler = (value: moneyListType) => {
        if (value === 'RUB') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUB");
        } else if (value === 'USD') {
            currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "USD");
        } else {
            currentMoney = money;
        }

        setCurrentMoney(currentMoney);
    }

    return (
        <FilterComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
    );
}