import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Header from './layouts/Header';


const App = () => {
  return (
    <section className='w-full min-h-screen  text-white'>
      <Header />
      <LandingPage />
      <Marquee />
    </section>
  );
};

export default App;
