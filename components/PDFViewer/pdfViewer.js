import React,{useState} from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import navCSS from './customNav.module.css'
import CustomNavigation from './Navigation'

const PdfViewer = (props) => {
    
        console.log("pdf width"+ props.width);
        
        const scale = (props.width>1000)?1.42:1;


        

            return (
                <div >
                    <PDFViewer
                        scale={scale}
                        scaleStep={0.25}
                        css={navCSS.customViewer}
                        canvasCss={navCSS.customCanvas}
                        navigation={CustomNavigation}
                        document={{
                            url: props.pdfUrl,
                            }}
                    />;
                </div>
            )
        
        
}



export default PdfViewer;



