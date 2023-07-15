
import './App.css';
import React,{useState} from 'react';

function App() {
  const [formValues, setFormValues] = useState({name:"", email:"", password:"", confirmPass:"", errorMsg:""})

  function formSubmit(event){
                event.preventDefault();

                if(formValues.name === "" || formValues.email ==="" || formValues.password ==="" || formValues.confirmPass ===""){    
                   setFormValues({...formValues, errorMsg: "Error : All the fields are mandatory" });
                  return;
                }
             
                if(formValues.password !== formValues.confirmPass){
                  setFormValues({...formValues, errorMsg: "Error : Password not matching" });
                 return;
                }
              
                setFormValues({...formValues, name:"", email:"", password:"", confirmPass:"", errorMsg: "Successfully Created!" })
             
          }

  return (
    <div className="App">
     <div className="left">
      <p className='text'>Find 3D Objects, Mockups and Ilustration here</p>
      <img src="logo.png" alt="" className="illustartion" />
     </div>
     <div className="right">
      <div className="main">
        <h1 className='heading'>Create Account</h1>
        <div className='social-login'>
          <a href="#" className='link'>
            <img src="search.png" alt="" />
            <span>Sign up with Google</span>
          </a>
          <a href="#" className='link'>
            <img src="facebook.png" alt="" />
            <span>Sign up with Facebook</span>
          </a>
        </div>
        <div className="or">- OR -</div>
        <div className="input-group">
        <input type="text" placeholder="Full Name" className='input' value={formValues.name} 
        onInput={(e)=>setFormValues({...formValues, name:e.target.value})}
      />
      <input type="email" placeholder="Email Address" className='input' value={formValues.email} 
        onInput={(e)=>setFormValues({...formValues, email:e.target.value})}
      />
      <input type="password" placeholder="Password" className='input' value={formValues.password} 
        onInput={(e)=>setFormValues({...formValues, password:e.target.value})}
      />
      <input type="password" placeholder="Confirm Password" className='input' value={formValues.confirmPass} 
        onInput={(e)=>setFormValues({...formValues, confirmPass:e.target.value})}
      />
        </div>
        <button className='btn'onClick={formSubmit}>Create Account</button>

        <p className='para'>{formValues.errorMsg}</p>
      </div>
     </div>
    </div>
  );
}

export default App;
