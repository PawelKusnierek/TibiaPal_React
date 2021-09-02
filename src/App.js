import Header from './components/Header'
import Banner from './components/Banner'
import RightHeader from './components/RightHeader'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'
import LeftFooterSpace from './components/LeftFooterSpace'
import Footer from './components/Footer'
import RightFooterSpace from './components/RightFooterSpace'

function App() {
  return (
    <div id="main-container">
      <Header />
      <Banner />
      <RightHeader />
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
      <LeftFooterSpace />
      <Footer />
      <RightFooterSpace />
    </div>
  );
}

export default App;
