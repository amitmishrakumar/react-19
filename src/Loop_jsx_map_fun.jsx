function Loop_jsx_map_fun() {
    const username = ['amit', 'sem', 'pitter', 'cally']
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
            <h1>looping  in jsx</h1>
            <table border="2">
                <thead >
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>

                    </tr>
                </thead>
                <tbody>

                    {
                     userdata.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                             <td>{ user.name}</td>
                             <td>{ user.age }</td>
                             <td>{ user.email}</td>
                            </tr>
                     ))
                    }

                </tbody>
            </table>

            <h2>dummy data </h2>

            <table border="3">
                <thead >
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>23</td>
                        <td>anil@test.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>sam</td>
                        <td>24</td>
                        <td>sam@test.com</td>
                    </tr>  <tr>
                        <td>3</td>
                        <td>pitter</td>
                        <td>25</td>
                        <td>pitter@test.com</td>
                    </tr>  <tr>
                        <td>4</td>
                        <td>calley</td>
                        <td>26</td>
                        <td>calley@test.com</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Loop_jsx_map_fun