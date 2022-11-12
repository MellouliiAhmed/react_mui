import React ,{useState} from "react";
import { Typography ,Button,Container,TextField, FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";









export default function Create(){
    const navigate =useNavigate();
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const [titleError,setTitleError]=useState(false);
    const [detailsError,setDetailsError]=useState(false);
    const [category,setCategory]=useState('todos')


    const handleSubmit= (e) =>{
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);


        if(title==''){
            setTitleError(true)
        }
        if(details==''){
            setDetailsError(true)
        }

        if(title,details){
            fetch("http://localhost:8000/notes",{
                method:'POST' ,
                headers:{"content-type":"application/json"},
                body:JSON.stringify({title,details,category})
                

            }).then(()=> navigate('/'))
        }
    }



    return(
        <Container>
            <Typography
        variant="h6"
        color='textSecondary'
        style={{marginBottom:5}}
        gutterBottom
        >Create a New Note</Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
            onChange={(e) =>setTitle(e.target.value)}
            label='Note title'
            color='secondary'
            variant='outlined'
            required
            fullWidth
            style={{marginTop:20,marginBottom:20,display:'block'}}
            error={titleError}
            />

            <TextField
            onChange={(e) =>setDetails(e.target.value)}
            label='Details'
            color='secondary'
            variant='outlined'
            required
            fullWidth
            style={{marginTop:20,marginBottom:20,display:'block'}}
            multiline
            rows={4}
            error={detailsError}
            />
            <FormControl style={{marginTop:20,marginBottom:20,display:'flex'}}>
                <FormLabel>Note Categories</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
                    <FormControlLabel value='money' label="Money" control={<Radio/>} />
                    <FormControlLabel value='todos' label="Todos" control={<Radio/>} />
                    <FormControlLabel value='reminders' label="Reminders" control={<Radio/>} />
                    <FormControlLabel value='work' label="Work" control={<Radio/>} />
                </RadioGroup>
            </FormControl>
            



            <Button
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<SendIcon/>}
        
         >SUBMIT</Button>
        </form>


        
        </Container>
             
            
        
           
            
        
    )
}