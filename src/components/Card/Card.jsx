import './Card.css';

export default function Card({ color, image, edit, deleteVideo }) {
  const border = { '--border-color': color };
  const shadow = { '--box-shadow-color': color };

  return (
    <div className="card_container" style={border}>
      <div className="card_image" style={shadow}>
        <img src={image} alt="Video Image" />
        {/* <iframe
          width="100%"
          height="262px"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
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
