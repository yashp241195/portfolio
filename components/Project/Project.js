import React from 'react'
import PdfViewer from '../PDFViewer/pdfViewer'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Chip from '@material-ui/core/Chip';

const Project = (props) => {


    const [type, name, index, pdfUrl, buttonGroup] = props.vals;

    
    return (
        <div>
            <div style={{ position:"absolute",width:'63%'}}>
                
                <div style={{fontFamily:"Lucida Console",
                fontSize:18,color:"white", float:"left",
                background:(type == "project")?"DodgerBlue":"orange",padding:5,
                textTransform:"capitalize"}} >
                
                 <b>   {type} {index+1} </b>
                
                </div>

                <div style={{fontFamily:"Lucida Console",
                fontSize:24,color:"white", float:"right",
                background:"#660066",padding:5
                }}>
                    <b>
                        <span style={{float:"right"}}>
                            {name} 
                        </span>

                    <span style={{fontSize:14}}>
                        {
                            (buttonGroup.length != 0)?
                            <>
                                <br/>
                                {buttonGroup.map((item,index) => {
                                    
                                    return (
                                        <a style={{textDecoration: "none"}} target="_blank" href={item.url} key={index}>
                                            <Chip label={item.title+' link '} size="small" key={index} 
                                            variant="outlined" style={{  color:'yellow', borderColor:'yellow'}}   
                                            />
                                        </a>
                                        )
                                    })
                                }
                            </>
                            :
                            ''
                        }
                    </span>
                    </b>

                </div>
            </div>
            <PdfViewer width={1200} pdfUrl={pdfUrl} />
        </div>
    )
}

export default Project;