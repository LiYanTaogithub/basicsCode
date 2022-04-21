function repeat(times, mills, func) {
    return function pass (...args) {
        let localTimes = times;
        let self = this;
            
        function execuse() {
            if (localTimes > 0) {
                setTimeout(() => {
                    func.apply(self, args);
                    localTimes--;
                    execuse();
                }, mills)
            }
        }
        execuse();
    }
}

let log3 = repeat(3, 1000, console.log);