import { useRef, useState } from 'react';

export default function Contacto() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const nombre = form[0].value;
    const correo = form[1].value;
    const whatsapp = form[2].value;
    const telefono = form[3].value;
    const mensaje = form[4].value;
    const text =
      `Nuevo contacto AVIVA:\n\n` +
      `Nombre:\t\t${nombre}\n` +
      `Correo:\t\t${correo}\n` +
      `Whatsapp:\t${whatsapp}\n` +
      `Teléfono:\t${telefono}\n` +
      `Mensaje:\t${mensaje}`;
    const url = `https://wa.me/573003918442?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-neutral-400 min-h-screen w-full flex items-center justify-center px-4 md:px-12">
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-white/80 p-4 md:p-8 flex flex-col gap-6">
        {/* Sección superior */}
        <div className="w-full bg-fp-gray-80 rounded-xl shadow-md p-8 flex flex-col justify-center items-center min-h-[180px]">
          <h3 className="font-bold text-white text-lg mb-2 text-center">El próximo proyecto innovador puede ser el tuyo.</h3>
          <p className="text-white text-sm mb-2 text-center">En nuestra empresa, creemos que las grandes ideas merecen tomar forma. Por eso, te ayudamos a llevar tu visión al siguiente nivel con servicios de prototipado en 3D adaptados a las necesidades de tu compañía. Ya sea un producto, una pieza especializada o un modelo funcional, podemos acompañarte desde el concepto hasta su materialización.</p>
        </div>
        {/* Sección inferior */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-x-8 min-h-[400px]">
          {/* Izquierda vacía */}
          <div className="flex-1 bg-fp-gray-80 rounded-xl">
            <p>izquierda</p>
          </div>
          {/* Derecha: Formulario */}
          <div className="flex-1 bg-fp-gray-80 rounded-xl shadow-md p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Contáctanos</h2>
            {sent && (
              <div className="mb-4 text-center text-fp-yellow font-semibold bg-fp-green/80 rounded p-2 animate-fade-in">
                ¡Mensaje enviado! Se ha abierto WhatsApp para completar el envío.
              </div>
            )}
            <form className="space-y-4" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              <div className="input-with-icon">
                <span className="icon-user input-icon" />
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full border-0 border-b border-white p-3 pl-10 rounded-none text-white placeholder-white bg-fp-green/80 focus:ring-0 focus:border-fp-yellow"
                  required
                />
              </div>
              <div className="input-with-icon">
                <span className="icon-envelope input-icon" />
                <input
                  type="email"
                  placeholder="Correo"
                  className="w-full border-0 border-b border-white p-3 pl-10 rounded-none text-white placeholder-white bg-fp-green/80 focus:ring-0 focus:border-fp-yellow"
                  required
                />
              </div>
              <div className="input-with-icon">
                <span className="icon-whatsapp input-icon" />
                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="w-full border-0 border-b border-white p-3 pl-10 rounded-none text-white placeholder-white bg-fp-green/80 focus:ring-0 focus:border-fp-yellow"
                />
              </div>
              <div className="input-with-icon">
                <span className="icon-phone input-icon" />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full border-0 border-b border-white p-3 pl-10 rounded-none text-white placeholder-white bg-fp-green/80 focus:ring-0 focus:border-fp-yellow"
                />
              </div>
              <div className="input-with-icon">
                <span className="icon-message input-icon" />
                <textarea
                  placeholder="Mensaje"
                  className="w-full border-0 border-b border-white p-3 pl-10 rounded-none h-20 text-white placeholder-white bg-fp-green/80 focus:ring-0 focus:border-fp-yellow"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-fp-yellow hover:bg-fp-bright-blue text-white font-bold py-2 px-6 rounded transition w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}