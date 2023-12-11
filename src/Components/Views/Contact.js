import React,{useState} from "react";


function Contact (){
const [inputFields, setInputFields] = useState({
    name:"",
    email:"",
    subject:""
});
const [errors, setErrors] = useState({});

const handleChange = (e) =>{
    setInputFields({...inputFields,[e.target.name]: e.target.value});
}


const validateValues = (inputFields) =>{
    let errors = {};
    if(!inputFields.email){
        errors.email = "Email is required."
    }
    if(inputFields.email.length >20){
        errors.email = "Email is too log";
    }
    if (!inputFields.name){
        errors.name = "Name is required.";
    }
    if(inputFields.name.length > 20){
        errors.name = "Name is too long";
    }
    if(!inputFields.subject){
        errors.subject = "Subject is required.";
    }
    if(inputFields.subject.length > 160){
        errors.subject = "Subject is too long";
    }

    return errors;
}


const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validateValues(inputFields));
   
}

    return(
   
          <div className="container-fluid mx-auto  p-5 ">
<div className="flex flex-col mt-10 justify-center items-center">
    <h1 className="text-3xl">Have in mind a project?</h1>
     <h1 className="text-lg mt-5">Fill the form and i'll reach out to you soon!</h1>
</div>  

<form onSubmit={handleSubmit} action="#" method="POST">
    <div className="flex flex-col mt-10">
         <label htmlFor="name">Name *</label>
        <input className="border mt-5" type="text" name="name" id="name" value={inputFields.name} onChange={handleChange}  />
{errors.name && <div className="text-red-500">{errors.name}</div>}
    </div>

      <div className="flex flex-col mt-5">
         <label htmlFor="email">Email *</label>
        <input className="border mt-5" type="email" name="email" id="email" value={inputFields.email}onChange={handleChange} />
       {errors.email && <div className="text-red-500">{errors.email}</div>}
    </div>


     <div className="flex flex-col mt-10 ">
         <label htmlFor="email">Subject *</label>
   
        <textarea rows="4" cols="20" id="subject" name="subject" value={inputFields.subject} onChange={handleChange} className="block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
      
    </div>
    { <div className="text-red-500">{errors.subject}</div>}
    <div>
        <button className="mt-10 bg-blue-300 text-lg font-semibold text-white p-3 w-60">Submit</button>
    </div>

    

   
</form>
    
    </div>
 
    )
}
export default Contact;