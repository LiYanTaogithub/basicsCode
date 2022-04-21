// 实现一个流程控制函数, 使得若干任务按照顺序执行，且每个任务的返回结果都将传给下一个任务。
// 如果中途出错，后面的任务则不会被执行，并返回当前执行结果。

/**
 * waterfall([
        function(callback) {
            callback(null, 'one', 'two');
        },
        function(arg1, arg2, callback) {
            // arg1 now equals 'one' and arg2 now equals 'two'
            callback(null, 'three');
            // callback('err', 'three');  => 结果 'err', 'three'
        },
        function(arg1, callback) {
            // arg1 now equals 'three'
            callback(null, 'done');
        }
    ], function (err, result) {
            // result now equals 'done'
    });
 */

function waterfall(tasks, callback){

    let taskIndex = 0
    function nextTask(args){
        console.log('args', args)
        let task = tasks[taskIndex++]
        task(...args, next)
    }

    function next(err, ...args){
        console.log(err, args)
        if(err || taskIndex === tasks.length){ 
            return callback(err, ...args)
        }
        nextTask(args)
    }
    nextTask([])
}

waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
        // callback('err', 'three');  => 结果 'err', 'three'
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
        // result now equals 'done'
        console.log(err, result)
});


