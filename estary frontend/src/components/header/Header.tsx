import { Link } from "react-router-dom"
import DraftsIcon from '@mui/icons-material/Drafts';

function Header() {
  return (
     <>
        <header>
              <div className="max-w-mainscreenSize mx-auto my-4">
                 <div className="header_rows flex justify-between items-center">
                     <div className="header_title flex items-center gap-x-2">
                          <DraftsIcon style={{color:'#7B68EE'}}/><h1 className="text-primaryText font-bold text-2xl leading-9 font-primaryFontFamily">Estary</h1>
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
                                <button className="rounded-md py-2 px-8 border-primaryBorder border-2 text-lg font-normal text-primaryText leading-normal font-primaryFontFamily">Login</button>
                           </div>
                           <div className="signup_button">
                               <button className="bg-btnColor text-secondaryText px-8 py-2 rounded-md text-lg font-normal leading-normal">Signup</button>
                           </div>
                     </div>

                 </div>
              </div>
        </header>
     </>
  )
}

export default Header