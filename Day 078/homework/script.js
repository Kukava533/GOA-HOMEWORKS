const a [
    [[1,2,3]]
    [[4,5,6]]
    [[7,8,9]]
]
    

  


const b = [];

a.array.forEach((row, i)=>{
    row.forEach((col,j )=> {
        // check if same array element exist in list
        b[j].push(col)
        //push data in that element

    })
})

console.log(b)