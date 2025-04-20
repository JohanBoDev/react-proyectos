import { useState } from "react";
import img from './assets/img.jpg'

function App() {
  const productosDisponibles = [
    {
      id: 1,
      nombre: "Balon",
      precio: 20000,
      imagen: img
    },
    {
      id: 2,
      nombre: "Celular",
      precio: 2520000,
      imagen: img
    },
    {
      id: 3,
      nombre: "Forro de celular",
      precio: 18000,
      imagen: img
    },
    {
      id: 4,
      nombre: "Perfume",
      precio: 230000,
      imagen: img
    },
    {
      id: 5,
      nombre: "Reloj",
      precio: 65000,
      imagen: img
    },
    {
      id: 6,
      nombre: "Cargador",
      precio: 10000,
      imagen: img
    },
    {
      id: 7,
      nombre: "Libro",
      precio: 50000,
      imagen: img
    },
    {
      id: 8,
      nombre: "Alcancia",
      precio: 2700,
      imagen: img
    },
    {
      id: 9,
      nombre: "Laptop Asus",
      precio: 2300000,
      imagen: img
    },
    {
      id: 10,
      nombre: "Desodorante",
      precio: 6000,
      imagen: img
    },
  ]

  const [carrito, setCarrito] = useState([])
  const [mostrarCarrito, setmostrarCarrito] = useState(false)

  const agregarCarrito = (id) => {
    // Busca el producto que coincide con el id
    const productoEncontrado = productosDisponibles.find(producto => producto.id === id);

    // Si lo encuentra, lo agrega al carrito
    if (productoEncontrado) {
      setCarrito([...carrito, productoEncontrado]);
      console.log(`Producto agregado: ${productoEncontrado.nombre}`);
    }
  };

  const elimianarProductoCarrito = (index) => {
    const nuevoCarrito = carrito.filter((producto, i) => i !== index);
    setCarrito(nuevoCarrito)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0) / 1


  return (
    <div className="relativo overflow-x-hidden"><main className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-zinc-900 text-white p-10 relative ">
      <header className="absolute top-10 right-12">
        <button onClick={() => setmostrarCarrito(!mostrarCarrito)} className="border border-white p-4 flex items-center justify-center rounded-full hover:cursor-pointer"><i class="fas fa-shopping-cart text-xl relative"></i><span className="text-white text-[12px] bg-red px-1 py-0.5 top-0 right-0 rounded-full absolute bg-red-500">{carrito.length}</span></button>
      </header>
      <h1 className="text-4xl font-bold">Productos disponibles
      </h1>


      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {productosDisponibles.map((producto, indice) => (
          <div className=" rounded-3xl bg-gray-400/30 flex flex-col relative" key={producto.id}>
            <img className="rounded-t-2xl" src={producto.imagen} alt="Imagen del producto" />
            <div className="mx-5 mt-2 flex justify-between">
              <p> {producto.nombre}</p>
              <span className="font-bold">Precio: {producto.precio}</span>
            </div>

            <p className="absolute top-2 right-1 bg-green-500 p-2 rounded-full text-white font-bold">Disponible</p>
            <button onClick={() => agregarCarrito(producto.id)} className="p-3 m-5 rounded-2xl bg-green-500 cursor-pointer">Agregar al carrito</button>
          </div>
        ))}
      </ul>
    </main>
      {mostrarCarrito && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 flex items-center justify-center ">
          <section className="bg-black rounded-2xl p-10 w-[700px] h-auto relative">
            <h1 className="text-center text-white font-bold mb-5">Tu carrito</h1>
            <button
              onClick={() => setmostrarCarrito(!mostrarCarrito)}
              className="absolute top-4 right-4 text-white text-xl hover:cursor-pointer"
            >
              ✕
            </button>

            {
              carrito.length > 0 ? (
                <><div className="flex flex-col gap-y-5 justify-start">
                  {carrito.map((producto, indice) => (
                    <li key={indice} className="h-20 flex border border-gray-200 bg-gray-400/20 p-3 justify-between items-center rounded-2xl">
                      <div className="flex h-full gap-x-5">
                        <img className="h-full" src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                        <div className="flex flex-col">
                          <p className="text-white ">{producto.nombre}</p>
                          <span className="font-bold text-white">{producto.precio}</span>
                        </div>
                      </div>
                      <button
                        className="py-2  px-3 border border-red-500 bg-red-500/20 rounded-full hover:bg-red-500/40"
                        onClick={() => elimianarProductoCarrito(indice)}
                      >
                        <i className="fa-solid fa-trash text-red-500"></i>
                      </button>

                    </li>
                  ))}
                </div>
                  <div className="flex items-center justify-between mt-10">
                    <button onClick={vaciarCarrito} className="text-white bg-gray-400/30 p-2 border border-gray-500 cursor-pointer rounded-2xl">Vaciar carrito</button>
                    <p className="text-white text-right font-bold text-lg ">
                      Total: ${total}
                    </p>
                  </div>

                </>



              ) : (
                <div>
                  <h1 className="text-white text-2xl mb-4">Carrito</h1>
                  <p className="text-white">No tienes productos</p>
                </div>
              )
            }

          </section>
        </div>

      )}

    </div>
  );
}

export default App;
