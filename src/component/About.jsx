import React from 'react'
import { NavLink } from 'react-router-dom'

 
const About=()=> {
  return (
    <div>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'>ABOUT US</h1>
                    <p className='lead mb-6'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim dolores iure blanditiis quas laborum error tempore et perferendis ea,
                         cumque, accusamus ipsum voluptatibus tenetur delectus nesciunt, libero aliquid temporibus. Illo, quas. Praesentium accusantium eius optio 
                         consectetur quisquam labore repellendus dolores, voluptatum error nobis et repudiandae provident aliquam eveniet suscipit ipsum delectus,
                          minima autem vitae in quasi. Assumenda omnis expedita doloremque cupiditate molestiae incidunt repellendus veritatis, nostrum eos, nulla 
                          maxime molestias provident corrupti dolores laudantium a minima! Quasi at laborum libero commodi assumenda rerum ipsam accusamus beatae odio cumque.
                           Fuga a nobis molestias similique modi qui necessitatibus, optio quod at?
                        
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                </div>
                
                <div className='col-md-6 d-flex justify-content-center'> <img src="/imagenes/equipo.png" alt="About Us" height="400px" width="600px"/></div>
            </div>
        </div>
        
    </div>
  )
}


export default About