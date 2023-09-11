import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Para que no se pierdan los datos cuando se recarga
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  //Persistencia de los datos en LocalStorage
  useEffect(() => {
    if (pacientes.length > 0) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (pacienteState) => pacienteState.id !== id
    );
    setPacientes(pacientesActualizados);
    console.log(pacientesActualizados);
  };
  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />

          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
