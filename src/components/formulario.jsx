import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar el CSS de Bootstrap

function FormAlumnos() {
    // Definir el estado para los diferentes tipos de datos
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [esEstudiante, setEsEstudiante] = useState(false);
    const [direccion, setDireccion] = useState("");
    const [hobbies, setHobbies] = useState([]);
    const [nuevoHobby, setNuevoHobby] = useState("");
    const [alumnos, setAlumnos] = useState([]);

    // Manejar cambios en los inputs
    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleEdadChange = (e) => setEdad(e.target.value);
    const handleEsEstudianteChange = (e) => setEsEstudiante(e.target.checked);
    const handleDireccionChange = (e) => setDireccion(e.target.value);
    const handleNuevoHobbyChange = (e) => setNuevoHobby(e.target.value);

    // Agregar un nuevo hobby al array
    const agregarHobby = () => {
        setHobbies([...hobbies, nuevoHobby]); 
        setNuevoHobby("");
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoAlumno = {
            nombre,
            edad,
            esEstudiante,
            direccion,
            hobbies
        };
        setAlumnos([...alumnos, nuevoAlumno]);

        // Limpiar el formulario después de enviar
        setNombre("");
        setEdad("");
        setEsEstudiante(false);
        setDireccion("");
        setHobbies([]);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="card-title">Formulario de Alumnos</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombre}
                                        onChange={handleNombreChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Edad:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={edad}
                                        onChange={handleEdadChange}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={esEstudiante}
                                        onChange={handleEsEstudianteChange}
                                    />
                                    <label className="form-check-label">Es estudiante</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dirección:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={direccion}
                                        onChange={handleDireccionChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Hobbies:</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={nuevoHobby}
                                            onChange={handleNuevoHobbyChange}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={agregarHobby}
                                        >
                                            Agregar Hobby
                                        </button>
                                    </div>
                                    <ul className="list-group mt-2">
                                        {hobbies.map((hobby, index) => (
                                            <li key={index} className="list-group-item">{hobby}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button type="submit" className="btn btn-primary">Agregar Alumno</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Lista de Alumnos</h2>
                        </div>
                        <ul className="list-group list-group-flush">
                            {alumnos.map((alumno, index) => (
                                <li key={index} className="list-group-item">
                                    {alumno.nombre}, {alumno.edad} años, {alumno.esEstudiante ? "Estudiante" : "No estudiante"}, {alumno.direccion}, Hobbies: {alumno.hobbies.join(", ")}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAlumnos;
