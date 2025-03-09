import { useState } from "react";
import UseEffect_Props_hook from "./UseEffect_Props_hook";

function UseEffect_Props_hook_send() {
    const[count,setcounter]=useState(0)
    return (
        <div>
            <UseEffect_Props_hook count={count } />
            <button onClick={()=>setcounter(count+1)}>count::{ count}</button>
        </div>
    )
}
export default UseEffect_Props_hook_send;