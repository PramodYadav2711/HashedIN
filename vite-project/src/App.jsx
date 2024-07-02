import Fold1 from './Sections/Fold1';
import Fold2 from './Sections/Fold2';
import Footer from './Sections/Footer';
import Header from './Sections/Header';

function App() {
  return (
    <div className='bg-slate-600'>
      <Header />
      <Fold1 />
      <Fold2 />
      <Footer />
    </div>
  );
}

export default App;
