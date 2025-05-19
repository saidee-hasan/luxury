import React from 'react'
import GalleryHome from '../components/GalleryHome'
import GalleryCategory from '../components/GalleryCategory'
import Windows from '../components/Windows'
import Doors from '../components/Doors'
import Roofing from '../components/Roofing'
import FullGallery from '../components/FullGallery'

function Gallery() {
  return (
    <div>
        <GalleryCategory/>
        <Windows/>
        <Doors/>
        <Roofing/>
        <FullGallery/>


    </div>
  )
}

export default Gallery