import { Button ,Paper} from '@mui/material';
import React, { useEffect,useState } from 'react';
import './quiz.css';
import axios from 'axios';

const Quiz = () => {
    const [array, setArray] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3001/quizes")
          .then((response) => {
            setArray(response.data);
          })
          .catch((error) => {
            console.error("error");
          });
        }, []);
        
        let [submitcount,setsubmit]=useState(0);
        let [selected,setselected]=useState("");
        const [score,setScore]=useState(0);
    let [col,setcol]=useState("");
    let [col1,setcol1]=useState("");
    let [col2,setcol2]=useState("");
    let [col3,setcol3]=useState("");
    let [col4,setcol4]=useState("");
    const sel=()=>{
        setcol("grey");
    }
    
    
    return (
        <>
        <h1 className='score'>SCORE : {score}</h1>
        <Paper elevation={5}className='quizz' >
            {/* <div class="wave"></div> */}
     
        <div > 
            <h1 className='question'>{array.length > 0 ? array[submitcount].question : 'Loading...'}</h1>
            <div className='option' >

            <Button className='option1' 
            
            onClick={()=>{
                setselected("opt1");
                setcol1("grey");
                setcol2("");
                setcol3("");
                setcol4("");
            }}
            variant='text' sx={{color:'black', backgroundColor:col1,textAlign:'left'
            ,'&:hover': {
                backgroundColor:col1 // Change to the desired hover color
            }}}>1.  {array.length > 0 ? array[submitcount].option1 : 'Loading...'}</Button>



            <Button className='option2' 
             onClick={()=>{
                 setselected("opt2");
                 setcol1("");
                 setcol2("grey");
                 setcol3("");
                 setcol4("");
             }}
             variant='text' sx={{color:'black', backgroundColor:col2
             ,'&:hover': {
                 backgroundColor:col2, // Change to the desired hover color
                }}}>2.    {array.length > 0 ? array[submitcount].option2 : 'Loading...'}</Button>



            <Button className='option3'
            onClick={()=>{
                setselected("opt3");
                
                 setcol1("");
                 setcol2("");
                 setcol3("grey");
                 setcol4("");
                
            }}
             variant='text' sx={{color:'black', backgroundColor:col3
             ,'&:hover': {
                 backgroundColor:col3, // Change to the desired hover color
                }}}>3.  {array.length > 0 ? array[submitcount].option3 : 'Loading...'}</Button>
            
            
            
            
            
            <Button className='option4'
            onClick={()=>{
                setselected("opt4");
                 setcol1("");
                 setcol2("");
                 setcol3("");
                 setcol4("grey");
                }}
                variant='text'size="medium" v sx={{color:'black', backgroundColor:col4
                ,'&:hover': {
                    backgroundColor:col4, // Change to the desired hover color
            }}}>4.  {array.length > 0 ? array[submitcount].option4 : 'Loading...'}</Button>

            </div>
            <Button type='submit' variant='contained'  
            onClick={()=>{
                setcol1("");
                setcol2("");
                setcol3("");
                setcol4("");
                setselected("");
                if(submitcount<array.length-1)
                {
                    setsubmit(submitcount+1);
                }
                
                if(array.length>0)
                {
                    // console.log(array.answer);
                    if(array[submitcount].answer===selected)
                    {
                        setScore(score+1);
                    }
                }
            }}
            sx={{backgroundColor:'black',marginTop:"25px",marginLeft:"2%"}}>submit</Button>
        </div>
        </Paper>
            </>
    );
}

export default Quiz;
