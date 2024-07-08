import './Card.css';

export default function Card({ color, image, edit, deleteVideo, handleShowVideo }) {
  const border = { '--border-color': color };
  const shadow = { '--box-shadow-color': color };

  return (
    <div className="card_container" style={border}>
      <div className="card_image" style={shadow} onClick={handleShowVideo}>
        <div className="play_icon">
          <img src="/icon/play.svg" alt="Play Icon" />
        </div>
        <img src={image} alt="Video Image" />
      </div>
      <div>
        <div className="group_button" style={shadow}>
          <button className="card_button" onClick={deleteVideo}>
            <img src="/icon/trash.svg" alt="Trash Icon" />
            <span>BORRAR</span>
          </button>
          <button className="card_button" onClick={edit}>
            <img src="/icon/edit.svg" alt="Edit Icon" />
            <span>EDITAR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
