

const DB = {
    usrs: [
      {
        "usrname": "raghad",
        "password": "raghad99",
        "tags": ['car','cat'],
      },
    ]
}

/*

localStorage.clear()
localStorage.setItem("users",JSON.stringify([]))

*/



// const addNewUser=(name,pass)=>{

// let newUser={name:name,password:pass}
// let oldStorage=JSON.parse(localStorage.getItem('users'))

// // set the new local storage
// localStorage.setItem('users',JSON.stringify([...oldStorage,newUser]))
// }



export default DB;