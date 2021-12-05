import './styles/main.scss'
import { Header } from "./cmps/Header";
import { MainView } from './views/MainView';
import { Footer } from './cmps/Footer'
import { BottomNav } from './cmps/BottomNav';

function App() {
  return (
    <section>
      <Header/>
      <MainView/>
      <Footer/>
      <BottomNav/>
    </section>
  );
}

export default App;
