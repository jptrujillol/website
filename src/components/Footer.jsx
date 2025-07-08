import { Link } from 'react-router-dom';
import { FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full' data-testid='footerComponent'>
      <section className='w-full bg-fp-black py-4 px-8 flex flex-col md:flex-row justify-between items-center'>
        {/* Logo Aviva */}
        <div className='mb-4 md:mb-0'>
          <h3 className='text-white text-4xl font-extrabold'>Aviva</h3>
        </div>
        {/* Iconos sociales */}
        <div className='flex space-x-6'>
          <Link to='https://www.pinterest.com/' target='_blank' rel='noopener noreferrer' aria-label='Pinterest'>
            <FaPinterest className='text-2xl text-fp-white hover:text-fp-yellow transition' />
          </Link>
          <Link to='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <FaInstagram className='text-2xl text-fp-white hover:text-fp-yellow transition' />
          </Link>
          <Link to='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FaLinkedin className='text-2xl text-fp-white hover:text-fp-yellow transition' />
          </Link>
        </div>
      </section>
      <section className='w-full bg-fp-black py-2 flex justify-center items-center'>
        <p className='text-white text-xs'>Derechos reservados</p> 
      </section>
    </footer>
  );
}