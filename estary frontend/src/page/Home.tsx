import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";

const Home:React.FC = () => {
  return (
    <div>
      <Header />
          <main>
               <section className="hero_section">
                  <div className="hero_overlay"></div>
                    <div className="hero_container max-w-mainscreenSize mx-auto py-16">
                         <div className="hero_rows flex justify-between">
                              <div className="hero_title_cols w-[50%]">
                                  <div className="title_grid grid gap-y-4">
                                    <h2 className="text-6xl font-semibold text-primaryText font-primaryFontFamily">Buy, rent, or sell <br></br> your property<br></br> easily</h2>
                                    <p className="text-primaryText font-normal font-primaryFontFamily text-lg">A great platform to buy sell, or even rent you <br></br> properties without any commission</p>
                                  </div>

                                  <div className="total flex my-6 justify-between w-[30%]">
                                       <div className="renters border-l-2 pl-6">
                                           <p className="text-textColor text-lg font-semibold font-primaryFontFamily">50K +</p>
                                           <p className="text-textSecondary text-sm font-normal leading-normal font-primaryFontFamily">renters</p>
                                       </div>
                                       <div className="properties border-l-2 pl-6">
                                          <p className="text-textColor text-lg font-semibold font-primaryFontFamily">10k +</p>
                                          <p className="text-textSecondary text-sm font-normal leading-normal font-primaryFontFamily">properties</p>
                                       </div>
                                  </div>
                              </div>
                              <div className="hero_cols_second w-[50%]">

                              </div>
                         </div>
                    </div>
               </section>
          </main>
      <Footer />
    </div>
  )
}

export default Home