import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />

                    </div>
                </div>
            
              

                <form>
                    <div class="mb-3">
                        <label for="exampleForm" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleForm" placeholder="John Smith"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Send Message</button>
                </form>

              
            
            </div>
        </div>
    )
}


export default Contact;