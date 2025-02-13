//1
const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(message => console.log(message));
//2
const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
});

task2.catch(error => console.error(error));
//3
const task3 = new Promise((resolve) => {
    resolve(5);
});

task3
    .then(number => {
        return number * 2;
    })
    .then(doubled => {
        console.log(doubled);
    });
//4
function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    });
}

task4()
    .then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
    })
    .then(message => {
        console.log(message);
    });
//5
function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 3 failed");
        }, 2000);
    });
}

task5().catch(error => console.error(error));
//6
function task6() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => {
            resolve("Task 1 complete");
        }, delay);
    });
}

task6().then(message => console.log(message));
//7
function task7() {
    return new Promise((resolve) => {
        const delay1 = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve("First");
        }, delay1);
    });
}

task7()
    .then(message => {
        console.log(message);
        return new Promise(resolve => {
            const delay2 = Math.floor(Math.random() * 3000) + 1000;
            setTimeout(() => resolve("Second"), delay2);
        });
    })
    .then(message => {
        console.log(message);
    });
//8
function task8() {
    return new Promise((_, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(() => {
            reject("Task 3 failed");
        }, delay);
    });
}

task8().catch(error => console.error(error));
//9
function task9() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve("Task 1 complete");
            } else {
                resolve("Task 1 was quick");
            }
        }, delay);
    });
}

task9().then(message => console.log(message));
//10
function task10() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.3) {
                reject("Task 3 failed");
            } else {
                resolve("Task 3 complete");
            }
        }, delay);
    });
}

task10()
    .then(message => console.log(message))
    .catch(error => console.error(error));
