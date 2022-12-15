import React from 'react'
import './styles.css';

function Contact() {
    return (

        <div className="page-container">
            <div className="column">
                <h1 className="pt-5 mt-5">Contact Info</h1>

                <h5 className="pt-5">Email: group7@gmail.com</h5>
                <h5 className="pt-1">Contact Number: 09123456789</h5>


            </div>
            <div className="column mb-3">
                <h2 className="pt-1">Address</h2> <p>18th floor, The W Fifth Avenue, 5th Ave, Taguig, 1630 Metro Manila</p>
                <iframe width="650" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=561&amp;height=601&amp;hl=en&amp;q=%20taguig%20kodego+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>




    )
}

export default Contact