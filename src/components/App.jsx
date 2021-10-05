import Header from './Header';
import ArrayList from './ArrayList';
import ConfigList from './ConfigList';
import Footer from './Footer';

const App = () => (
  <div className="App min-h-screen flex flex-col bg-gradient-to-tl from-blue-400 to-blue-600 items-center">
    <Header />
    <main className="my-12 w-5/6 max-w-lg md:max-w-6xl md:flex md:flex-row-reverse md:items-start md:space-x-5 md:space-x-reverse">
      <ArrayList />
      <ConfigList />
    </main>
    <Footer />
  </div>
);

export default App;
