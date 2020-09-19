import React, {useState, useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {SharedVariables} from '../../Shared/SharedVariables' 
import WorkMap from '../../DataStatic/WorkMap'


const Tree = (props) => {

    const [ workType,setWorkType] = useState('project');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const {info,setInfo} = useContext(SharedVariables);


    const handleListItemClick = (event, index) => {
        const details  = (workType=="project")?WorkMap.project.array[index]: WorkMap.blog.array[index]; 
        
        setInfo({
            type: workType,
            index: index,
            name: details.name,
            obj: details,
            disabled: false
        });

        setSelectedIndex(index);

    };

    useEffect(() => {
        console.log("index changed ..");
        return () => {
        }
    }, [info.index]);

    const handleChange = (event)=>{
        setSelectedIndex(0);
        setWorkType(event.target.value);

        const details  = (event.target.value=="project")?WorkMap.project.array[0]: WorkMap.blog.array[0]; 
        setInfo({
            type: event.target.value,
            index: 0,
            name: details.name,
            obj: details
        });
    }

    const isHorizontal = props.orientation === "Horizontal";

    return (
        <div >
                <span style={{fontFamily:"monospace",color:"black"}}>
                    <Select  
                        style={{width:"100%"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={workType}
                        onChange={(event)=>handleChange(event)}
                    >
                        <MenuItem value={'project'}> Projects </MenuItem>
                        <MenuItem value={'blog'}> Blogs </MenuItem>
                    </Select>
                </span>
                <br/>
                <p style={{color:'green',fontSize:12}}>{(info.disabled)?'*** Please !! click on "CLOSE PDF" (Pink colored button on the PDF Viewer screen) button to continue':''}</p>
                <br/>
                <Grid container spacing={1}
                
                > 
                <List component="nav" style={{
                    display: 'flex',
                    flexDirection: (isHorizontal)?'row':'column',
                    position: 'relative',
                    overflow: 'auto',
                    width:'100%',
                    height: 400,
                }}
                    >
                    {
                        (workType == 'project')?
                            WorkMap.project.array.map((item, index)=>{
                                
                                const heading = item.name;
                                const subheading = item.desc;
                                const image = item.imageUrl;

                                return(
                                    <ListItem
                                    key={index}
                                    style={{

                                        marginBottom:20,
                                        background:(selectedIndex === index)?"yellow":"white", 
                                    border:(selectedIndex === index)?"1px solid":"white"}}
                                    button
                                    selected={ selectedIndex === index}
                                    disabled={ info.disabled }
                                    onClick={(event) => handleListItemClick(event, index)}
                                    >
                                    <Grid xs={12}>
                                        <Paper style={{padding:10}}>
                                            <center>
                                                <span style={{fontSize:14,fontFamily:"monospace"}} >
                                                    <b>{heading}</b>
                                                </span>
                                                <br/>
                                                {
                                                    (image != 'na.jpg')?
                                                    <img src={image} alt={""} height="80" width="80" />:''
                                                }
                                                
                                                <div style={{fontSize:12}} >{subheading} </div>
                                            </center>
                                        </Paper>
                                    </Grid>
                                    </ListItem>
                                );
                            })

                        :
                            WorkMap.blog.array.map((item,index)=>{
                                
                                const heading = item.name;
                                const subheading = item.subheading;

                                return(
                                    <ListItem
                                    disabled={ info.disabled }

                                    style={{
                                        marginBottom:20,
                                        background:(selectedIndex === index)?"yellow":"white", 
                                        border:(selectedIndex === index)?"1px solid":"white"}
                                    }
                                    button
                                    selected={ selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                    >
                                        <Grid xs={12}>
                                            <Paper style={{padding:10}}>
                                                <center>
                                                    <span style={{fontSize:14, fontFamily:"monospace"}}><b>{heading}</b></span>
                                                    <br/>
                                                    <br/>
                                                    <div style={{fontSize:12}} >
                                                        {subheading}
                                                    </div>
                                                </center>
                                            </Paper>
                                        </Grid>
                                    </ListItem>
                                );   
                            })

                    }
                    <br/>
                    </List>
                </Grid>

                <br/>
        </div>
    )
}

export default Tree;
