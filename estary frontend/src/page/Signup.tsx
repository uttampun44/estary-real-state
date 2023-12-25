import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import React from "react"
import SignuRealEstate from '../assets/images/real-estate.png'

const Signup:React.FC = () => {
  return (
    <>
        <Header />
           <main>
                <section>
                        <div className="signup_container">
                            <div className="signup_rows max-w-mainscreenSize mx-auto">
                                <div className="flex items-center my-16">
                                      <div className="real_estate_img w-[50%]">
                                         <img src={SignuRealEstate} style={{width: '100%', height: '100%'}} alt="realestate_signup"/>
                                      </div>
                                      <div className="real_estate_form w-[50%]">
                                           <div className="grid justify-center">
                                             <form method="post">
                                                 <label htmlFor="signup" className="text-primaryText font-bold text-3xl leading-normal font-primaryFontFamily">Sign up</label>

                                                 <div className="form_section">
                                                     <div className="first_name">
                                                         <label>First Name</label>
                                                         <input type="text" name="firstname" />
                                                     </div>
                                                 </div>
                                             </form>
                                           </div>
                                      </div>
                                </div>
                            </div>

                        </div>
                </section>
           </main>
        <Footer />
    </>
  )
}

export default Signup