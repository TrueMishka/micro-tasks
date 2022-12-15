import React from "react";

type CartsListPropsType = {
    carList: CarInfoType[];
}

type CarInfoType = {
    manufacturer: string;
    model: string;
}

export const CartsList = (props: CartsListPropsType) => {
    return (
        <table>
            <h3>Car table</h3>
            <tr>
                <th>Index</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>

            {props.carList.map((el, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                );
            })}
        </table>
    );
}