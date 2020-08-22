import React, {createContext, useState} from 'react'
import {SharedVariables} from './SharedVariables'

const SharedWrapper = (props) => {

    const [info, setInfo] = useState({ showQuestionAnswer:true,});

    return (
        <div>
            <SharedVariables.Provider value={{info, setInfo}}>
                {props.children}
            </SharedVariables.Provider>
        </div>
    )
}

export default SharedWrapper;
