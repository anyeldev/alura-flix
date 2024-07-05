import { useState, useEffect } from 'react';
import Title from '../../common/Title';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './Category.css';
import './Modal.css';

export default function Category() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const color = ['#6bd1ff', '#00c86f', '#ffba05'];

  const toggleModal = () => {
    setShowModal((isOpen) => !isOpen);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3001/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

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

  const videoFilter = (category, color) => {
    const filteredVideos = videos.filter((video) => video.category === category);
    if (filteredVideos.length === 0) return null;

    return (
      <section>
        <Title name={category.toUpperCase()} bgTitle={color} />
        <div className="card_content">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              {...video}
              color={color}
              edit={toggleModal}
              deleteVideo={() => deleteVideo(video.id)}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      {videoFilter('frontend', color[0])}
      {videoFilter('backend', color[1])}
      {videoFilter('innovacion', color[2])}

      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <Form titleForm="EDITAR CARD: " />
            <button onClick={toggleModal} className="close_button">
              <img src="/icon/close.svg" alt="Close Icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
