import React, { useEffect, useState } from "react";


export const Menu = ({onClick}: any) => {
    return (
        <div>
            <button onClick={()=>{onClick()}}>Start</button>
            <button>FullScreen</button>
        </div>
    )
}