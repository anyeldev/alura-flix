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

  return (
    <>
      <section>
        <Title name="FRONT END" bgTitle={color[0]} />
        <div className="card_content">
          {videos
            .filter((video) => video.category === 'frontend')
            .map((video) => (
              <Card key={video.id} {...video} color={color[0]} edit={toggleModal} />
            ))}
        </div>
      </section>

      <section>
        <Title name="BACK END" bgTitle={color[1]} />
        <div className="card_content">
          {videos
            .filter((video) => video.category === 'backend')
            .map((video) => (
              <Card key={video.id} {...video} color={color[1]} edit={toggleModal} />
            ))}
        </div>
      </section>

      <section>
        <Title name="INNOVACIÓN Y GESTIÓN" bgTitle={color[2]} />
        <div className="card_content">
          {videos
            .filter((video) => video.category === 'innovacion')
            .map((video) => (
              <Card key={video.id} {...video} color={color[2]} edit={toggleModal} />
            ))}
        </div>
      </section>

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
