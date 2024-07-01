import Input from '../../common/Input';
import './Form.css';

export default function Form({ titleForm }) {
  return (
    <section className="form_section">
      <div className="title_form">
        <h3>{titleForm}</h3>
      </div>

      <form>
        <div className="form_container">
          <Input
            titleInput="Título"
            type="text"
            placeholder="Ingrese el título"
            className="input"
          />
          <div className="input_select input">
            <label>Categoría</label>
            <select defaultValue="" required>
              <option value="" disabled>
                Seleccione una categoría
              </option>
              <option value="1">FRONT END</option>
              <option value="2">BACK END END</option>
              <option value="3">INNOVACIÓN Y GESTIÓN</option>
            </select>
          </div>

          <Input
            titleInput="Imagen"
            type="url"
            placeholder="El enlace es obligatorio"
            className="input"
          />
          <Input
            titleInput="Video"
            type="url"
            placeholder="Ingrese el enlace del vídeo"
            className="input"
          />

          <div className="input_select input">
            <label htmlFor="textArea">Descripción</label>
            <textarea
              id="textArea"
              placeholder="¿De qué se trata este vídeo?"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <div className="group">
          <Button type="submit" title="GUARDAR" className="button" />
          <Button type="button" title="LIMPIAR" onClick={Clear} />
        </div>
      </form>
    </section>
  );
}

function Button({ title, type, onClick }) {
  return (
    <>
      <button className="button" type={type} onClick={onClick}>
        {title}
      </button>
    </>
  );
}

function Clear() {
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelectorAll('textarea');
  const select = document.querySelector('select');

  inputs.forEach((input) => {
    input.value = '';
  });

  textareas.forEach((textarea) => {
    textarea.value = '';
  });
  select.selectedIndex = 0; // Restablece el select a la opción predeterminada
}
