import { useState } from "react"

function CheckBox() {
    const [skills, setskills] = useState([]);
    const handleSkills = (e) => {
        console.log(e.target.value, e.target.checked);
        if (e.target.checked) {
            //   setskills(e.target.value) is given single value 
            setskills([...skills, e.target.value])
        } else {
            setskills([...skills.filter((item) =>item != e.target.value)])
        }
    }
    return (
        <div>
            <h1>select your skills</h1>
            <input type="checkbox" onChange={handleSkills} id="PHP" value="PHP" />
            <label htmlFor="PHP">PHP</label>
            <br /><br />

            <input type="checkbox" onChange={handleSkills} id="JAVA" value="JAVA" />
            <label htmlFor="JAVA">JAVA</label>
            <br /><br />

            <input type="checkbox" onChange={handleSkills} id="NODE" value="NODE" />
            <label htmlFor="NODE">NODE</label>
            <br /><br />

            <input type="checkbox" onChange={handleSkills} id="REACT" value="REACT" />
            <label htmlFor="REACT">REACT</label>
            <br />

            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default CheckBox