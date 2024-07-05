import { useVideos } from '../../context/Video';
import Form from '../../components/Form/Form';

export default function New() {
  const { addVideo } = useVideos();

  return (
    <>
      <div className="title_container">
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <Form titleForm="Crear Tarjeta" onSubmit={addVideo} />
    </>
  );
}
