import React,{useState,useContext,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import Tree from '../Work/Tree/tree'
import Footer from '../Footer/footer'
import Content from '../Work/Content/content'
import {SharedVariables} from '../Shared/SharedVariables'

import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';



const useStyles =  makeStyles((theme)=>({
    root:{},
    card : {
        height: '400px'
    },
    paper: {
        padding: theme.spacing(1),
        align:"center",
        height:'380px',
        marginTop:'2px',
        color: theme.palette.text.secondary,
      },
    profilepic:{
        padding: theme.spacing(1),
        height:'100px',
        width:'100px',
        borderRadius:'50%'
    }

}));

function HackerrankIcon(props) {
    return (
      <SvgIcon viewBox="0 0 32 32" {...props}>
        <path 
        
        d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 
        C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 
        17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 
        26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 
        10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"
        
        />
      </SvgIcon>
    );
};
function QuoraIcon(props) {
    return (
      <SvgIcon viewBox="0 0 32 32" {...props}>
        <path 
        
        d="M 15.492188 4 C 10.201187 4 5 8.2304531 5 14.439453 C 5 21.556453 11.968844 26.19875 18.214844 24.46875 C 19.260844 26.25175 20.638625 28 23.265625 28 C 27.606625 28 28 24 28 23 L 26.445312 23 C 
        26.365313 23.716 25.877594 24.457031 24.683594 24.457031 C 23.595594 24.457031 22.810641 23.704594 22.056641 22.558594 C 24.402641 20.743594 25.949219 17.9135 25.949219 14.4375 C 25.954219 8.2025 20.894188 
        4 15.492188 4 z M 15.492188 6 C 19.536188 6 21.261719 8.9094531 21.261719 14.439453 C 21.266719 16.657453 20.973047 18.450484 20.373047 19.771484 C 19.338047 18.221484 18.054578 17.001953 15.517578 17.001953
         C 13.898578 17.001953 12.792719 17.473344 12.011719 18.152344 L 12.658203 19.443359 C 12.987203 19.284359 13.193688 19.289062 13.554688 19.289062 C 15.438688 19.289062 16.404562 20.924969 17.226562 22.542969
          C 16.695563 22.701969 16.126234 22.765625 15.490234 22.765625 C 11.510234 22.765625 9.7851563 19.952219 9.7851562 14.449219 C 9.7861563 8.9082188 11.512187 6 15.492188 6 z"
 
        />
      </SvgIcon>
    );
};
 

const Overview = () => {

    const classes = useStyles();


    const profileInfo = {
        name : "Yash Pratap",
        profileImage: "https://greennewz.files.wordpress.com/2014/08/portrait_of_pablo_picasso_1908-1909_anonymous_photographer_musc3a9e_picasso_paris.jpg?w=381",
        about : "Software Engineer ",
        desc : 
            [   
                {head : "Web (FullStack)", tech :"React JS, Next JS, Material UI, Redux JS, Hooks, Node JS, Express JS (REST API), MongoDB, MySQL, Git"},
                {head : "Entrepreneurial", tech :"Product development (communication problems to information systems), historical understanding of software industry, human behaviour, civilisations and philosophy"},
                {head : "Others ", tech :"Meditation (I use meditation to develop skills efficiently and understanding regarding human behaviour), Writing (English/Hindi), Mathematics, Story Telling, Typing, drawing "},
                {head : "Others (Technical) ", tech :""},
                {head : "(i) more frequently used ", tech :"UI/UX, Python, DS/Algo/DBMS, Testing "},
                {head : "(ii) less frequently used ", tech :"Android, React Native, PHP, Java, C++, Selenium, ML/AI,Computer Graphics"},
                {head : " ", tech :""},

            ]
        ,social:[
            {icon: <LinkedInIcon />, label:"LinkedIn", url :"https://www.linkedin.com/in/yash-pratap-90b6b9189/"},
            {icon: <GitHubIcon />, label:"Github", url :"https://github.com/yashp241195"},
            {icon: <HackerrankIcon />, label:"Hackerrank", url :"https://www.hackerrank.com/yashp241195?hr_r=1"},
            // {icon: <QuoraIcon />, label:"Quora", url :"https://www.quora.com/profile/Yash-Pratap-50"},
            // {icon: <InstagramIcon />, label:"Instagram", url :"https://www.instagram.com/yashp2411"},

        ],
        

    };

    const buttonGroup = {
        responseButton:{icon:<QuestionAnswerIcon />,label:"Question Answers"},
        contactButton:{icon:<ContactSupportIcon />,label:"Submit Your Query"},
        resumeButton :{icon:<PictureAsPdfIcon />,label:"Resume "}
    };
       
    const {info,setInfo} = useContext(SharedVariables);

    
    useEffect(() => {
        console.log(`content changed .. index ${info.index} d : ${info.disabled} `);
        return () => {
            
        }
    }, [info.index]);
    

    return (
        <div>
            <Grid className={classes.root} container spacing={1}>
                <Grid style={{ marginLeft:-15}} className={classes.card} item xs={2}>
                    <Card style={{height:540, width:230}} className={classes.paper}>
                        <center>
                            <CardMedia
                                className={classes.profilepic}
                                component="img"
                                alt={profileInfo.name}
                                image={profileInfo.profileImage}
                                title={profileInfo.name}
                            />
                        </center>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                <span style={{color:"black", fontFamily:"sans-serif", textDecoration: "none"}} >  
                                    <center>
                                        <b>{profileInfo.name}</b>
                                        <br/>
                                        <b><span style={{fontSize:14}} >{profileInfo.about}</span></b>
                                    </center> 
                                    {
                                        profileInfo.social.map((item,index)=>{
                                            return(
                                                <a key={index} style={{color:"gray",textDecoration: "none"}} 
                                                target="_blank" href={item.url}>
                                                    <Chip size="small" avatar={item.icon} label={item.label} variant="outlined" />
                                                </a>
                                            );
                                        })
                                    }
                                    <br/>  
                                    <div style={{marginTop:10}} ></div>

                                    <Typography align='left' variant="body2">
                                    <div style={{ overflow:'auto', height:300,  fontSize:11}}>
                                       {
                                        profileInfo.desc.map((item, index)=>{
                                           return (
                                            <div key={index}>  
                                                <b><span style={{fontSize:14,fontFamily:"monospace"}}>{item.head}</span></b>
                                                <br/>
                                                <span style={{fontSize:12}}>{item.tech}</span>
                                           </div>
                                           );
                                        })
                                       }                                   
                                    </div> 
                                    </Typography>
                                </span>
                                <br/>
                            </Typography>                            
                        </CardContent>
                        <div style={{marginTop:10}} ></div>

                    </Card>
                </Grid>
                
                <Grid item xs={2}>
                    <Card style={{overflow: 'auto',height:90, color:"black", marginBottom:5}} className={classes.paper}>
                        <Button
                            style = {{width:"100%",textTransform: "none"}}
                            size="small"
                            variant="outlined"
                            color="gray"
                            className={classes.button}

                            onClick={()=>{
                                setInfo({
                                    showSubmitQuery:true,
                                })
                            }}

                            endIcon={buttonGroup.contactButton.icon}
                        >
                            {buttonGroup.contactButton.label}
                            <span style={{flexGrow:1}}></span>
                        </Button>
                        <br/>
                        <Button
                            style = {{width:"100%",textTransform: "none"}}
                            size="small"
                            variant="outlined"
                            color="gray"
                            className={classes.button}

                            onClick={()=>{
                                setInfo({
                                    showQuestionAnswer:true,
                                })
                            }}

                            endIcon={buttonGroup.responseButton.icon}
                        >
                            {buttonGroup.responseButton.label}
                            <span style={{flexGrow:1}}></span>
                        </Button>
                        <br/>
                        <Button
                            style = {{width:"100%",textTransform: "none"}}
                            size="small"
                            variant="outlined"
                            color="gray"
                            className={classes.button}
                            endIcon={buttonGroup.resumeButton.icon}
                            onClick={()=>{
                                setInfo({
                                    showResume:true,
                                    resumeUrl:"https://arxiv.org/pdf/quant-ph/0410100.pdf"
                                })
                            }}
                        >
                            {buttonGroup.resumeButton.label}
                            <span style={{flexGrow:1}}></span>
                        </Button>
                    </Card>
                    <Card style={{height:430,background:"white"}} className={classes.paper}>
                        <Tree></Tree>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                <Card style={{height:540}} className={classes.paper}>
                    <Content></Content>
                </Card>
                </Grid>
                <Grid item xs={12}>
                <div style={{height:20}} >
                    <Footer></Footer>
                </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Overview;

