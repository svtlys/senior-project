import google from '../components/images/googlethumbnail.webp'
import { Link } from 'react-router-dom';

const LoginPage = () =>{

    const google = ()=>{
        window.open("http://localhost:5000/auth/google", "_self");
    }
    return (
        <div className="loginBox"> 
         <h1 className="loginTitle"> Choose your Login Type </h1>

         <div className = "wrapAround">
            <div className="leftSide">
                <button className = "loginButton google" onClick={google}>
                    <img src = {google} alt =" " className ="icon"></img>
                     Sign in with Google
                </button>


            </div>
            <div className ="center">
                 <div className ="line"/>
                 <div className ="or"> OR </div>               
            </div>
            <div className="rightSide">
                
                <input type = "text" className="inputField" placeholder = "Username" required/>
                <input type = "password" className ="inputField" placeholder = "Password" required/>
                <div class ="forgot">
                    <section>
                        <input type="checkbox" id="check"/> 
                        <label for="check"> Remember me</label>
                    </section>
                    <section>
                        <a href="#"> Forgot Password</a>
                    </section>
                </div>
                <button className = "submitButton">Login </button>

                <div class ="signUP">
                    <p> No Account, Sign up!</p>
                </div>
                  
            </div>

            </div>
         </div>
    )
} 

export default LoginPage;