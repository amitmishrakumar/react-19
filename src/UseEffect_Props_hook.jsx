import { useEffect } from "react";
import UseEffect_Props_hook_send from "./UseEffect_Props_hook_send";
function UseEffect_Props_hook({count}) {

    const HandleProps=() => {
      console.log("handle props called");
      
    }
   

    useEffect(()=> {
        HandleProps();
    },[])
    

    return (
        <div>
            <h1>hlo UseEffect_Props_hook called ........{count }</h1>
        </div>
    )
}
export default UseEffect_Props_hook