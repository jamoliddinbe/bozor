
// Jasur aka bergan misollar

function magazine(...params){
   
    for(let i =0 ;i<params.length; i++){
      let newobj = {}
      newobj.id = params[0]
      newobj.namee = params[1]
      newobj.age = params[2]
    } 
   return params
}

let user =  magazine('olma', 'banan','olma', 'nok', 'banan')

// birinchi usul

const uniqueArray = [... new Set(user)]

//ikkinchi usul

// const uniqueArray = Array.from (new Set(user))

//uchichi usul

// const uniqueArray = user.filter ((item, index) => {
//  return index === user .indexOf(item);
// })


console.log(uniqueArray);