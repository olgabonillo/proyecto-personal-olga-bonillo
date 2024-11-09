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

  //.trim() para eliminar los espacios en blanco del string
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
      alert(
        "Gracias por contactar con nosotros. El formulario se ha enviado correctamente y nos pondremos en contacto contigo en la mayor brevedad posible."
      );
      console.log("Datos enviados:", formData);
    } else {
      alert("Por favor, completa todos los campos obligatorios");
    }
  };

  // Estado para controlar la visibilidad del formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Función para manejar el clic en el enlace
  const manejarClick = () => {
    setMostrarFormulario(!mostrarFormulario); // Alterna entre true y false
  };


  return (
    //Todos los campos los pongo obligatorios
    //Creo el primer div con un ID para mostrar el formulario cuando hagan click 
    <>
      <div id="form">
      <a href="#formulario" onClick={manejarClick}>
        {mostrarFormulario}
      </a>
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
              <span style={{ color: "red" }}>Campo obligatorio*</span>
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
              <span style={{ color: "red" }}>Campo obligatorio*</span>
            )}
          </div>
          <div className="div-form">
            <label className="label">Comentarios adicionales:</label>
            <div className="coment-form">
              <textarea
                className="input"
                type="text"
                name="comentarios"
                placeholder="Ej: Me gustaría informarme más..."
                value={formData.comentarios}
                onChange={handleChange}
              />
              {errors.comentarios && (
                <span style={{ color: "red" }}>Campo obligatorio*</span>
              )}
            </div>
          </div>
          <button type="submit" className="button-form">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
