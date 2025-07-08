export default function CubiertaParapente() {
  return (
    <div className=" min-h-screen w-full flex flex-col relative">
      <div className="w-full h-[70vh] relative flex items-end justify-center pb-8 overflow-hidden">
        <video
          src="/src/assets/videos/alrededor.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        
      </div>

      <div className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Cubierta Parapente</h1>
            <p className="text-xl text-fp-green font-medium italic">innovador, artesanal y curvo</p>
          </div>

          {/* Botones de navegación */}
          <div className="text-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="/brochure" 
              className="inline-block bg-fp-green text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
            >
              Ver presentación
            </a>
            <a 
              href="/prototipo-parapente" 
              className="inline-block bg-white text-fp-green border-2 border-fp-green px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-fp-green hover:text-white transition-all duration-300"
            >
              Prototipo Parapente
            </a>
          </div>

          {/* Descripción del producto */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Es una cubierta de forma no convencional conformada por una estructura de acero que soporta el cascarón de guadua tejido con acabado impermeable. Es nuestro primer producto en el mercado y corresponde a la evolución del <span className="font-semibold text-fp-green">"Prototipo Parapente"</span>.
            </p>
          </div>

          {/* Especificaciones técnicas */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Especificaciones Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-fp-green mb-2">5.1 m</h4>
                <p className="text-gray-600 font-medium">Largo</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-fp-green mb-2">3.4 m</h4>
                <p className="text-gray-600 font-medium">Ancho</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-fp-green mb-2">3.0 m</h4>
                <p className="text-gray-600 font-medium">Altura máxima</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}