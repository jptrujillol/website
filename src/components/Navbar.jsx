import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar border-0 fixed top-0 left-0 w-full z-50 ">
      <div className="bg-black/55 w-fullflex items-center justify-between h-16 px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-amber-50">
            Aviva
          </Link>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

       
        </div>
      </div>

      {isOpen && (
        <div className="bg-black/75 px-4 py-2 space-y-2 h-screen">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }) {
  const baseClasses =
    "block px-1 py-2 rounded text-center text-gray-100 bg-transparent transition border-b-2 border-transparent hover:border-white";
  return (
    <>
      <NavLink to="/" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Home</NavLink>
      <NavLink to="/brochure" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Brochure</NavLink>
      <NavLink to="/prototipo" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Prototipo</NavLink>
      <NavLink to="/prototipo-parapente" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Prototipo Parapente</NavLink>
      <NavLink to="/cubierta-parapente" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Cubierta Parapente</NavLink>
      <NavLink to="/contacto" className={({ isActive }) => `${baseClasses} ${isActive ? 'border-fp-yellow' : ''}`}>Contacto</NavLink>
    </>
  );
}