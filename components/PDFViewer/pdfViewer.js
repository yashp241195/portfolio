import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import navCSS from './customNav.module.css'
import CustomNavigation from './Navigation'

const PdfViewer = (props) => {

    
    return (
        <div >
            <PDFViewer
            scale={1.4}
            scaleStep={0.5}
            css={navCSS.customViewer}
            canvasCss={navCSS.customCanvas}
            navigation={CustomNavigation}
            document={{
                url: props.pdfUrl,
            }}
            />
        </div>
    )
}

export default PdfViewer;
