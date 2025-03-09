import { useEffect } from "react";
import { useState } from "react";


function UseEffect_Hook() {
    const [counter, setcounter] = useState(0)
    const[data,setdata]=useState(0)



    // useEffect(() => {
    //    // callOne()
    // }, [])

    useEffect(() => {
        counterFunction();
     },[counter])
     
    
    function counterFunction() {
       console.log("counter function called ...",counter);
       
   }







    function callOne() {
            console.log("callone function called ...");
            
    }
    // callOne()




    return (
        <div>
            <h1>useeffect working........ </h1>
            <button onClick={() => setcounter(counter + 1)}> Counter:{counter}</button>
            <button onClick={()=>setdata(data+1)}>data :{data}</button>
       </div>
   )
}
export default UseEffect_Hook