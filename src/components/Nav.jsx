import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="py-2 bg-light border-bottom">
      <div className="container d-flex gap-3">
        <NavLink to="/" className="text-decoration-none">Inicio</NavLink>
        <NavLink to="/Login" className="text-decoration-none">Login</NavLink>
        <NavLink to="/Pagina1" className="text-decoration-none">Pagina1</NavLink>
      </div>
    </nav>
  );
}