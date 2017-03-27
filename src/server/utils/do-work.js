const fetch = require('node-fetch');

module.exports = async function doWork() {
    try {
        let res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json().then(data => console.log("RES1: ", /*data*/)));
        let res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json().then(data => console.log("RES2: ", /*data*/)));
        return {res1, res2}
    } catch (err) {
        console.log(err.message);
    }

};