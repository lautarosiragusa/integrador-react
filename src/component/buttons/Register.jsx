import React from 'react'

const Register = () => {
 
  return (
      <>
          <div className="container mb-5">
              <div className="row">
                  <div className="col-12 text-center py-4 my-4">
                     <h1>Register</h1>
                      <hr />

                  </div>
              </div>
          
            

              <form>
              <div class="mb-3">
                      <label for="exampleForm" class="form-label">full name</label>
                      <input type="text" class="form-control" id="exampleForm" placeholder="John Smith"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleForm" class="form-label">Date of Birth</label>
                      <input type="date" class="form-control" id="exampleForm" placeholder="03/05/1998"/>
                  </div>
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

export default Register