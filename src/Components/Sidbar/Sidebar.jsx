import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-BfNap0Pe.png';
import './Sidebar.scss';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
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
  );
}

export default Sidebar;