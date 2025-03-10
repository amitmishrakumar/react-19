import { useState } from "react";

const Counter = () => {
    const [count,setcount]=useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <h1>{ count}</h1>
            <button onClick={()=>setcount(count+1)} > update counter</button>
        </div>
    )
}
export default Counter;