import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    comentarios: ''
  });

  const [errors, setErrors] = useState({
    nombre: false,
    telefono: false,
    comentarios: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    const newErrors = {
      nombre: formData.nombre.trim() === '',
      telefono: formData.telefono.trim() === '',
      comentarios: formData.comentarios.trim() === ''
    };
    setErrors(newErrors);
    
    // Verifica si hay errores
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      alert('Formulario enviado con éxito');
      console.log('Datos enviados:', formData);
    } else {
      alert('Por favor, completa todos los campos obligatorios');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <span style={{ color: 'red' }}>Campo obligatorio</span>}
      </div>
      
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        {errors.telefono && <span style={{ color: 'red' }}>Campo obligatorio</span>}
      </div>
      
      <div>
        <label>Comentarios adicionales:</label>
        <textarea
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
        />
        {errors.comentarios && <span style={{ color: 'red' }}>Campo obligatorio</span>}
      </div>
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
