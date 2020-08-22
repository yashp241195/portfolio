import React from 'react'
import PdfViewer from '../PDFViewer/pdfViewer'


const Project = (props) => {

    const [type, name, index, pdfUrl] = props.vals

    return (
        <div>
            <div style={{ position:"absolute", width:"63%"}}>
                
                <div style={{fontFamily:"Lucida Console",
                fontSize:18,color:"white", float:"left",
                background:(type == "project")?"DodgerBlue":"orange",padding:5,
                textTransform:"capitalize"}} >
                
                 <b>   {type} {index+1} </b>
                
                </div>

                <div style={{fontFamily:"Lucida Console",
                fontSize:18,color:"white", float:"right",
                background:"#660066",padding:5
                }}>
                    <b>{name}</b>
                </div>
            </div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    )
}

export default Project;