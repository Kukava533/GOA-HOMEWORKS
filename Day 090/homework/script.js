//1
function printStudentScores(studentScores) {
    studentScores.forEach((score, name) => {
        console.log(`${name}: ${score}`);
    });
}

//2
function removeDuplicateKeys(originalMap) {
    const newMap = new Map();

    originalMap.forEach((value, key) => {
        newMap.set(key, value);
    });

    return newMap;
}

//3
function copyAndIncreaseScores(originalMap) {
    const newMap = new Map();

    originalMap.forEach((score, name) => {
        newMap.set(name, score + 5);
    });

    return newMap;
}