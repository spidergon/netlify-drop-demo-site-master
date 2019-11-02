import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { encode } from 'punycode'

function App() {
  const [msg, setMsg] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    function encode(data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }
      return formData
    }

    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        name: form.name.value,
        email: form.email.value
      })
    })
      .then(() => setMsg('success'))
      .catch(err => alert(err))
  }

  return (
    <div>
      {msg ? msg : 'Hello from React!'}
      <form
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        netlify
        onSubmit={handleSubmit}
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

ReactDOM.render(<App></App>, document.getElementById('app'))
