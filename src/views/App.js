import logo from './logo.svg';
import './App.scss';
import '../styles/css/style.css'
import '../styles/vendor/fontawesome-free/css/all.min.css'
import '../styles/vendor/animate.css/animate.min.css'
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/vendor/bootstrap-icons/bootstrap-icons.css'
import '../styles/vendor/boxicons/css/boxicons.min.css'
import '../styles/vendor/glightbox/css/glightbox.min.css'
import '../styles/vendor/remixicon/remixicon.css'
import '../styles/vendor/swiper/swiper-bundle.min.css'





import NavBar from './Components/NavBar';
import TopBar from './Components/TopBar';
import Main from './Components/Main';
import Header from './Components/Header';



export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {

  return (

    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"></link>
      <TopBar />
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto"><a href="index.html">Medilab</a></h1>
          <NavBar />
        </div>
      </header>

      <Header />
      <Main />

      { }



    </>


  );
}

export default App;
