import React from 'react'

function RegretAndOutcome() {
    const questions = [
        {
            id: 1,
            value : "Gaming addiction?"
        },
        {
            id: 2,
            value: "Digital dependence?"
        },
        {
            id: 3,
            value: "Poor communication & misunderstandings?"
        },
        {
            id: 4,
            value: "Emotional struggles & social isolation?"
        }
    ]

    const tryThis = [
        {
            id: 1,
            value: "Better performance by child in every aspect of life, be it school or in social circle"
        },
        {
            id: 2,
            value: "Critical thinker who sees things differently"
        },
        {
            id: 3,
            value:"Physical, mental, Social well-being, hence confident and resilient child"
        },
        {
            id: 4,
            value:"Life-long learner which is key in Fast Pace Tech changing world"
        },
        {
            id: 5,
            value:"Improved Financial and Digital Literacy"
        },
        {
            id: 6,
            value:"Improved family bonding and HAPPY & SUCCESSFUL CHILD."
        }
    ]
  return (
      <div className='w-full p-8'>
          <div className='my-4'>
              <h1 className={`text-4xl text-center`}>Let&apos;s not regret later!!</h1>
          </div>
          <div className='my-4'>
              <h3 className='text-2xl text-center'>What if a lack of family bonding, connection today leads to:</h3>
              <ul className='list-disc'>
                  {
                      questions.map((question) => {
                          return <li key={question.id}>{ question.value}</li>
                      })
                  }
              </ul>
          </div>
          <div className='my-4'>
              <h3 className='text-center text-2xl'>Instead, let’s try UltiMate, you can expect below:</h3>
              <ul className='list-disc'>
                  {
                      tryThis.map((item) => {
                          return <li key={item.id}>{item.value}</li>
                      })
                  }
              </ul>
          </div>
          <div className='my-4'>
              <h2 className='text-2xl text-center'>“IQ gets you into the race, EQ makes you win it”</h2>
          </div>
    </div>
  )
}

export default RegretAndOutcome