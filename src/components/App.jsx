import '../styles/App.scss';
import Header from './Header';
import ImagesGallery from './ImagesGallery';
import Benefits from './Benefits';
import Characteristics from './Characteristics';
import Kundalini from './Kundalini';
import Postures from './Postures';
import Footer from './Footer';
import Form from "./Form";
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  { url: 'https://widemat.com/wp-content/uploads/2015/09/postura-de-yoga-la-monta%C3%B1a.jpg', alt: 'tadasana' },
  { url: 'https://widemat.com/wp-content/uploads/2015/12/Postura-Dandasana.jpg', alt: 'dandasana' },
  { url: 'https://www.fitsri.com/wp-content/uploads/2020/07/merudandasana-spinal-column-pose-1024x683.jpg', alt: 'merudandasana' },
  { url: 'https://xuanlanyoga.com/wp-content/uploads/2015/02/postura-del-loto.jpg', alt: 'sukhasana' },
  { url: 'https://www.relajemos.com/wp-content/uploads/2019/05/malasana-asana-yoga.jpg', alt: 'rana' },
  { url: 'https://media.istockphoto.com/id/846052156/es/foto/joven-atractivo-de-ustrasana-pose-antecedentes-de-estudio.jpg?s=612x612&w=0&k=20&c=9IpeR0LWeZu3VYDacd3DbWLkMCTnHbmFpT_l7Q8mqZk=', alt: 'ushtrasana' },
  { url: 'https://xuanlanyoga.com/wp-content/uploads/2020/07/navasana-postura-del-barco.jpg', alt: 'navasana' },
  { url: 'https://createyouressence.com/wp-content/uploads/2017/10/Half-Boat-Pose-Ardha-Navasana-1.jpg', alt: 'ardha-navasana' },
  { url: 'https://widemat.com/wp-content/uploads/2015/11/postura-del-h%C3%A9roe-o-virasana.jpg', alt: 'vajrasana' },
  { url: 'https://yogateca.com/wp-content/uploads/2013/10/postura-del-gato.jpg', alt: 'marjaryasana' },
]

function App() {
  return (
    <>
    <Header/>
    <ImagesGallery images={images}/>
    <Kundalini/>
    <Benefits/> 
    <Characteristics/>
    <Postures/>
    <Footer className="form" target="_blanck"/>
    <Form id="formulario"></Form>
    </>
  );
}

export default App;