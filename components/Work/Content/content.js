import React, {useContext} from 'react'
import {SharedVariables} from '../../Shared/SharedVariables' 
// import PdfViewer from '../../PDFViewer/pdfViewer'

import SubmitQuery from '../../Contact/SubmitQuery'
import Questions from '../../Questions/Questions'
import Resume from '../../Resume/Resume'
import Project from '../../Project/Project'


const content = () => {

    const {info,setInfo} = useContext(SharedVariables);

    return (
        <div>
                {(info.showResume?
                    <Resume></Resume>    
                    :
                    <></>
                    )
                }
                {(info.showSubmitQuery?
                    <SubmitQuery></SubmitQuery>  
                    :
                    <></>
                    )
                }
                {(info.showQuestionAnswer?
                    <Questions></Questions>
                    :
                   <></>)
                }
                <pre>
                {(info.type == 'project' || info.type == 'blog')? 
                <>
                {/* {JSON.stringify(info,null,2)} */}
                <Project vals={ [info.type, info.name, info.index, info.obj.pdfUrl]}></Project>
                
                </>
                :
                <></>}
                </pre>

        </div>
    )
}

export default content;
