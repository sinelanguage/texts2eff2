module.exports = async function testAsyncAwait() {
    try {
        const start = new Date();
        await new Promise(
            (res,rej) => setTimeout(() => {
                res(
                    console.log("DONE")
                )
            }, 5000)
        )
        const responseTime = new Date() - start;
        console.log('Response Time: ', responseTime);
    } catch(err) {
        console.log('Error: ', err.message);
    }
}