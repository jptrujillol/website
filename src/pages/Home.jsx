import Carousel from '../components/Carousel';

export default function Home() {
  const videos = [
    '/src/assets/videos/1_FrontalRecorrido.mp4',
    '/src/assets/videos/2_Frontal.mp4',
    '/src/assets/videos/3_TejidoTarde.mp4',
    '/src/assets/videos/4_TejidoNoche.mp4',
    '/src/assets/videos/5_TejidoSalvo.mp4',
    '/src/assets/videos/6_Timelapse.mp4',
  ];
  return (
    <div className="bg-fp-green min-h-screen w-full flex flex-col items-center justify-center">
      <Carousel items={videos} autoAdvanceMs={5000} />
    </div>
  );
}