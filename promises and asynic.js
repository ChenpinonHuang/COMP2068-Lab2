console.clear();

//Promises
const washUp = () => {
    console.log("Wash your hands!!!");
}

const callMe = async name => {
    await new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`Time for dinner, ${name}!!!`);
            return resolve();
        }, 2000);
    })   
}

// setTimeout(name => {
//     console.log("Done like dinner.");

//     callMe(name);
// }, 2000, 'Ben');


// //Promises
// new Promise((resolve, reject) => {
//     setTimeout(name => {
//         console.log("Done like dinner");
//         resolve();
//     }, 2000);
// })
// .then(() => callMe('Ken'));


//Async/Await
const asyncFunc = async (name) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done like dinner");
            return resolve();
        });
    });

    await callMe(name);
    await washUp();
};

asyncFunc('Chengbin Huang');

(async () => {
    console.log("I'm iffy about IFFEs");
})();