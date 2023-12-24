import { Link } from "react-router-dom"

function Header() {
  return (
     <>
        <header>
              <div className="max-w-mainscreenSize mx-auto my-4">
                 <div className="header_rows flex justify-between items-center">
                     <div className="header_title">
                          <h1 className="text-primaryText font-bold text-2xl leading-9">Estary</h1>
                     </div>

                      <div className="nav_menu">
                          <nav>
                               <ul className="flex items-center  gap-x-8">
                                   <li><Link to='/'>Rent</Link></li>
                                   <li><Link to='/'>Buy</Link></li>
                                   <li><Link to='/'>Sell</Link></li>
                                   <li><Link to='/'>Manage Property</Link></li>
                                   <li><Link to='/'>Resources</Link></li>
                               </ul>
                          </nav>
                     </div>

                     <div className="rows_login_signup flex items-center gap-x-4">
                           <div className="login_button">
                                <button className="rounded-sm py-2 px-8 border-primaryBorder border-2">Login</button>
                           </div>
                           <div className="signup_button">
                               <button className="bg-btnColor text-secondaryText px-8 py-2 rounded-md">Signup</button>
                           </div>
                     </div>

                 </div>
              </div>
        </header>
     </>
  )
}

export default Header