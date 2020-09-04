import React,{useState} from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import navCSS from './customNav.module.css'
import CustomNavigation from './Navigation'
import RefreshIcon from '@material-ui/icons/Refresh';
import Link from "next/link"
import Button from '@material-ui/core/Button'

const PdfViewer = (props) => {
    
        console.log("pdf width"+ props.width);
        
        const scale = (props.width>1000)?1.42:1;


        

            return (
                <div >
                    <Link href="/redirectHome" >
                    <Button size="small" variant="contained"  
                        style={{ background:"dodgerblue", color:"white", 
                        position:"absolute", fontSize:14,
                        marginLeft:0,marginTop:5}} 

                        startIcon={<RefreshIcon />}
                        > Refresh </Button>
                    </Link>
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



