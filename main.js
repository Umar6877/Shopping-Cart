let users = [
      {fName : "Muhammad", lName : "Umar"},
      {fName : "Muhammad", lName : "Umiar"},
      {fName : "Muhammad", lName : "Uzair"},
      {fName : "Muhammad", lName : "Ammar"},
]

let newArr = users.map(function(x){
      let {fName,lName} = x
      return `${fName} ${lName}`
})