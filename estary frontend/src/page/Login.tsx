import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import React from "react"

const Login:React.FC = () => {
  return (
   <>
      <Header />
        <main>
            <section className="login_section">
                <div className="login_container">
                      <div className="login_row">
                           <p>Login</p>
                      </div>
                </div>
            </section>
        </main>
      <Footer />
  </>
  )
}

export default Login