import React,{useState} from "react";

const SimpleForm = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender,setGender] = useState('');
    const [error ,setError] = useState({});
    const [country, setCountry] = useState('');


    const handleClick = (e) =>{

        const value = e.target.value;        

        if (value === "male"){            
            setGender("male");
        }else{
            setGender("female");
        }
    }

    const handleChange = (e) =>{

        const name = e.target.name;
        const value = e.target.value;

        console.log(name);
        console.log(value);

        if(name === "name"){
            setName(value);
        }else if(name === "email"){
        setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }            
        
        if(value === "Indian"){            
            setCountry(value);
        }else if(value === "NRI"){
            setCountry(value);            
        }else{
            setCountry(value);
        }
    }
    
   const validateInput = () =>{

    const errors = {}
    const nameRegx = /^[a-zA-Z\s]{3,}$/;
    const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if(!name){
        errors.name = "Name is Required";        
    }else if(!nameRegx.test(name)){
        errors.name = "Minimum 3 characters Required";
    }

    if(!email)
    {
        errors.email = "Email is Required";
    }else if(!emailRegx.test(email)){
        errors.email = "Email is not Valid"
    }

    if(!password){
        errors.password = "Password is Required";        
    }else if(!passwordRegx.test(password)){
        errors.password = "Enter Valid Password";
    }

    if(gender === '')
    {
        errors.gender = "Select any 1 Gender";
    }

    console.log(country);
    if(country === "No Select")
    {
        errors.country = "Select any 1 Country";
    }

    return errors;
   }

   const handleSubmit = (e) =>{

    e.preventDefault();
    const validateErrors = validateInput();

    if(Object.keys(validateErrors).length === 0){
        alert("Form Submitted Successfullly");
        setName('');
        setEmail('');
        setPassword('');
        setGender('');
        setError({});
        setCountry('');
    }else{
        setError(validateErrors);
    }

   }


   

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Simple Form</h1>
                <div>
                    <label>Name </label>
                    <input type="text" name="name" value={name} onChange={handleChange}/>
                    {error.name && <p style={{color:"red"}}>{error.name}</p>}
                </div>
                <div>
                    <label>Email </label>
                    <input type="text" name="email" value={email} onChange={handleChange}/>
                    {error.email && <p style={{color:"red"}}>{error.email}</p>}
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                    {error.password && <p style={{color:"red"}}>{error.password}</p>}
                </div>
                <div>
                    <label>Gender : </label>
                    <label>Male</label>
                    <input type="radio" name="gender" value="male" onClick={handleClick}/>
                    <label>Female</label>
                    <input type="radio" name="gender" value="female" onClick={handleClick} />
                    {error.gender && <p style ={{color: "red"}}>{error.gender}</p>}
                </div>
                <div>
                    <label>Country :</label>                    
                    <select  onClick={handleChange}>
                        <option value="No Select">No Select</option>                        
                        <option value="Indian">INDIA</option>
                        <option value="NRI">NRI</option>
                        {error.country && <p style={{color: "red"}}>{error.country}</p>}
                    </select>
                </div>
                <div>
                    <button type="Submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default SimpleForm;