function Reuse_loop2({user}) {
    return (
        <div style={{
           
                border: "1px solid green",
                padding: '23px',
                margin: '23px',
                width: '250px',
                borderRadius: '40px'
        }} >
            
            <h3> name: <span style={{ color: "green" }}>{user.name}</span> </h3>
            <h3> id: <span style={{ color: "green" }}>{user.id}</span> </h3>
            <h3> age: <span style={{ color: "green" }}>{user.age}</span> </h3>
            <h3> email: <span style={{color:"green"}}>{ user.email}</span> </h3>
        </div>
    )
}
export default Reuse_loop2