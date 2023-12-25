import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer: React.FC = () =>{
  return (
    <footer>
      <section>
         <div className="footer_container max-w-mainscreenSize mx-auto">
             <div className="footer_rows flex items-start my-12 mobile:flex-wrap mobile:flex-col mobile:items-center mobile:gap-y-6">
                   <div className="footer_heading flex gap-x-2 items-center w-[20%] mobile:w-[unset]">
                   <DraftsIcon style={{color:'#7B68EE'}}/><h1 className="text-primaryText font-bold text-2xl leading-9 font-primaryFontFamily">Estary</h1>
                   </div>

               <div className='grid grid-cols-3 gap-y-10 w-[75%] items-baseline mobile:grid-cols-1 mobile:w-[unset]'>
                   <div className='sell_a_home grid gap-y-6'>
                       <p className='text-xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>SELL A HOME</p>
                        <div className='sell_home_link'>
                           <ul className='grid gap-y-2'>
                              <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/' >Request an offer</Link></li>
                              <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/' >Pricing</Link></li>
                              <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/' >Reviews</Link></li>
                              <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/' >Stories</Link></li>
                           </ul>
                        </div>
                   </div>

                   <div className='buy_rent_sell grid gap-y-6'>
                       <p className='text-xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>BUY, RENT AND SELL</p>
                        <div className='buy_rent_link'>
                             <ul className='grid gap-y-2'>
                                 <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Buy and sell properties</Link></li>
                                 <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Rent Home</Link></li>
                                 <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Builder trade-up</Link></li>
                             </ul>
                        </div>
                   </div>

                   <div className='footer_about grid gap-y-6'>
                      <p className='text-xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>ABOUT</p>
                        <ul className='grid gap-y-2'>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Company</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>How it works</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Contact</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Inverstors</Link></li>
                        </ul>
                   </div>

                   <div className='footer_buy_home pr-6 grid gap-y-6'>
                      <p className='text-xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>BUY A HOME</p>
                        <ul className='grid gap-y-2'>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Buy</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Finance</Link></li>
                        </ul>
                   </div>

                   <div className='footer_terms_privary pr-8 grid gap-y-6'>
                      <p className='text-xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>TERMS & PRIVACY</p>
                        <ul className='grid gap-y-2'>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Trust & Safety</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Terms of Service</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                   </div>

                   <div className='footer_terms_privary grid gap-y-6'>
                      <p className='text-2xl text-primaryText leading-normal font-primaryFontFamily font-semibold'>Resources</p>
                        <ul className='grid gap-y-2'>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Blog</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Guides</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>FAQ</Link></li>
                            <li className='text-lg text-primaryText leading-normal font-primaryFontFamily font-normal opacity-60'><Link to='/'>Help Center</Link></li>
                        </ul>
                   </div>
                </div>
             </div>
         </div>
       </section>

       <section className='copyrights_section border-t-2'>
           <div className='copyrights_container max-w-mainscreenSize mx-auto py-8'>
                <div className='copyrights_rows flex justify-between items-center'>
                    <div className='copyrights'>
                       <p className='text-textSecondary text-sm font-normal leading-normal font-primaryFontFamily'>2021 Estary. All rights reserved</p>
                    </div>
                    <div className='social_media_icons flex items-center gap-x-6'>
                         <FacebookIcon style={{color:'#7B68EE'}} />
                         <InstagramIcon style={{color:'#7B68EE'}} />
                         <TwitterIcon style={{color:'#7B68EE'}} />
                         <LinkedInIcon style={{color:'#7B68EE'}} />
                    </div>
                </div>
           </div>
       </section>
    </footer>
  )
}

export default Footer