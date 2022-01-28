import React, {useEffect, useState} from 'react';
import Carousel from './components/Carousel';
import axios from 'axios';
import {Photo} from './types';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await axios.get('https://608b28b3737e470017b74834.mockapi.io/api/photos');
      setPhotos(data);
    };
    fetchImages();
  }, []);

  return (
    <div>
      <Carousel data={photos} />
    </div>
  );
}

export default App;
