import React from "react";
import Image from "./Image";

const Square = ({value, pressSquare}) => {

    return(
            <div className='square' onClick={pressSquare}>
                {value === "x" && (
                    <Image url={"https://cdn-icons-png.flaticon.com/512/2976/2976286.png"}/>
                )}
                {value === "o" &&(
                    <Image url={"https://cdn-icons-png.flaticon.com/512/3524/3524377.png"} />
                )}
                {!value &&(
                    <div className="image"></div>
                )}
            </div>
        );
    }

export default Square;
