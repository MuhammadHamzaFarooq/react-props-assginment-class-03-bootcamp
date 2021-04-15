import React from 'react';

function Student(props){
    return(
        <div>
            <h1>My name is {props.name}</h1>
            
            <h1>My Father is {props.fatherName}</h1>
            
            <h1>My Full Name  is {props.fullName}</h1>
        </div>
    )
}


export default Student;