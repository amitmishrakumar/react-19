import { useState } from "react"
function Update_Array_In_State() {
  const [data, setData] = useState([
    'anil', 'sam', 'peter', 'tony'
  ])

  const [dataDetails, setDataDetails] = useState([
    { name: 'anil', age: '29' },
    { name: 'sam', age: '25' },
    { name: 'peter', age: '33' },
  ])
  const handleName = (name) => {
    data[data.length - 1] = name;

    setData([...data])

    console.log(data);
  }

  const handleAge=(age) => {
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails])
    
}

  return (
    <div>
      <h1>update array in state</h1>
      <input type="text" placeholder=" inter the name " onChange={(e) => handleName(e.target.value)} />
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr />

      <input type="text" placeholder="inter age " onChange={(e) => handleAge(e.target.value)} />
      {
      dataDetails.map((item,index)=>(
        <h4 key={index}>{item.name}, {item.age}</h4>
      ))
     }
    </div>
  )

}
export default Update_Array_In_State