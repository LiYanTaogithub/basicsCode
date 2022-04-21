class Scheduler {
    constructor(maxNum){
        this.taskList = [] // 存放还未运行的异步
        this.count = 0;
        this.maxNum = maxNum;
    }
    async add(fn){
        this.count >= this.maxNum ? await new Promise((resolve) => { this.taskList.push(resolve)}) : "";
        this.count ++;
        const result = await fn();
        this.count --;
        if(this.taskList.length > 0){
            this.taskList.shift()();
        }
        return result;
    }
}


const scheduler = new Scheduler(3)

const asyncFactory = (n, time) =>{
    return () =>{
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(n);
            }, time)
        })
    }
}

scheduler.add(asyncFactory(1, 2000)).then ((n) => {
    console.log(`异步任务: ${n}`)
})