import React from 'react'

export const metadata = {
  title:"Privacy Policy | UltiMate Parenting App",
  description:"Read Ultimate Parenting’s privacy policy to understand how we collect, use, and protect your personal and family information securely."
}


function PrivacyPolicy() {
  return (
      <div className='w-full h-screen'>
          <object data="/legal/formattedPrivacyPolicy.pdf" type="application/pdf" width={"100%"} height={"100%"}></object>
    </div>
  )
}

export default PrivacyPolicy