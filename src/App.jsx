import React, { useEffect } from 'react'
import './assets/styles/App.css'
import './assets/styles/bootstrap-main/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { createClient, UsermavenProvider } from '@usermaven/react'
import Home from './Home'

// Initialize Usermaven client
const usermavenClient = createClient({
  // Required Configuration
  key: 'UMSdyU8O1V',
  trackingHost: 'https://events.usermaven.com',

  // Optional Configuration
  autocapture: true, // Enable automatic event capturing
  autoPageview: true, // Automatically track page views
  randomizeUrl: false, // Randomize URLs to avoid PII collection

  // Cross-domain Tracking (Optional)
  crossDomainLinking: false, // Enable cross-domain tracking
  // domains: 'muritz11.github.io', // Specify allowed domains

  // Advanced Configuration (Optional)
  namespace: 'my-portfolio', // Custom namespace for multiple tracking instances
})

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <UsermavenProvider client={usermavenClient}>
      <Home />
    </UsermavenProvider>
  )
}

export default App
