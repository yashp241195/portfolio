import React from 'react'
import PdfViewer from '../PDFViewer/pdfViewer'
import QuestionData from '../DataStatic/QuestionsData'

const Questions = () => {

    return (
        <div>
            <div style={{ position:"absolute", width:"63%"}}>
                <div style={{fontFamily:"Lucida Console",
                fontSize:18,color:"white", float:"right",
                background:"green",padding:5
                }}>
                    <b>Question Answers</b>
                </div>
            </div>
            <PdfViewer width={1200} pdfUrl={QuestionData.qaUrl} />
        </div>
    )
}

export default Questions;


