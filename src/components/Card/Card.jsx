import './Card.css';

export default function Card({ color }) {
  const border = { '--border-color': color };
  const shadow = { '--box-shadow-color': color };

  return (
    <div className="card_container" style={border}>
      <div className="card_image" style={shadow}>
        <img src="/img/image1.png" alt="Video Image" />
      </div>
      <div>
        <div className="group_button" style={shadow}>
          <button className="card_button">
            <img src="/icon/trash.svg" alt="Trash Icon" />
            <span>BORRAR</span>
          </button>
          <button className="card_button">
            <img src="/icon/edit.svg" alt="Edit Icon" />
            <span>EDITAR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
