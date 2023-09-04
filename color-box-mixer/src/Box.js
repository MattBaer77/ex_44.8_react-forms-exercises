import React, { useState } from "react";

/*

Box- this component should display a div with a

background color,
width
and height

based on the props passed to it.

 */

function Box({height, width, backgroundColor="pink", removeBox}) {

    return <div style={{height:height, width:width, backgroundColor:backgroundColor, margin:"5px"}}>
            <button onClick={removeBox}>X</button>
        </div>

}


export default Box;