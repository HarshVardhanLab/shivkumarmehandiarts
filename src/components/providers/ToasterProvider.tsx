'use client'

import { Toaster } from 'react-hot-toast'

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: 'toast',
        duration: 4000,
        style: {
          fontFamily: 'DM Sans, sans-serif',
          borderRadius: '12px',
        },
        success: { iconTheme: { primary: '#1a4d2e', secondary: '#fff' } },
      }}
    />
  )
}
