import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { convertLinkToEmbed } from '../../scripts/linkEmbed';
import Input from '../../common/Input';
import './Form.css';

export default function Form({ titleForm, onSubmit, initialValue }) {
  const toast = useToast();
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

    if (formData.title && formData.link && formData.image && formData.description && formData.category) {
      const linkEmbed = convertLinkToEmbed(formData.link);
      const createToast = new Promise((resolve) => {
        setTimeout(() => resolve(200), 2000);
      });

      createToast.then(() => {
        onSubmit({...formData, link: linkEmbed});
        Clear();
      });

      toast.promise(createToast, {
        loading: { title: 'Guardando', description: 'Por favor espere...', position: 'top-right' },
        success: { title: 'Guardado', description: 'El video ha sido guardado exitosamente.', position: 'top-right', duration: 2500 },
        error: { title: 'Error', description: 'Hubo un problema al guardar el video.', position: 'top-right' }
      });
    } else {
      toast({
        title: 'Formulario incompleto',
        description: 'Por favor complete todos los campos.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
    }
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
          <Button type="submit" title="GUARDAR" className="button" required />
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
