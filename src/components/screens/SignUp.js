import React,{useState} from 'react'
import {Link} from "react-router-dom"
import M from 'materialize-css';
import { useHistory  } from "react-router-dom";


function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [image,setImage] = useState("")
    const [imageurl,setImageUrl] = useState("")

    let history = useHistory();

    const HomeButton = () => {
          history.push("/login");
    }

    const PostData = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    return M.toast({html: `${ data.error} !`,classes:"red"})  
                }
    
                M.toast({html: 'SignUp Successfully !',classes:"blue"})  
                M.toast({html: 'Please login !',classes:"blue"})  
                setTimeout(() => {
                    HomeButton();
                }, 2000);
            })
        }else{
            M.toast({html: 'Please enter the valid email !',classes:"red"})  

        }
    }


    return (
        <>
        <div className="login-page">
            <div><img src="/phonephoto.png" alt="phonephoto"/></div>
            <div className="card auth-card">
                <h1>Instagram</h1>
                <div className="login-input">
                    <input className="input-field" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name"/>
                    <input className="input-field" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
                    <input className="input-field" value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
                    <input className="input-field" value={cpassword}  onChange={(e)=>{setCpassword(e.target.value)}} type="password" placeholder="Password"/>
                    <button onClick={()=>{
                
                        if(!name || !email || !password || !cpassword){
                            M.toast({html: 'plese fill all the fields !',classes:"red"})  

                        }else if(password !== cpassword || password.length < 6 ){
                            M.toast({html: 'Password must be greater then 6 character and Matchable !',classes:"red"})                              
                        }else{
                            PostData();
                        }
                        
                        }} className="btn blue">Login</button>
                    <center><p>
                        <Link to="/login"> Already have an account ?  </Link>
                    </p></center>
                </div>
            </div>
        </div>
        </>
    )
}


export default SignUp
