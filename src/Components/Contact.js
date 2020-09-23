import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (
      <section id="contact">

         <div className="row">
            <div class="four columns"> <i class="fa fa-map-marker fa-2x"></i>
               <p className="address">Manasa Thipparthi<br/>
                  Overland Park, Kansas 66223</p>
            </div>

            <div class="four columns"> <i class="fa fa-envelope-o fa-2x"></i>
               <p>manasaeddy.thipparthi@gmail.com</p>
            </div>

            <div class="four columns"> <i class="fa fa-phone fa-2x"></i>
                <p>8168598218</p>
            </div>
      </div>
   </section>
    );
  }
}

export default Contact;
