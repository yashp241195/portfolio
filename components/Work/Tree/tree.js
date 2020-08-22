import React, {useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {SharedVariables} from '../../Shared/SharedVariables' 
import WorkMap from '../../DataStatic/WorkMap'




const Tree = () => {

    const [ workType,setWorkType] = useState('project');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const {info,setInfo} = useContext(SharedVariables);


    const handleListItemClick = (event, index) => {
        const details  = (workType=="project")?WorkMap.project.array[index]: WorkMap.blog.array[index]; 
        setInfo({
            type: workType,
            index: index,
            name: details.name,
            obj: details
        });
        setSelectedIndex(index);
    };

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
                <br/>
                <Grid container spacing={1} > 
                <List component="nav" style={{
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 400}}
                    >
                    {
                        (workType == 'project')?
                            WorkMap.project.array.map((item, index)=>{
                                
                                const heading = item.name;
                                const subheading = item.desc;
                                const image = item.imageUrl;

                                return(
                                    <ListItem
                                    style={{ background:"white", border:(selectedIndex === index)?"1px solid":"white"}}
                                    button
                                    selected={ selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                    >
                                    <Grid xs={12}>
                                        <Paper style={{padding:10}}>
                                            <center>
                                                <span style={{fontSize:14,fontFamily:"monospace"}} >
                                                    <b>{heading}</b>
                                                </span>
                                                <br/>
                                                <img src={image} height="80" width="80" />
                                                <div style={{fontSize:13}} >{subheading} </div>
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
                                    style={{ background:"white", border:(selectedIndex === index)?"1px solid":"white"}}
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
                                                    <div>
                                                        {subheading}
                                                    </div>
                                                </center>
                                            </Paper>
                                        </Grid>
                                    </ListItem>
                                );   
                            })

                    }
                    </List>
                </Grid>

                <br/>
        </div>
    )
}

export default Tree;
