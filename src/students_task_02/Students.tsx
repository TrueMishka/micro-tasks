import React from "react";

type StudentsPropsType = {
    /*studentsList: Array<StudentsInfoType>*/
    studentsList: StudentsInfoType[]
}

type StudentsInfoType = {
    id: number;
    name: string;
    age: number;
}

export const Students = (props: StudentsPropsType) => {
    return(
      <ul>
          {props.studentsList.map(el=>{
           return(
               <li key={el.id}>id: {el.id}, name: {el.name}, age: {el.age}</li>
           );
          })}
      </ul>
    );
}