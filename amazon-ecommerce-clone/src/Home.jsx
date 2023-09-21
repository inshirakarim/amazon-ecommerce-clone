import React from 'react'
import './Home.css'
import Product from './Product'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Slider from './Slider'; 

function Home() {
    const images = [
        'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/bob-1x._CB578709988_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/UNREC_PC_3000X1200_HD_HDFC._CB578709527_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/GW/Unrec/PCA_GW_PC-2X._CB577919462_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/UNREC_PC_3000X1200_LIGHTING_HDFC._CB578709527_.jpg'

    ]
  return (
    <div className='home'>
        <div className='home_container'>
        <Slider images={images} />
        </div>

        <div className='home_row'>
            <Product 
            id = "12486645"
            title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses " 
            price = "19.99" 
            image = 'https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg' 
            rating = {5} />

            <Product  
            id = "23432335"
            title = "COSMIX - No Nonsense Plant Protein | Organic Pea & Brown Rice Isolate | Vegan | 24g Protein/Serving | Easy To Digest | All Essential Amino Acids | Real Indonesian Cacao - 500g (Pack of 2)" 
            price = "39.58" 
            image = 'https://m.media-amazon.com/images/I/51zJu-kko9L._AC_SY200_.jpg' 
            rating = {4}/>
        </div>

        <div className='home_row'>
            <Product  
            id = "32345799"
            title = "HOUSE OF VIPA Wall Shelves Kitchen Bathroom Plastic Shelf Self-Adhesive Sticker Hook Multipurpose Wall Holder Bathroom Storage Rack Box Strong Shower Rack Shelf - 2 Bathroom Shelves (Blue)" 
            price = "2.96"
            image = 'https://m.media-amazon.com/images/I/41lBHG6iugL._AC_SY200_.jpg' 
            rating = {3} />

            <Product  
            id = "24498987"
            title = "Cosmix- Shroom Immune Coffee Booster | Immunity Boosting, Prevent Caffeine Crash | Superfood Blend with Reshi, Chaga & Sliver Ear | No Added Sugar | Vegan | 60g - 40 servings (Real Indonesian Cacao)" 
            price = "18.42" 
            image = 'https://m.media-amazon.com/images/I/51qss6WUBFL._AC_SY200_.jpg' 
            rating = {4} />

            <Product  
            id = "43468657"
            title = "Better Alt Mushroom Coffee, Arabica Ground Coffee with Lions Mane & Chaga Mushroom, 284g" 
            price = "39.99" 
            image = 'https://m.media-amazon.com/images/I/41UK5CGUnQL._SX300_SY300_QL70_FMwebp_.jpg' 
            rating = {2} />
        </div>

        <div className='home_row'>
            <Product 
            id = "36879654"
            title = "Acer Nitro 5 12th Gen Intel Core i7-12650H Gaming Laptop (Windows 11 Home/16 GB/1TB SSD/NVIDIA GeForce RTX 3070Ti Graphics/165Hz) AN515-58 with 15.6 inch QHD IPS Display, Killer WiFi 6, RGB Keyboard" 
            price = "1200.85" 
            image = 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4f81565e-e65e-4b4d-9452-14de0b1879cf._CR0,0,1200,628_SX430_QL70_.jpg' 
            rating = {5}  />
        </div>

    </div>
  )
}

export default Home;