import { useState } from "react"

function InputBox() {
    const [username, setusername] = useState("")
    const [pass, setpass] = useState("")
    return (
        <div>
            <h1> GET input box</h1>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)
            } placeholder="enter the username" />
            <br /><br />
            <input type="text" value={pass} onChange={(e) => setpass(e.target.value)} placeholder="enter password" />
            <br /><br />
            <button>click me </button>
            <button onClick={() => { setusername(""), setpass("") }} >clear </button>
            <h1>{username}</h1>
            <h1>{pass}</h1>


        </div>
    )
}
export default InputBox