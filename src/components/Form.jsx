import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState({
    nombre: false,
    telefono: false,
    comentarios: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    const newErrors = {
      nombre: formData.nombre.trim() === "",
      telefono: formData.telefono.trim() === "",
      comentarios: formData.comentarios.trim() === "",
    };
    setErrors(newErrors);

    // Para verificar si hay errores
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      alert("Formulario enviado con éxito");
      console.log("Datos enviados:", formData);
    } else {
      alert("Por favor, completa todos los campos obligatorios");
    }
  };

  return (
    //Todos los campos los pongo obligatorios
    <form onSubmit={handleSubmit} className="form">
      <div className="div-form">
        <label className="label">Nombre:</label>
        <input
          className="input"
          type="text"
          name="nombre"
          placeholder="Ej: Laura"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && (
          <span style={{ color: "red" }}>Campo obligatorio</span>
        )}
      </div>

      <div className="div-form">
        <label className="label">Teléfono:</label>
        <input
          className="input"
          type="tel"
          name="telefono"
          placeholder="Ej: 612345678"
          value={formData.telefono}
          onChange={handleChange}
        />
        {errors.telefono && (
          <span style={{ color: "red" }}>Campo obligatorio</span>
        )}
      </div>

      <div className="div-form">
        <label className="label">Comentarios adicionales:</label>
        <textarea
          className="input-text"
          type="text"
          name="comentarios"
          placeholder="Ej: Me gustaría que os pongáis en contacto conmigo para informarme acerca de las clases..."
          value={formData.comentarios}
          onChange={handleChange}
        />
        {errors.comentarios && (
          <span style={{ color: "red" }}>Campo obligatorio</span>
        )}
      </div>
      <button type="submit" className="button-form">
        Enviar
      </button>
    </form>
  );
};

export default Form;
