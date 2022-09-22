import React from 'react'
 


const Login = () => {
 
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                       <h1>Login</h1>
                        <hr />

                    </div>
                </div>
            
              

                <form>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleForm" placeholder="John_Smith@gmail.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password12345"/>
                    </div>
                    
                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                </form>

              
            
            </div>
        
</>
    )
}

export default Login