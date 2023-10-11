import './App.css'
import Header from './components/header/Header'
import DisplaySection from './components/display_section/Display_Section';
import SearchBarSection from './components/search_bar_section/Search_Bar_Section';
import ImgOfTheDay from './pages/imgOfTheDay';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <DisplaySection />
      <SearchBarSection />
      <ImgOfTheDay />
      <Footer />
    </>
  )
}

export default App;
