import React, { useState } from "react";
import Box from "./Box";

/**

    Place state that contains all of the boxes here.
    This component should render all of the Box components along with the NewBoxForm component.

*/

function BoxList () {

    const INITIAL_STATE = [
        { id: 1, height:"50px", width:"50px"},
        { id: 2, height:"50px", width:"50px"},
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    return (
        <>
        {boxes.map(b => <Box width={b.width} height={b.height}/>)}
        </>
    )


};

export default BoxList;