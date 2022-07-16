
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './componentsHomePage/HeaderNavbar'
import FooterHat from './componentsHomePage/FooterHat';
import HeaderAdmin from './admin/HeaderAdmin';
function App() {
  return (
    <div className="App"> 
      {/* <HeaderNavbar></HeaderNavbar> */}
      <HeaderAdmin></HeaderAdmin>
      <FooterHat></FooterHat>
    </div>
  );
}

export default App;
