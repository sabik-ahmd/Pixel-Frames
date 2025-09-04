import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const formRef = useRef()
  const [status, setStatus] = useState(null)

  function sendEmail(e){
    e.preventDefault()
    setStatus('sending')
    // Replace the following ids with your EmailJS service/template/public key
    const SERVICE_ID = 'service_rxub9kl'
    const TEMPLATE_ID = 'template_1gb82xd'
    const PUBLIC_KEY = 'your_public_key_here'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        formRef.current.reset()
      }, (err) => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input name="from_name" required placeholder="Your name" className="w-full p-3 rounded bg-gray-800" />
          <input name="reply_to" required type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800" />
          <input name="phone" placeholder="Phone" className="w-full p-3 rounded bg-gray-800" />
          <textarea name="message" required placeholder="Message" className="w-full p-3 rounded bg-gray-800" rows="5" />
          <button type="submit" className="px-5 py-2 bg-pink-600 rounded">Send</button>
          {status === 'sending' && <div className="text-sm text-gray-400">Sending…</div>}
          {status === 'sent' && <div className="text-sm text-green-400">Message sent! We'll contact you soon.</div>}
          {status === 'error' && <div className="text-sm text-red-400">Error sending message. Check console for details.</div>}
        </form>

        <div className="space-y-3 text-gray-300">
          <div><strong>Location:</strong> Your city, India</div>
          <div><strong>Email:</strong> sabik.mh@gmail.com</div>
          <div><strong>Phone:</strong> +91 8495044921</div>
          <div><strong>Hours:</strong> Mon–Sun, by appointment</div>
        </div>
      </div>
    </section>
  )
}
