import React, { useState } from "react";

/*

Box- this component should display a div with a background color,
width and height based on the props passed to it.

 */

function Box({height, width}) {

    return <div style={{height:height, width:width, backgroundColor:"pink", margin:"5px"}}></div>

}


export default Box;