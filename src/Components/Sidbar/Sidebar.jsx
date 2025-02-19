import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-BfNap0Pe.png';
import './Sidebar.scss';

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="logo-container">
          <img src={logo} alt="Recipe Logo" className="logo" onClick={() => navigate('/')} />
        </div>
        <nav className="nav-menu">
        <button 
          className="nav-item active" 
          onClick={() => navigate('/')}
        >
          <span className="icon ">🏠</span>
          Meals
        </button>
        <button className="nav-item">
          <span className="icon">📝</span>
          Ingredients
        </button>
        <button className="nav-item">
          <span className="icon">🌍</span>
          Area
        </button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;