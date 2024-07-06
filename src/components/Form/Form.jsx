import { useState, useEffect } from 'react';
import Input from '../../common/Input';
import './Form.css';

export default function Form({ titleForm, onSubmit, initialValue }) {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    image: '',
    description: '',
    category: ''
  });

  // update form when initialValue change
  useEffect(() => {
    if (initialValue) {
      setFormData(initialValue);
    }
  }, [initialValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    Clear();
  };

  function Clear() {
    setFormData({
      title: '',
      link: '',
      image: '',
      description: '',
      category: ''
    });
  }

  return (
    <section className="form_section">
      <div className="title_form">
        <h3>{titleForm}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <Input
            titleInput="Título"
            type="text"
            placeholder="Ingrese el título"
            className="input"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <div className="input_select input">
            <label>Categoría</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="" disabled>
                Seleccione una categoría
              </option>
              <option value="frontend">FRONT END</option>
              <option value="backend">BACK END</option>
              <option value="innovacion">INNOVACIÓN Y GESTIÓN</option>
            </select>
          </div>

          <Input
            titleInput="Imagen"
            type="url"
            placeholder="El enlace es obligatorio"
            className="input"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <Input
            titleInput="Video"
            type="url"
            placeholder="Ingrese el enlace del vídeo"
            className="input"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />

          <div className="input_select input">
            <label htmlFor="textArea">Descripción</label>
            <textarea
              id="textArea"
              name="description"
              placeholder="¿De qué se trata este vídeo?"
              rows="5"
              value={formData.description}
              onChange={handleChange}
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
    <button className="button" type={type} onClick={onClick}>
      {title}
    </button>
  );
}
