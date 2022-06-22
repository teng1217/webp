import './App.css';
import List from './todo';
import React, { useState } from 'react';
import Button from './button'
function App() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'photoup')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/brian1217/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }


  return (
    <div className="App">
      <h1 style={{ textAlign: 'left' }}>Instagram</h1>
      <div className="left-panel">
      
      <div>{Button(1)}</div>
      <List />
      </div>
      

      <div className="App-header">
      
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '100px' }} />
      )}
      
      <div>{Button(1)}</div>
      <List />
      </div>
      
      


      <div className="right-panel">
      
      <div>{Button(1)}</div>
      <List />
      </div>
    </div>
  );
}

export default App;