function compose(funcs){
    if(funcs.length === 1) return funcs[0]()
    return funcs.reduce((a, b) => {
        return a(b(...args))
    });
}
import React, { useCallback, useEffect, useState } from 'react'
function usePageList(site){
    const [list, setList] = useState()
    const refreshPagelist = useCallback(() => {
        request().then(res => {
            setList(res.lst)
        })
    }, [site, setList])
    useEffect(() =>{
        refreshPagelist()
    }, [refreshPagelist])
    return [list,  refreshPagelist]
}