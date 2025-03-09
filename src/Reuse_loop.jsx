import Reuse_loop2 from "./Reuse_Loop2"
function Reuse_loop() {
    const userdata = [
        {
            name: 'anil',
            age: 23,
            email: 'anil@text.com',
            id: 1
        },
        {
            name: 'sam',
            age: 24,
            email: 'sam@.com',
            id: 2
        },
        {
            name: 'pitter',
            age: 25,
            email: 'pitter@text.com',
            id: 3
        },
        {
            name: 'calley',
            age: 26,
            email: 'calley@text.com',
            id: 4
        }
    ]
    return (
        <div>
            <h1>resuse_Loop</h1>
           
            {
                userdata.map((user) => (
                    <div key={user.id}>
                        <Reuse_loop2 user={user} />
                        </div>
                ))
            }
        </div>
    )
}
export default Reuse_loop