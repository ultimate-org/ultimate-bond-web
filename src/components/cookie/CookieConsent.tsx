'use client'

import { useState, useEffect } from 'react'

const COOKIE_KEY = 'ulti_cookie_consent'

type ConsentData = {
  status: 'accepted' | 'rejected'
  timestamp: string
  version: string
}

function getConsent(): ConsentData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(COOKIE_KEY)
    return raw ? (JSON.parse(raw) as ConsentData) : null
  } catch {
    return null
  }
}

function saveConsent(status: 'accepted' | 'rejected'): void {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({
    status,
    timestamp: new Date().toISOString(),
    version: '1.0',
  } satisfies ConsentData))
}

export function hasConsented(): boolean {
  return getConsent()?.status === 'accepted'
}

function loadFacebookPixel(): void {
  if (typeof window === 'undefined' || (window as any).fbq) return
  const s = document.createElement('script')
  s.innerHTML = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init','YOUR_PIXEL_ID');
    fbq('track','PageView');
  `
  document.head.appendChild(s)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const consent = getConsent()
    if (!consent) {
      setTimeout(() => setVisible(true), 2000)
    } else if (consent.status === 'accepted') {
      loadFacebookPixel()
    }
  }, [])

  const acceptAll = (): void => {
    saveConsent('accepted')
    loadFacebookPixel()
    setVisible(false)
  }

  const essentialOnly = (): void => {
    saveConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[90vw] max-w-sm bg-white border border-slate-200 rounded-xl p-5 shadow-lg">
      
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close cookie banner"
        className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-lg leading-none cursor-pointer bg-transparent border-none p-0"
      >
        ×
      </button>

      {/* Title */}
      <p className="font-medium text-sm text-slate-800 mb-2">
        🍪 Your privacy, your choice
      </p>

      {/* Description */}
      <p className="text-[13px] text-slate-500 leading-relaxed mb-1">
        We use cookies to keep this website running and to understand how visitors
        discover us through our advertising on Facebook and Instagram. No personal
        details like name, email, or phone are collected here — this website has
        no login or forms.
      </p>

      {/* Learn more link */}
      <a
        target='_blank'
        href="/privacy-policy"
        className="text-[12px] text-blue-700 underline inline-block mb-4"
      >
        Learn more
      </a>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={acceptAll}
          className="w-full py-2.5 rounded-lg text-[13px] font-medium cursor-pointer bg-[#1D9E75] text-[#E1F5EE] border border-[#0F6E56] hover:bg-[#0F6E56] transition-colors"
        >
          Accept all cookies
        </button>
        <button
          onClick={essentialOnly}
          className="w-full py-2.5 rounded-lg text-[13px] font-normal cursor-pointer bg-transparent text-slate-500 border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Essential only
        </button>
      </div>
    </div>
  )
}