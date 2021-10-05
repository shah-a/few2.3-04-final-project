import Header from './Header';
import ArrayList from './ArrayList';
import ConfigList from './ConfigList';
import Footer from './Footer';

const App = () => (
  <div className="App min-h-screen flex flex-col bg-blue-500 items-center">
    <Header />
    <main>
      <ArrayList />
      <ConfigList />
    </main>
    <Footer />
  </div>
);

export default App;
