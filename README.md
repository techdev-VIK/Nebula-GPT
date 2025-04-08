
# Nebula - GPT

## React + Vite

- Vite
- Tailwind for styling
- Header
- Login
- Sign Up


## Features

- Login/Sign Up
    - Sign In / Sign up form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists * N
- Nebula GPT
    - Search Bar
    - Movie Suggestions



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [scaledImage, setScaledImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Simulate response
      setTimeout(() => {
        setScaledImage(preview); // Simulated scaled image (same image)
        setLoading(false);
      }, 1500);

      // Uncomment when backend is ready
      /*
      const response = await axios.post('http://localhost:5000/scale-cheque', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setScaledImage(response.data.scaledImageURL);
      */
    } catch (err) {
      console.error('Scaling failed:', err);
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Cheque AI Scaler</h1>

      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Upload Cheque Image
        </label>
        <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleImageChange} />
      </div>

      {preview && (
        <div className="mb-4">
          <h5>Original Image:</h5>
          <img src={preview} alt="Original Cheque" className="img-fluid border rounded" style={{ maxWidth: '100%' }} />
        </div>
      )}

      <button className="btn btn-primary" onClick={handleSubmit} disabled={loading || !image}>
        {loading ? 'Scaling...' : 'Scale with AI'}
      </button>

      {scaledImage && (
        <div className="mt-5">
          <h5>Scaled Image:</h5>
          <img src={scaledImage} alt="Scaled Cheque" className="img-fluid border border-success rounded" />
        </div>
      )}
    </div>
  );
}

export default App;
