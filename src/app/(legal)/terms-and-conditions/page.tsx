import React from 'react'

export const metadata = {
  title:"Terms and Conditions | UltiMate Parenting App",
  description:"Review Ultimate Parenting’s terms and conditions for using our parenting app, services, workshops, and digital content platform."
}

function TermsConditions
() {
  return (
    <div className='w-full h-screen'>
          <object data="/legal/termsformatted.pdf" type="application/pdf" width={"100%"} height={"100%"}></object>
    </div>
  )
}

export default TermsConditions
