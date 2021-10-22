import React,{useEffect,useState,useContext} from 'react'
import { userContext } from '../../App'

function Profile() {

    const [pics,setPics] = useState([])
    const {state,dispatch} = useContext(userContext)

    useEffect(() => {
        console.log("hellow their")
        fetch('/mypost' ,{
            headers : {
                "Authorization" : "Bearer "+ localStorage.getItem("jwt"),
            }
        }).then(res => res.json())
        .then( data => {
            setPics(data.myposts)
        })
     },[])


    return (
        <div>
            <div style={{display:"flex", borderBottom:"1px solid grey"}}> 
                <div style={{marginLeft:"15rem"}}>
                    <img src="https://images.unsplash.com/photo-1536248387525-e4730d1feda3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNsb3NldXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img6"
                    style={{width:"15rem" , height:"15rem" ,borderRadius:"10rem" ,marginTop:"1rem"}}/>
                </div>

                <div style={{ marginLeft:"5rem" , marginTop:"2rem"}}>
                    <h5>{state ? state.name : "loading" }</h5>
                    <h4>{state ? state.email : "loading" }</h4>

                    <div style={{display:"flex", justifyContent:"space-between" ,width:"25rem"}}>
                        <h6> {pics.length} Posts</h6>
                        <h6> {state ? state.followers.length : 0 } Followers</h6>
                        <h6> {state ? state.following.length : 0 } Following</h6>
                    </div>

                    
                </div>


            </div>
            <div className="galary">
            {
                pics.map(item => {
                    return(
                    <img className="items" src={item.photo} alt="img1" height="150px" width="250px"></img>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Profile
