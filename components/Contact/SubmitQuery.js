import React,{useState, useEffect,useRef} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const queryType = [
    {
      value: 'askQuestion',
      label: 'Ask Question',
    },
    {
      value: 'feedback',
      label: 'Give Feedback',
    },
    
  ];

const SubmitQuery = () => {

    const [selectedQueryType, setQueryType] = useState('askQuestion');
    const [isSubmit, setSubmit] = useState(false);

    const [tryAgain , setTryAgain] = useState('');

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const [error, setError] = useState({
      name:false,
      email:false,
      desc:true,
    });

    const submit_query_form = {
      action_url : "https://script.google.com/macros/s/AKfycbwCk27KH6tD6su_-gltEC4i3Y4Rq6oSgjmJxbmswwzw58PhMIU/exec",
      
    };

    // when anything change update the error object
    useEffect(()=> {
      setError(
        {
         name : false,
         email : false,
         desc :  true
        }
      ); 
    }, [name,email,desc]);

  

    const FormContentType = {
      Email:"email",
      Name: "name",
      TextArea:"TextArea" 
    }

    const isInValid = (type,value) =>{
      switch(type){
        case FormContentType.Name:
          return (value.length == 0)
        case FormContentType.Email:
          return (value.length == 0)
        case FormContentType.TextArea:
          return (value.length == 0)
        default:
          return (value.length == 0)
      }
    }

    const handleSubmit = () =>{

      setError(
        {
         name : isInValid(FormContentType.Name,name),
         email : isInValid(FormContentType.Email,email),
         desc :  isInValid(FormContentType.TextArea,desc)
        }
      ); 

      const isValid = (!error.name && !error.email && !error.desc);
      

      console.log("isValid : "+isValid);
      let formData = new FormData();

      formData.append('Name',name);
      formData.append('Email',email);
      formData.append('description',desc);
      formData.append('type',selectedQueryType);

      const config = {     
          headers: { 'content-type': 'multipart/form-data' }
      }

      if(isValid){
        console.log(` posting your data ..  `);
        setTryAgain('wait..')
        axios.post(submit_query_form.action_url, formData, config)
        .then(response => {
            console.log(response);
        }).then(()=>{
          setSubmit(true);
          
        })
        .catch(error => {
            console.log(error);
        });

      }else{
        setTryAgain('try again, submit again ..')
        console.log("try again");
      }
    
    };

    const classes = useStyles();

    return (
        <div style={{marginLeft:100}}>
          {(isSubmit)?<>          
            <h2>Form submitted successfully</h2>
            <br/>
            <Link href="/redirectHome" >
                <a>Click here</a>
            </Link>
            <p> to get back to home page </p>
          </> : 
          <>
          <h2 style={{color:"black",fontFamily:"monospace",marginLeft:50}}> Submit Your Query</h2>
            <form className={classes.root} noValidate autoComplete="off">
                
                <TextField error={error.name} 
                helperText={error.name?"Invalid Name":""} 
                id="Name" label="Name" name="Name" 
                onChange={event => setName(event.target.value)}
                variant="outlined" />

                <TextField error={error.email}
                helperText={error.email?"Invalid Email":""} 
                id="Email" label="Email" name="Email"
                onChange={event => setEmail(event.target.value)}
                variant="outlined" />
                <br/>
                <TextField
                    name="type"
                    id="outlined-select-currency"
                    select
                    label="Query"
                    value={selectedQueryType}
                    onChange={event => setQueryType(event.target.value)}
                    variant="outlined"
                    >
                    {queryType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br/>
                <p style={{color:"green"}}>{desc.length==0?"Please express .. ":"" } </p>
                <TextareaAutosize
                  onChange={event => setDesc(event.target.value)}
                  error={error.desc}
                  helperText={error.desc?"Invalid Description":""} 
                  name="description"
                  rowsMax={14}
                  style={{width:"450px",height:"100px"}}
                  aria-label="maximum height"
                  placeholder="Describe the problem/feedback upto 14 lines"
                  defaultValue=""
                />
                
              <br/>
              <p style={{color:(tryAgain=="wait..")?"green":"red"}} >{tryAgain}</p>
              <br/>
              <Button disabled={false} onClick={handleSubmit} variant="outlined" color="primary">
                Submit
              </Button>

            </form>
            </>
            }
        </div>
    )
}

export default SubmitQuery;




