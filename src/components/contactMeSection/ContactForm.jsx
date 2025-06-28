import { useState } from 'react'

const ContactFormSimple = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showLink, setShowLink] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowLink(true)
  }

  const recipientEmail = "ilhammahfuri12@gmail.com"
  const subject = `Pesan dari ${name}`
  const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Preview Email
        </button>
      </form>

      {showLink && (
        <div className="mt-4 text-center">
          <p className="text-white mb-2">Click the button below to send the email:</p>
          <a
            href={mailtoLink}
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300"
            onClick={() => {
              setName("")
              setEmail("")
              setMessage("")
              setShowLink(false)
            }}
          >
            Send Email Now
          </a>
        </div>
      )}
    </div>
  )
}

export default ContactFormSimple