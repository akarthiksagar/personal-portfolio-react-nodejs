import { useState } from 'react';

 

  const Contact = () => {
    const [serverMessage, setServerMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

  const [errors, setErrors] = useState({
    name: 'Required',
    email: 'Required',
    message: 'Required'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    let errorMessage = '';
    if (value.trim() === '') {
      errorMessage = 'Required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = 'Invalid email';
    }

    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const isFormValid = !errors.name && !errors.email && !errors.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous server messages
    setServerMessage({ type: '', text: '' });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // The backend returned a 400 validation error
        setServerMessage({ type: 'error', text: data.error });
        return;
      }

      // Success (HTTP 201)
      setServerMessage({ type: 'success', text: 'Your message was sent successfully!' });
      
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (err) {
      setServerMessage({ type: 'error', text: 'Server unreachable. Please try again later.' });
    }
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>I'm currently looking for new opportunities. My inbox is always open!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Hi, I'd like to talk about..."
          ></textarea>
        </div>

        <button type="submit" className="btn" disabled={!isFormValid}>
          Send Message
        </button>
      </form>
      {serverMessage.text && (
      <p style={{ 
        marginTop: '1rem', 
        color: serverMessage.type === 'error' ? '#ef4444' : '#10b981' 
      }}>
        {serverMessage.text}
      </p>
    )}
    </section>
  );
};

export default Contact;