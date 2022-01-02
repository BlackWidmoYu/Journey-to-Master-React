import React from "react";
import Upper from  "./UpperPart";
import Lower from "./LowerPart";
import Main from "./MainPart";

export default function App(){
    return (
        <div className="root-element">
            <Upper />
            <Main />
            <Lower />
        </div>
    )
}
