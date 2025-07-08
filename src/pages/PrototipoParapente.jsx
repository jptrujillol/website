import { useState } from 'react';
import Carousel from '../components/Carousel';

export default function PrototipoParapente() {
  const [showCarousel, setShowCarousel] = useState(false);

  const initialImage = '/src/assets/images/prototipo_parapente/DSC02480.jpg';

  const images = [
    '/src/assets/images/prototipo_parapente/DSC02480.jpg',
    '/src/assets/images/prototipo_parapente/DSC02484.jpg',
    '/src/assets/images/prototipo_parapente/DSC02493.jpg',
    '/src/assets/images/prototipo_parapente/DSC02497.jpg',
    '/src/assets/images/prototipo_parapente/DSC02618.jpg',
    '/src/assets/images/prototipo_parapente/DSC02693.jpg',
    '/src/assets/images/prototipo_parapente/DSC02740.jpg',
    '/src/assets/images/prototipo_parapente/DSC02746.jpg',
    '/src/assets/images/prototipo_parapente/DSC02752.jpg',
    '/src/assets/images/prototipo_parapente/DSC02757.jpg',
    '/src/assets/images/prototipo_parapente/DSC02765.jpg',
    '/src/assets/images/prototipo_parapente/DSC02771.jpg',
    '/src/assets/images/prototipo_parapente/DSC02778.jpg',
    '/src/assets/images/prototipo_parapente/DSC02782.jpg',
    '/src/assets/images/prototipo_parapente/DSC02783.jpg',
    '/src/assets/images/prototipo_parapente/DSC02784.jpg',
  ];

  const handleShowCarousel = () => {
    setShowCarousel(true);
  };

  if (showCarousel) {
    return (
      <div className="bg-fp-green min-h-screen w-full">
        <Carousel
          items={images}
          autoAdvanceMs={4000}
          styleContainer="w-screen h-screen"
          indicators={true}
        />
      </div>
    );
  }

  return (
    <div className=" min-h-screen w-full flex flex-col relative">
      <div
        className="w-full h-[70vh] relative  flex items-end justify-center pb-8"
        style={{
          backgroundImage: `url(${initialImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <button
          onClick={handleShowCarousel}
          className="bg-white text-fp-green px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
        >
          Ver Galería Completa
        </button>
      </div>

      <div className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Prototipo Parapente</h1>
          </div>
          {/* Descripción principal */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Es nuestra primera experimentación con formas no convencionales en una cubierta que ha permitido desarrollar el producto que ofrecemos al mercado: la <span className="font-semibold text-fp-green">"Cubierta Parapente"</span>.
            </p>
          </div>

          {/* Equipo */}
          <div className=" rounded-xl p-8 ">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Equipo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-fp-green mb-2">Acero</h4>
                <p className="text-gray-600">Raúl Prada</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-fp-green mb-2">Guadua</h4>
                <p className="text-gray-600">Mauricio Vargas</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-fp-green mb-2">Varios</h4>
                <p className="text-gray-600">Manuel Peñate</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-fp-green mb-2">Mecanizados</h4>
                <p className="text-gray-600">Euclides Timote</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-fp-green mb-2">Audiovisuales</h4>
                <p className="text-gray-600">Juan Camilo Serrano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}