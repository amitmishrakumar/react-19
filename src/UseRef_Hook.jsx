import { useRef } from "react"
function UseRef_Hook() {
    const inputRef = useRef(null)
    const inputHandler = () => {
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
        inputRef.current.placeholder="enter the password"
    }

    const handleToggle = () => {
        if (inputRef.current.style.display != 'none') {
           inputRef.current.style.display= 'none'
        } else {
             inputRef.current.style.display= 'inline'
       }
   }


    return (
        <div>
            <h1>Use ref </h1>
            <button onClick={handleToggle}>Toggle </button>
            <input ref={inputRef} type="text" placeholder="enter name "  id="name" />
           <button onClick={inputHandler}>focus on input field</button>
        </div>
    )
}
export default UseRef_Hook