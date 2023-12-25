import { Link } from "react-router-dom"
import DraftsIcon from '@mui/icons-material/Drafts';
import React from "react";


const Header:React.FC = () => {
  return (
     <>
        <header>
              <div className="max-w-mainscreenSize mx-auto my-8">
                 <div className="header_rows flex justify-between items-center">
                     <div className="header_title flex items-center gap-x-2">
                          <DraftsIcon style={{color:'#7B68EE'}}/><Link to="/"><h1 className="text-primaryText font-bold text-2xl leading-9 font-primaryFontFamily">Estary</h1></Link>
                     </div>

                      <div className="nav_menu">
                          <nav>
                               <ul className="flex items-center  gap-x-8">
                                   <li><Link to='/' className="text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Rent</Link></li>
                                   <li><Link to='/' className="text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Buy</Link></li>
                                   <li><Link to='/' className="text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Sell</Link></li>
                                   <li><Link to='/' className="text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Manage Property</Link></li>
                                   <li><Link to='/' className="text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Resources</Link></li>
                               </ul>
                          </nav>
                     </div>

                     <div className="rows_login_signup flex items-center gap-x-4">
                           <div className="login_button">
                                <Link to="/login" className="rounded-md py-3 px-6 border-primaryBorder border-2 text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Login</Link>
                           </div>
                           <div className="signup_button">
                               <Link to="/signup" className="bg-btnColor text-secondaryText px-8 py-3 rounded-md text-lg font-normal leading-normal">Signup</Link>
                           </div>
                     </div>

                 </div>
              </div>
        </header>
     </>
  )
}

export default Header