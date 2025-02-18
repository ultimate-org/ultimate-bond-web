"use client"
import React from 'react'
// import { motion } from "framer-motion"
import { merienda, ubuntuCondensed, fjallaOne } from '@/fonts/fonts'
// import Image from 'next/image'

function WhyUltimateSection() {
    return (
        <div className='w-full p-8'>
            <h1 className={`text-2xl md:text-4xl text-center ${merienda.className}`}>Why &quot;Ulti-Mate&quot; matters</h1>
      <div className='grid md:grid-cols-4 gap-4  mt-[4rem]'>
                <div className='grid md:grid-rows-3 col-span-1'>
                    <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title One</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga velit rem explicabo saepe earum perspiciatis illo quibusdam, blanditiis maxime beatae sapiente nisi aspernatur reprehenderit exercitationem consequatur. Animi facere quod dolorem.</p>
                    </div>
                    <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title Two</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nobis quam hic provident. Optio, magnam quae eos neque corrupti deserunt, dolore impedit, deleniti labore tenetur fuga atque possimus excepturi similique?</p>
                    </div>
                    <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title Three</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque vel animi eius! Cumque architecto fugiat saepe itaque ipsa porro molestiae, debitis veniam minus autem tempore quod! Accusantium, earum pariatur.</p>
                   </div>
                </div>
                {/* Image Container */}
                <div className='col-span-2'>
                <div className='w-full h-full bg-gray-300'>
                        <p className="text-center text-xl">Image or video goes here</p>
                    </div>
                </div>
                {/* Third Section */}
                <div className='grid md:grid-rows-3 col-span-1  '>
                <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title 4</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consequatur, animi eaque, quas dolores amet ea exercitationem nemo placeat saepe sequi dolorum magnam eum illo quod esse temporibus numquam odit.</p>
                    </div>
                    <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title 5</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis harum neque qui perspiciatis voluptate, molestias maiores sed debitis voluptatum reprehenderit ipsa a explicabo veritatis ratione eveniet, inventore aspernatur impedit nulla?</p>
                    </div>
                    <div className='my-8'>
                        <h2 className={`text-center mb-4 text-md md:text-2xl ${fjallaOne.className}`}>Title 6</h2>
                        <p className={`text-center ${ubuntuCondensed.className}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus vero quam, nulla delectus ipsam ipsa, odit officia quia dicta esse culpa debitis quaerat? Id inventore impedit facere voluptatem sapiente. Magnam.</p>
                   </div>
                    </div>
            </div>
            </div>
  )
}

export default WhyUltimateSection



