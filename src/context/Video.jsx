import { useState, useEffect, useContext, createContext } from 'react';

const VideoContext = createContext();

export const useVideos = () => useContext(VideoContext);

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3001/videos');
        const data = await response.json();
        setVideos(data || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (video) => {
    try {
      const response = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
      });
      const data = await response.json();
      setVideos((videos) => [...videos, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      await fetch(`http://localhost:3001/videos/${id}`, {
        method: 'DELETE'
      });
      setVideos((video) => video.filter((video) => video.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
