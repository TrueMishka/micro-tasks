import React from "react";

type HeaderPropsType = {
    titleHeader: string;
}
export const Header = (props: HeaderPropsType) => {
    return (
      <div>{props.titleHeader}</div>
    );
}