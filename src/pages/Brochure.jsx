import Carousel from '../components/Carousel';

export default function Brochure() {
  const images1 = [
    '/src/assets/images/m1_estructura.jpg',
    '/src/assets/images/m2_fijacion.jpg',
    '/src/assets/images/m3_tejido.jpg',
    '/src/assets/images/m4_borde.jpg',
    '/src/assets/images/m5_camilla.jpg',
    '/src/assets/images/m6_acabado.jpg',
  ];

  const images2 = [
    '/src/assets/images/0_esquina.jpg',
    '/src/assets/images/0_esquina2.jpg',
    '/src/assets/images/0_borde.jpg',
    '/src/assets/images/0_lateral.jpg',
    '/src/assets/images/0_frontal.jpg',
    '/src/assets/images/0_union.jpg',
    '/src/assets/images/3_esquina1.jpg',
    '/src/assets/images/3_fontalGente.jpg',
    '/src/assets/images/3_frontal.jpg',
    '/src/assets/images/3_lateral.jpg',
    '/src/assets/images/3_union.jpg',
  ];

  const images3 = [
    '/src/assets/images/4_perspectiva.jpg',
    '/src/assets/images/4_lateral.jpg',
    '/src/assets/images/4_frontal.jpg',
    '/src/assets/images/4_planta.jpg',
  ];

  const images4 = [
    '/src/assets/images/1_fondoInicio.jpg',
    '/src/assets/images/7_fondo.jpg',
    '/src/assets/images/0_tejido.jpg',
    '/src/assets/images/s_GuaduasPila.jpg',
    '/src/assets/images/s_GuaduasVerdeAmarillo.jpg',
    '/src/assets/images/s_HojasGuadua.jpg',
    '/src/assets/images/s_HojaGuadua.jpg',
  ];
  const images5 = [

  ]

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-4 grid-cols-1 grid-rows-4 gap-x-8  gap-y-12 mx-auto my-20">
        <div className="col-span-2 row-span-1 place-content-end" >
          <h1 class="text-2xl font-bold  text-center text-yellow-400 mb-8 overline">Diseño Innovador con Tecnología Avanzada</h1>
          <p class="text-fp-gray-80 text-sm mb-4">
            Esta <strong>cubierta prefabricada con forma de cascarón</strong> representa la evolución del reconocido <em>“prototipo Parapente”</em>. Su estructura de acero sostiene un tejido artesanal de guadua, logrando una fusión armoniosa entre tradición y tecnología.
          </p>
          <p class="text-fp-gray-80 text-sm mb-4">
            Gracias al uso de herramientas avanzadas de diseño y fabricación, ofrecemos una estructura <strong>sin elementos planos</strong>, con una geometría fluida que genera un <strong>impacto visual único</strong> y posiciona esta pieza como un referente en arquitectura innovadora.
          </p>
        </div>
        <div className="col-span-2 row-span-2 rounded-lg shadow-md  ">
          <Carousel items={images2} autoAdvanceMs={5000} styleContainer="w-full h-full" indicators={false} />
        </div>
        <div className="col-span-2 row-span-1">
          <h2 class="text-xl font-bold text-yellow-400 text-center mb-4">Compromiso Ambiental y Selección Consciente de Materiales</h2>
          <ul class="list-disc pl-6 text-fp-gray-80 text-sm">
            <li>
              La <strong>estructura modular de la cubierta</strong> facilita su desmontaje durante reparaciones o mantenimientos, permitiendo la separación eficiente de materiales y reduciendo la cantidad de residuos y procesos adicionales.
            </li>
            <li>
              El uso de <strong>guadua natural</strong> contribuye positivamente al medio ambiente: captura <strong>CO₂</strong> y genera <strong>oxígeno</strong> hasta el momento de su cosecha.
            </li>
            <li>
              La guadua es tratada con <strong>minerales biodegradables</strong>, no contaminantes para el suelo ni el agua, asegurando un manejo responsable del recurso.
            </li>
            <li>
              En los acabados, optamos por <strong>alternativas de bajo impacto ambiental</strong>, disponibles en el mercado, sin comprometer la calidad ni la estética del diseño.
            </li>
          </ul>
        </div>
        <div className="col-span-2 row-span-2 rounded-lg shadow-md">
          <Carousel items={images1} autoAdvanceMs={5000} styleContainer="w-full h-full" indicators={false} />
        </div>
        <div className="col-span-2 row-span-2 place-content-center">
          <h1 class="text-2xl font-extrabold text-center mb-8  overline">Prototipo Parapente</h1>

          <div className="mb-4">
            <h2 class="text-md font-bold text-fp-gray-80 mb-2">Estructura Principal</h2>
            <p class="text-fp-gray-80 text-sm">
              Conformada por columnas y vigas en tubos metálicos de 2” de diámetro, garantiza una base sólida, duradera y resistente para todo el sistema.
            </p>
          </div>

          <div className="mb-4">
            <h2 class="text-md font-bold text-fp-gray-80 mb-2">Acabado Final</h2>
            <p class="text-fp-gray-80 text-sm">
              Disponible en dos opciones:
            </p>
            <ul class="list-disc pl-6 text-fp-gray-80 mt-2">
              <li><strong>Estuco impermeable:</strong> con varias capas de pintura, ideal para un estilo más contemporáneo.</li>
              <li><strong>Teja Shingle:</strong> para una apariencia elegante y de alta resistencia a la intemperie.</li>
            </ul>
          </div>

        </div>



        <div className="col-span-2 row-span-2  place-content-end">
          <h2 class="text-2xl font-semibold text-center mb-4 overline" style={{ color: '#b2c46c' }}>Dimensiones Técnicas</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-fp-gray-80 place-content-end">
            <div class="col-span-2 md:col-span-1 bg-fp-white p-4 rounded-lg shadow  ">
              <p><strong>Área cubierta:</strong> 15 m²</p>
              <p><strong>Largo de cubierta:</strong> 5.2 m</p>
              <p><strong>Ancho de cubierta:</strong> 3.6 m</p>
            </div>
            <div class="col-span-2 md:col-span-1 bg-fp-white p-4 rounded-lg shadow  ">
              <p><strong>Largo entre apoyos:</strong> 6 m</p>
              <p><strong>Ancho entre apoyos:</strong> 2.8 m</p>
              <p><strong>Altura mínima:</strong> 2.05 m</p>
            </div>
            <div class="col-span-2 bg-fp-white p-4 rounded-lg shadow  ">
              <p><strong>Altura máxima:</strong> 3.0 m</p>
              <p><strong>Altura máxima de arco:</strong> 2 m</p>
              <p><strong>Altura intermedia de cubierta:</strong> 2.35 m</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 rounded-lg shadow-md  ">
          <Carousel items={images3} autoAdvanceMs={5000} styleContainer="w-full h-full" indicators={false} />
        </div>


        <div className="col-span-1 row-span-2  justify-self-end place-content-center">
          <Carousel items={images4} autoAdvanceMs={5000} styleContainer="w-full h-full md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg md:rounded-full shadow-md" indicators={false} />
        </div>
        <div className="col-span-2 md:col-span-3  row-span-2 place-content-center mx-6" >
          <h1 class="text-2xl font-extrabold text-center mb-8  overline">Sistema Constructivo Artesanal y Sostenible</h1>

          <div className="mb-4">
            <h2 class="text-md font-bold text-fp-gray-80 mb-2">Remate de Borde Natural</h2>
            <p class="text-fp-gray-80 text-sm">
              El tejido de guadua es cuidadosamente amarrado con tiras adicionales que refuerzan los bordes, aportando firmeza y un acabado con apariencia rústica y orgánica.
            </p>
          </div>

          <div className="mb-4">
            <h2 class="text-md font-bold text-fp-gray-80 mb-2">Soporte de Acabado</h2>
            <p class="text-fp-gray-80 text-sm">
              Una camilla elaborada en tiras de guadua sirve de base para la instalación del manto asfáltico impermeabilizante, protegiendo eficazmente la estructura contra la humedad.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}