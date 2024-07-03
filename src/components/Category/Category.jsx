import './Category.css';
import './Modal.css';
import Title from '../../common/Title';
import Card from '../Card/Card';

import img1 from '/img/image1.png';
import img2 from '/img/image2.png';
import img3 from '/img/image3.png';
import { useState } from 'react';
import Form from '../Form/Form';

export default function Category() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section>
        <Title name="FRONT END" bgTitle="#6bd1ff" />
        <div className="card_content">
          <Card color="#6bd1ff" image={img1} edit={handleOpenModal} />
          <Card color="#6bd1ff" image={img2} edit={handleOpenModal} />
          <Card color="#6bd1ff" image={img3} edit={handleOpenModal} />
        </div>
      </section>

      <section>
        <Title name="BACK END" bgTitle="#00c86f" />
        <div className="card_content">
          <Card color="#00c86f" image={img1} />
          <Card color="#00c86f" image={img2} />
          <Card color="#00c86f" image={img3} />
        </div>
      </section>

      <section>
        <Title name="INNOVACIÓN Y GESTIÓN" bgTitle="#ffba05" />
        <div className="card_content">
          <Card color="#ffba05" image={img1} />
          <Card color="#ffba05" image={img2} />
          <Card color="#ffba05" image={img3} />
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <Form titleForm="EDITAR CARD: " />
            <button onClick={handleCloseModal} className="close_button">
              <img src="/icon/close.svg" alt="Close Icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
