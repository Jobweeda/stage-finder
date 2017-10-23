import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class Faq extends PureComponent {
  render() {
    return(
      <div className="about-page">
        <Navbar searchBar={true} />
        <div className="scroll">
          <h1 className="contact-title"><i className="fa fa-music"></i> Frequently Asked Questions <i className="fa fa-music"></i></h1>
          <div className="about-container">
            <div className="row col-sm-6">
             <h2> FAQ </h2>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Faq;
