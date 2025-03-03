import Image from 'next/image'
import React from 'react'

function ChildDetails() {
  return (
    <div className='w-full p-8'>
      <div className='grid md:grid-cols-2 gap-8 md:h-screen'>
      {/* Left Image Container */}
        <div className='hidden md:block relative'>
          <Image src="/images/authentication/sign-up.jpeg" alt="child-details" className='size-full object-cover' fill ></Image>
        </div>
        {/* Child Addition Container */}
        <div>
          <div>Child Details!</div>
        </div>
        </div>
    </div>
  )
}

export default ChildDetails