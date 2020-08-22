import React,{useEffect} from 'react'
import Router from 'next/router'

const RedirectHome = () => {

    // made especially to reload and clear the components state
    // without breaking the whole page.. very very important
    useEffect(()=>{
        Router.push('/')
    })

    return (
        <div>        
        </div>
    )
}

export default RedirectHome;
