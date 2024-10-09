import React from 'react'
import "../css/Companyicon.css"
import google from "../images/google.png"
import netflix from "../images/netflix.png"
import airbnb from "../images/airbnb.png"
import amazon from "../images/amazon.png"
import facebook from "../images/facebook.png"
import grab from "../images/grab.png"
export default function Companyicon() {
  return (
    <div className='companyicon_main'>
        <div className='companyicon_company'>
            <p>Trusted by 5,000+ Companies Worldwide</p>
        </div>
        <div className='companyicon_images'>
            <img className='companyicon_google' src={google} alt='google'/>
            <img className='companyicon_google' src={netflix} alt='netflix'/>
            <img className='companyicon_google' src={airbnb} alt='airbnb'/>
            <img className='companyicon_google' src={amazon} alt='amazon'/>
            <img className='companyicon_google' src={facebook} alt='facebook'/>
            <img className='companyicon_google' src={grab} alt='grab'/>
        </div>
    </div>
  )
}
