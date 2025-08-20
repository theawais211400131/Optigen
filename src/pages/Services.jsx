import React from 'react'
import "./Services.css"
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
function Services() {
  return (
    <div className="container">
        <div className="row">
            <h1 className="heading">Our Services</h1>
        </div>
        <div className="row Branding a">  
            <div className="col-3"> 
                <HdrStrongIcon fontSize='large' className='icon2' /> 
                <p className='all'>Branding</p>
            </div>
            <div className="col-7"> 
                <p className='all-text'>It is the very essence of your business. It's the emotional and
                intellectual connection your audience has with your company.</p>
            </div>
            <div className="col-2"><a href='/'><ArrowRightAltRoundedIcon fontSize='large' className='icon3' /></a></div>
        </div>
        <div className="row Develpment a">
            <div className="col-3"> <AllInclusiveIcon fontSize='large' className='icon2' /> 
            <p className='all'>Develpment</p></div>
            <div className="col-7"><p className='all-text'>It's about transforming ideas into tangible realities that shape
            the future.</p></div>
            <div className="col-2"><a href='/'><ArrowRightAltRoundedIcon fontSize='large' className='icon3' /></a></div>
        </div>
        <div className="row UIUXDesign a">
            <div className="col-3"><LanguageRoundedIcon fontSize='large' className='icon2' /> 
            <p className='all'>UI/UX Design</p></div>
            <div className="col-7"><p className='all-text'>We believe that outstanding user interfaces (UI) and user
experiences (UX) are the cornerstones of successful digital
products.</p></div>
            <div className="col-2"><a href='/'><ArrowRightAltRoundedIcon fontSize='large' className='icon3' /></a></div>
        </div>
        <div className="row GraphicDesign a">
            <div className="col-3"><ViewSidebarRoundedIcon fontSize='large' className='icon2' /> 
            <p className='all'>GD</p></div>
            <div className="col-7"><p className='all-text'>It's about crafting compelling visual narratives that captivate,
            communicate, and connect.</p></div>
            <div className="col-2"><a href='/'><ArrowRightAltRoundedIcon fontSize='large' className='icon3' /></a></div>
        </div>
        <div className="row SEO a">
            <div className="col-3"><AcUnitRoundedIcon fontSize='large' className='icon2' /> 
            <p className='all'>SEO</p></div>
            <div className="col-7"><p className='all-text'>We specialize in SEO strategies that drive organic traffic,
elevate your search rankings, & ensure your brand is
discovered by the right audience at the right time.</p></div>
            <div className="col-2"><a href='/'><ArrowRightAltRoundedIcon fontSize='large' className='icon3' /></a></div>
        </div>
    </div>
  )
}

export default Services
