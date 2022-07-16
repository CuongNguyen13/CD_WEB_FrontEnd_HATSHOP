
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './componentsHomePage/HeaderNavbar'
import FooterHat from './componentsHomePage/FooterHat';
import HeaderAdmin from './admin/HeaderAdmin';
function App() {
  const checkAdmin = sessionStorage.getItem("admin");
  
  return (
    <div className="App"> 
      {checkAdmin!==null?<HeaderAdmin></HeaderAdmin>:<HeaderNavbar></HeaderNavbar>}
      <FooterHat></FooterHat>
    </div>
  );
}

export default App;
