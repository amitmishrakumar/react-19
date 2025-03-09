function LiftingUp_addUser({setUser}) {
    return (
        <div>
            <h1>LiftingUp_addUser.jsx</h1>
            <br /><br />
            <input type="text" placeholder="ener the name "
                onChange={(e)=>setUser(e.target.value)}
            />
        </div>
    )
}
export default LiftingUp_addUser



// app components ,,it is individual components 
function App() {
    const [user, setUser] = useState();
    return (
        <div>
      
            <LiftingUp_addUser setUser={setUser} />
            <br /> <br />
            <LiftingUp_DisplayUser user={user} />
     
        </div>
    )
}
