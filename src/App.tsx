import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Students} from "./students_task_02/Students";
import {CartsList} from "./students_task_02/CartsList";
import {ButtonSubscribe} from "./button_task_03/ButtonSubscribe";
import {Button} from "./button_task_03/Button";
import {ButtonUseState} from "./useState_task_04/ButtonUseState";
import {Filter} from "./Filter_task_05/Filter";

const App = () => {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCarslist = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const button1foo = (subscriber:string, age?:number) => {
        console.log(`Hello ${subscriber}, ${age} years old!`);
    }

    return (
        <div className="App">
            <h1>Task 01</h1>
            <Header titleHeader = {'Header'}/>
            <Body titleBody = {'Body'}/>
            <Footer titleFooter = {'Footer'}/>
            <h1>Task 02</h1>
            <Students studentsList={students}/>
            <CartsList carList = {topCarslist}/>
            <h1>Task 03</h1>
            <ButtonSubscribe/>
            <Button name={'MyChanel-1'} callBack={()=>button1foo('Mishka', 21)}/>
            <Button name={'MyChanel-2'} callBack={()=>button1foo('Vasya')}/>
            <h1>Task 04</h1>
            <ButtonUseState/>
            <h1>Task 05</h1>
            <Filter/>
        </div>
    );
}

export default App;