import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions about our puppies? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-800">Get in Touch</h2>

          <div className="space-y-4">
            {[
              {
                icon: '📞',
                label: 'Phone',
                value: '(555) 012-3456',
                sub: 'Mon–Sat, 9am – 6pm',
              },
              {
                icon: '✉️',
                label: 'Email',
                value: 'hello@happypawskennel.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: '📍',
                label: 'Address',
                value: '123 Meadow Lane, Springfield, OR 97477',
                sub: 'Visits by appointment only',
              },
              {
                icon: '🕐',
                label: 'Hours',
                value: 'Mon–Sat: 9am – 6pm',
                sub: 'Closed Sundays & major holidays',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-amber-100">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="font-semibold text-amber-900">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h3 className="font-bold text-amber-800 mb-2">Follow Us</h3>
            <p className="text-gray-600 text-sm">Stay up-to-date with new litters and puppy updates on social media.</p>
            <div className="flex gap-3 mt-3">
              {['Facebook', 'Instagram', 'TikTok'].map((s) => (
                <span
                  key={s}
                  className="bg-amber-200 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-amber-100">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">Send Us a Message</h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thanks for reaching out! We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-semibold text-amber-800 mb-1" htmlFor="name">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className="w-full border border-amber-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-800 mb-1" htmlFor="email">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="w-full border border-amber-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-800 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  className="w-full border border-amber-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-800 mb-1" htmlFor="message">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  className="w-full border border-amber-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 resize-none"
                  placeholder="Tell us which breed you're interested in, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold hover:bg-amber-800 transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
