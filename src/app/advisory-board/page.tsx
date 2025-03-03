import React from 'react'
import Image from 'next/image'
import { fjallaOne } from '@/fonts/fonts'

function AdvisoryBoard() {
    const advisoryBoard = [
        {
            id: 1,
            name: "Dr. Nandita Babu",
            profession: "Professor, Department of Psychology, University of Delhi",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/nandita-babu.png"
        },
        {
            id: 2,
            name: "Dr. Naina Athalye",
            profession: "Ph D Psychology, University of Pune",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/naina-athalye.png"

        },
        {
            id: 3,
            name: "Mr. Sudhir Panse",
            profession: "Strategic Advisor @ULTI-MATE",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/sudhir-panse.jpeg"

        }
    ]

    const keyContributers = [
        {
            id: 1,
            name: "Dr. Namita Modak",
            profession: "BDS, PG Diploma (Counseling Psychology) Certified parenting coach",
            quote: "When the child is wrong, the parent needs to evaluate his own flaws",
            image: "/images/advisoryBoard/namita.jpg"
        },
        {
            id: 2,
            name: "Smitaa Kulkarni",
            profession: "Accomplised IT professional, DMIT EXPERT, Certified Life Coach and Career counsellor",
            quote: "There is no such thing as a perfect parent. So just be a real one",
            image: "/images/advisoryBoard/smitaa.png"
        },
        {
            id: 3,
            name: "Kshama Kshirsagar",
            profession: "Professional Kathak Dancer. Masters in Kathak (Gold medalist) and Indology",
            quote: "The days are long but the years are short, so make the most of every moment with your child",
            image: "/images/advisoryBoard/kshama.jpeg"
        }
    ]
  return (
      <div className='bg-gradient-to-br from-cyan-100 to-white-500'>
          {/* The advisory Board */}

          <div className='py-8'>
              <div>
                  <h1 className={`text-center text-3xl ${fjallaOne.className}`}>The Advisory Board</h1>
              </div>
              <div className='grid md:grid-cols-3 '>
                  {
                      advisoryBoard.map((advisors) => {
                          return <div key={advisors.id} className=' mx-[2rem] justify-center items-center' >
                              {/* Image */}
                              <div className='h-[12rem]  w-[60%] m-auto my-8 relative rounded-lg overflow-hidden drop-shadow-2xl'>
                                  <Image src={advisors.image} alt='advisor'  className='object-cover' fill></Image>
                              </div>
                              {/* Info */}
                              <div className='justify-center items-center'>
                                  <div className='my-4'>
                                      
                                  <h2 className={`text-center text-2xl ${fjallaOne.className} font-bold text-orange-600`}>{ advisors.name}</h2>
                                  </div>
                                  <div>
                                      <h4 className={`text-center text-lg ${fjallaOne.className}`}>{advisors.profession}</h4>
                                      <p className={`text-center text-sm ${fjallaOne.className} text-gray-500`}>{advisors.quote}</p>
                                  </div>
                              </div>
                          </div>
                      })
                  }
              </div>
          </div>


         

          {/* Key Contributors */}
          <div className='my-8'>
              <div>
                  <h1 className={`text-center text-3xl ${fjallaOne.className}`}>Key Contributors</h1>
              </div>
              <div className='grid md:grid-cols-3 '>
                  {
                      keyContributers.map((contributor) => {
                          return <div key={contributor.id} className=' mx-[2rem] justify-center items-center' >
                              {/* Image */}
                              <div className='h-[12rem]  w-[60%] m-auto my-8 relative rounded-lg overflow-hidden drop-shadow-2xl'>
                                  <Image src={contributor.image} alt='advisor'  className='object-cover' fill></Image>
                              </div>
                              {/* Info */}
                              <div className='justify-center items-center'>
                                  <div className='my-4'>
                                      
                                  <h2 className={`text-center text-2xl ${fjallaOne.className} font-bold text-orange-600`}>{ contributor.name}</h2>
                                  </div>
                                  <div>
                                      <h4 className={`text-center text-lg ${fjallaOne.className}`}>{contributor.profession}</h4>
                                      <p className={`text-center text-sm ${fjallaOne.className} text-gray-500`}>{contributor.quote}</p>
                                  </div>
                              </div>
                          </div>
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default AdvisoryBoard