import React from 'react'
function Profile() {
    return (
        <div>
            <div style={{display:"flex", borderBottom:"1px solid grey"}}> 
                <div style={{marginLeft:"15rem"}}>
                    <img src="https://images.unsplash.com/photo-1536248387525-e4730d1feda3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNsb3NldXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img6"
                    style={{width:"15rem" , height:"15rem" ,borderRadius:"10rem" ,marginTop:"1rem"}}/>
                </div>

                <div style={{ marginLeft:"5rem" , marginTop:"2rem"}}>
                    <h5>NITIN NEGI</h5>

                    <div style={{display:"flex", justifyContent:"space-between" ,width:"25rem"}}>
                        <h6>140 posts</h6>
                        <h6>140 follower</h6>
                        <h6>140 following</h6>
                    </div>
                </div>
            </div>
            <div className="galary">
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
                <img className="items" src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1"></img>
            </div>
        </div>
    )
}

export default Profile
