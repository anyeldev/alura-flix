import { useState } from 'react';
import { useVideos } from '../../context/Video';
import Title from '../../common/Title';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './Category.css';
import './Modal.css';

export default function Category() {
  const { videos, addVideo, updateVideo, deleteVideo } = useVideos();
  const [showModal, setShowModal] = useState(false);
  const [selectVideo, setSelectVideo] = useState(null);

  const color = ['#6bd1ff', '#00c86f', '#ffba05'];

  const toggleModal = () => {
    setShowModal((isOpen) => !isOpen);
  };

  // select video for edit
  const handleEdit = (video) => {
    setSelectVideo(video);
    setShowModal(true);
  };

  // calls the function to send data if the video is selected
  const handleSubmit = (video) => {
    if (selectVideo) {
      updateVideo({ ...selectVideo, ...video }); // if select, update video
    } else {
      addVideo(video);
    }
    setShowModal(false);
    setSelectVideo(null);
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
              edit={() => handleEdit(video)}
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
            <Form
              titleForm={selectVideo ? 'Editar Video: ' : 'Crear Video'}
              onSubmit={handleSubmit}
              initialValue={selectVideo}
            />
            <button onClick={toggleModal} className="close_button">
              <img src="/icon/close.svg" alt="Close Icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
