import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

/**

BoxList - Place your state that contains all of the boxes here.
This component should render all of the Box components
along with the NewBoxForm component

*/

function BoxList () {

    const INITIAL_STATE = [
        { id: uuidv4(), height:"75px", width:"50px", backgroundColor:"pink"},
        { id: uuidv4(), height:"50px", width:"100px", backgroundColor:"grey"},
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuidv4()}])
    }

    const removeBox = (box) => {
        
        setBoxes(boxes.filter(b => b !== box))

    }

    return (
        <>
        <NewBoxForm addBox={addBox}/>
        {boxes.map(b => <Box key={b.id} width={b.width} height={b.height} backgroundColor={b.backgroundColor} removeBox={() => removeBox(b)}/>)}
        </>
    )


};

export default BoxList;