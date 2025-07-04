import React, { useState } from 'react';
import axios from 'axios';

export default function ProfileForm() {
  const [formData, setFormData] = useState({ name: '', skills: '', goals: '' });
  const [gigs, setGigs] = useState('');
  const [tip, setTip] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/profile/upload', formData);
      setGigs(data.gigs);
      setTip(data.coachingTip);
    } catch (err) {
      console.error('Submission Error:', err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required /><br />
        <textarea name="skills" placeholder="Your Skills" value={formData.skills} onChange={handleChange} required /><br />
        <textarea name="goals" placeholder="Your Goals" value={formData.goals} onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>

      {gigs && (
        <section>
          <h3>🔍 AI-Suggested Gigs:</h3>
          <pre>{gigs}</pre>
        </section>
      )}

      {tip && (
        <section>
          <h4>💡 Micro-Coaching Tip:</h4>
          <p>{tip}</p>
        </section>
      )}
    </>
  );
}