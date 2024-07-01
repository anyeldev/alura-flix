import Form from '../../components/Form/Form';

export default function New() {
  return (
    <>
      <div className="title_container">
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <Form titleForm="Crear Tarjeta" />
    </>
  );
}
