import { useRef } from "react"
import ForwardRef_19_input from "./ForwardRef_19_input"

function ForwardRef_19() {
    const inputRef = useRef(null)
    const handleRef = () => {
        console.log("calling ;;;;")
        inputRef.current.value = "100"
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
    }
    return (
        <div>
            <h1>ForwardRef_19</h1>
            <ForwardRef_19_input ref={inputRef} />
            <button onClick={handleRef} >update input field</button>
        </div>
    )
}
export default ForwardRef_19