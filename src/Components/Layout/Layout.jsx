import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidbar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout() {
  return <>
    <div className="layout">
        <Sidebar/>
      {/* <header>
        <h1>Recipe App</h1>
      </header> */}
      <main className="main-content">
        <Outlet />
       
      </main>
      
    </div>
     <Footer />
  </>;
}

export default Layout;