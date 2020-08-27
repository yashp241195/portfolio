import React from 'react'
import PdfViewer from '../PDFViewer/pdfViewer'
import ResumeData from '../DataStatic/ResumeData'

const Resume = () => {



    return (
        <div>
            <div style={{ position:"absolute", width:"63%"}}>
                <div style={{fontFamily:"Lucida Console",
                fontSize:18,color:"white", float:"right",
                background:"#800000",padding:5
                }}>
                    <b>Resume Yash Pratap</b>
                </div>
            </div>
            <PdfViewer width={1200} pdfUrl={ResumeData.resumeUrl} />
        </div>
    )
}

export default Resume;