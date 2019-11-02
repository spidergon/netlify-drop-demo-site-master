import React from 'react'

export default function App() {
  return (
    <div>
      Hello from React!
      <form
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
        action="/thankyou"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            File <input type="file" name="fccfile" />
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
