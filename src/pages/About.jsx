import React from 'react'
import Title from'../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti consequuntur suscipit. Sint dignissimos deleniti aliquid sit, in magni officia, optio rerum nostrum illo qui minus iure corporis dolor. Voluptas, voluptatum excepturi sed fugit ipsa et molestiaehitecto quae illo aspernatur soluta. Nostrum sunt perferendis nam vero fugiat facilis atque doloribus aperiam hic, culpa laborum. Nesciunt magnam sed omnis adipisci vitae minus laboriosam? Porro, provident pariatur doloremque fugiat veritatis, illum facere hic in molestias ipsa ipsam, voluptates voluptatibus!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque. Vel cum ut fuga in.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed quas libero a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE USE'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
