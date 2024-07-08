import Swal from 'sweetalert2';
import { useToast } from '@chakra-ui/react';
import './Card.css';

export default function Card({ color, image, edit, deleteVideo, handleShowVideo }) {
  const border = { '--border-color': color };
  const shadow = { '--box-shadow-color': color };
  const toast = useToast();

  const handleDeleteVideo = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--blue)',
      cancelButtonColor: 'var(--red)',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteToastLoading = new Promise((resolve) => {
          setTimeout(() => resolve(200), 2000);
        });

        deleteToastLoading.then(() => {
          Swal.fire({
            title: '¡Eliminado!',
            text: 'Su video ha sido eliminado.',
            icon: 'success'
          });
          deleteVideo();
        });
        toast.promise(deleteToastLoading, {
          loading: {
            title: 'Eliminando',
            description: 'Por favor espere...',
            position: 'top-right',
            duration: 2000
          },
          success: { title: '', description: '', duration: 0 }
        });
      }
    });
  };
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
          <button className="card_button" onClick={handleDeleteVideo}>
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
