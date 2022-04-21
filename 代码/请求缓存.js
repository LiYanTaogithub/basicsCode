catchRequest('url',{option: 'get'}).then((res) => {
    console.log(res)
} )

const request = (url, option) => {
    new Promise((res) => {
        setTimeout(() =>{
            res({data: option})
        }, 2000)
    })
}

const catchMap = new Map()
const catchMapRequest = (url, option) => {
    let key = `${url}:${option.method}`
    if(catchMap.has(key)){
        console.log('从缓存中获取')
        if(catchMap.get(key).status === 'pending'){
            return catchMap.get(key).myWait
        }
        return Promise.resolve(catchMap.get(key).data)
    }else{
        console.log('发请求')
        let requestApi = request(url, option)
        catchMap.set(key, {status: 'pending', myWait: requestApi})
        return requestApi.then((res) =>{
            catchMap.set(key, {status: 'success', data: res})
            return Promise.resolve(res)
        })
        .catch((err) =>{
            catchMap.set(key, {status: 'fail', data: err})
            return Promise.reject(err)
        })
    }
}