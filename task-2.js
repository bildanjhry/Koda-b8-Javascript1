const we = {
  are:{
    the:{
        best:"Koda"
    }
  }

}

const hello = {
    world:"Hello World"
}

const obj = {
    str:[undefined, undefined, undefined, [
        undefined,[
            undefined, undefined, {
                man:[{
                    tech:{
                        academy: "Tech Academy"
                    }
                }]
            }
        ]
    ]]
}


const my = [{
    favourite:[undefined, undefined, undefined, {
        fruit: {
            is:"Apple"
        }
    }]
}]


const num = {
    first: [undefined, 10],
    second: [undefined, undefined, 22]
}

console.log(we.are.the.best)
console.log(hello.world)
console.log(obj.str[3][1][2].man[0].tech.academy)
console.log(my[0].favourite[3].fruit.is)
console.log(num.first[1] + num.second[2])