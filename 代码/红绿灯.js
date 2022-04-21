let asyncCatch = (promise) => {
    return promise.then((res) =>{
        return {res, err: null}
    })
    .catch((err) => {
        return {res: null, err}
    })
}
let setColor = (color, delay) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log(color)
            resolve()
        }, delay)
    })
}
async function sett() {
    await asyncCatch(setColor('red', 3000))
    await asyncCatch(setColor('green', 2000))
    await asyncCatch(setColor('yellow', 1000))
    await asyncCatch(sett())
}

