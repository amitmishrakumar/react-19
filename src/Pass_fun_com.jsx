function Pass_fun_com({han,nam}) {
 
    return (
        <div>
            <h1>Pass_fun_com calleing. ... </h1>
            <button onClick={()=>han(nam)}>
                display user 
            </button>
         </div>
    )
}
export default Pass_fun_com 



// its is app component prrent


function App() {
    const HandleDisplay = (nam) => {
        alert(nam)
    }
      return (
        <div>
          <Pass_fun_com han={HandleDisplay} nam='am'/>
          <Pass_fun_com han={HandleDisplay} nam='sam' />
          <Pass_fun_com han={HandleDisplay} nam='brussh'/>
          <Pass_fun_com han={HandleDisplay} nam='pitter' />
        </div>
      )
    }