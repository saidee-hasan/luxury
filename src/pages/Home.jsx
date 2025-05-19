import React from 'react'
import BannerComponent from '../components/Banner'
import Calgary from '../components/Calgary'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import NavbarBtn from '../shared/NavbarBtn'
import Featured from '../components/Featured'

function Home() {
  return (
    <div>
      
  <BannerComponent/>
  <Calgary/>
     <Services/>
    <Featured/>
     <Reviews/>
    


    </div>
  )
}

export default Home