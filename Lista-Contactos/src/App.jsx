import { useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState({ nombre: "", edad: "", correo: "", cedula: "" })
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [indiceEditar, setIndiceEditar] = useState(null);

  const iniciarEdicion = (indice) => {
  setUsuario(listaUsuarios[indice]);
  setIndiceEditar(indice);
};


const agregarUsuario = (e) => {
  e.preventDefault();

  if (usuario.nombre && usuario.edad && usuario.correo && usuario.cedula) {
    if (indiceEditar !== null) {
      const nuevaLista = [...listaUsuarios];
      nuevaLista[indiceEditar] = usuario;
      setListaUsuarios(nuevaLista);
      setIndiceEditar(null);
      alert("Usuario editado exitosamente");
    } else {
      setListaUsuarios([...listaUsuarios, usuario]);
      alert("Usuario agregado exitosamente");
    }

    setUsuario({ nombre: "", edad: "", correo: "", cedula: "" });
  } else {
    alert("Debes completar todos los campos");
  }
};


  
const eliminarUsuario = (indice) => {
  const nuevaLista = listaUsuarios.filter((usuario, i) => i !== indice);
  setListaUsuarios(nuevaLista);
};

  const mostrarUsuarios = () => {
    if (listaUsuarios.length === 0) {
      return <p className='mt-20'>No tienes contactos mi friend</p>
    }
    return<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full px-4">
  {listaUsuarios.map((usuario, indice) => (
    <div key={indice} className="bg-zinc-800 text-white rounded-xl shadow-md p-5 border border-zinc-700 mb-5">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Contacto #{indice + 1}</h2>
        <span className="text-sm text-zinc-400">Cédula: {usuario.cedula}</span>
      </div>
      <div className="space-y-1 text-sm">
        <p><span className="font-semibold">Nombre:</span> {usuario.nombre}</p>
        <p><span className="font-semibold">Edad:</span> {usuario.edad}</p>
        <p><span className="font-semibold">Correo:</span> {usuario.correo}</p>
      </div>
      <div className="mt-4 flex gap-2">
<button
  onClick={() => iniciarEdicion(indice)}
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
>
  Editar
</button>
<button
  onClick={() => eliminarUsuario(indice)}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
>
  Eliminar
</button>      </div>
    </div>
  ))}
</div>



  }


  return (
    <main className="min-h-screen min-w-screen flex   bg-zinc-900 text-white gap-y-5">
      <section className='w-1/2 mt-20 flex flex-col items-center'>
        <h1 className="text-2xl font-bold">Tus contactos</h1>
        {mostrarUsuarios()}
      </section>
      <section className='w-1/2  flex flex-col items-center border-l-2 border-white'>
        <div className='mt-20'>
          <h1 className='text-2xl font-bold'>Agregar contacto</h1>
          <form  action="">
<fieldset className="border border-gray-300 p-6 rounded-xl mt-10 shadow-sm max-w-md w-full mx-auto">
  <legend className="text-lg font-bold text-white px-2">Datos del contacto</legend>

  <div className="flex flex-col gap-4 mt-4">
    <div className="flex flex-col">
      <label className="text-sm text-white mb-1">Nombre</label>
      <input
        type="text"
        placeholder="Nombre del contacto"
        onChange={e => setUsuario({...usuario, nombre:e.target.value})}
        value={usuario.nombre}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-white mb-1">Edad</label>
      <input
        type="number"
        placeholder="Edad del contacto"
        value={usuario.edad}
        onChange={e => setUsuario({...usuario, edad: e.target.value})}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-white mb-1">Correo</label>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={usuario.correo}
        onChange={e=> setUsuario ({...usuario, correo: e.target.value})}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-white mb-1">Cédula</label>
      <input
        type="text"
        placeholder="Cédula"
        value={usuario.cedula}
        onChange={e => setUsuario ({...usuario, cedula: e.target.value})}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </div>
<button
  onClick={agregarUsuario}
  className='mt-5 bg-green-600 p-2 cursor-pointer rounded-2xl'
>
  {indiceEditar !== null ? 'Guardar cambios' : 'Agregar contacto'}
</button>
</fieldset>
          </form>
        </div>
      </section>

    </main>
  );
}

export default App;
