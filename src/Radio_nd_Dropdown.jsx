import { useState } from "react";



function Radio_nd_Dropdown() {
    const [gender, setGender] = useState("male")
    const [city, setcity] = useState("Select")
    return (
        <div>

            <h1>Select Gender</h1>
            <input type="radio" checked={gender == 'male'} name='Gender' onChange={(e) => setGender(e.target.value)} id='male' value="male" />
            <label htmlFor="male">male</label>
            <input type="radio" checked={gender == 'female'} name='Gender' onChange={(e) => setGender(e.target.value)} id='female' value="female" />
            <label htmlFor="female">female</label>
            <h2>selected gender:{gender}</h2>
            <br />
            <h4>Select city </h4>
            <select onChange={(e) => setcity(e.target.value)} >
                <option value="select">select</option>
                <option value="noida">noida</option>
                <option value="ghaziyabad">ghaziyabad</option>
                <option value="delhi">delhi</option>
            </select>
            <h4>city :{city}</h4>




        </div>
    )
}
export default Radio_nd_Dropdown;