const groups = new Map ([
    ["Mercedes" , "W219"],
    ["BMW" , "E38"],
    ["Audi" , "RSQ8"],
    ["Porsche" , "Carrera GT"],
    ["Ferrari" , "812 superfast"]
    ])
    
    console.log(groups.size)

    const valuesArray = Array.from(groups.values());

    for(let i = 0; i<valuesArray.length; i++){
        console.log(valuesArray[i])
    }