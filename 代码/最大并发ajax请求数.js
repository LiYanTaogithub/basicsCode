// 2、实现最大并发可配置的请求类AjaxPool, 保证最大并发ajax请求数不超过maxNum，后续请求需要等待maxNum中任意一个请求完成
// const ap = new AjaxPool(maxNum);
// ap.ajax({ url, data, cb });
// ap.ajax({ url, data, cb });

function AjaxPool(max){
    this.pool = [];
    this.queue = [];
    this.max = max;
}

AjaxPool.prototype.ajax = function(url, data){
    if(this.pool.length < this.max){
        let requestId = Symbol('ajax_pool')
        this.pool.push(requestId)
        return axios.post(url, data).finaly(() =>{
            this.pool.splice(this.pool.indexOf(requestId), 1)
            if(this.queue.length > 0){
                let item = this.queue.shift()
                this.ajax(item.url, item.data).finaly(()=>{
                    item.resolve()
                })
            }
        })
    }else{
        return new Promise( resolve =>{
            this.queue.push({
                url: url,
                data: data,
                resolve: resolve
            })
        })
    }
}