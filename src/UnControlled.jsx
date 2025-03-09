import { useRef } from "react";

function UnControlled() {
    const userRef = useRef();
    const passRef = useRef();
    
    
    

    const handleForm = (event) => {
        event.preventDefault();

        const user = document.querySelector("#user").value;
        const password = document.querySelector('#password').value


        console.log(user, password);


    }
    const handleformRef = (event) => {
        event.preventDefault();
        // console.log('handleformRef');
        const user = userRef.current.value;
        const pass = passRef.current.value;

       

        console.log(user,pass);
        
    }
    return (
        <>
            <h1>UnControlled components with querySelector</h1>
            <br />
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="enter the user " />
                <br /> <br />
                <input type="text" id="password" placeholder=" enter the password " />
                <br /> <br />
                <button >submit</button>
            </form>


            <hr /><hr />
            <h1> UnControlled components with useRef </h1>
            <br />
            <form action="" method="post" onSubmit={handleformRef}>
                <input ref={userRef} type="text" id="userRef" placeholder="enter the user " />
                <br /> <br />
                <input ref={passRef} type="password" id="passwordRef" placeholder=" enter the password " />
                <br /> <br />
                <button >submit with ref</button>
            </form>
        </>
    )
}
export default UnControlled