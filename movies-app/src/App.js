
import MovieProvider from './store/MovieProvider';
import Header from './components/Layouts/Header/Header';
import SideBar from './components/Layouts/SideBar/SideBar';
import Main from './components/Layouts/Main/Main';
import Footer from './components/Layouts/Footer/Footer';
import classes from './App.module.css';

function App() {
  return (
    <MovieProvider>
      <div className={classes.app}>
        <Header />
        <SideBar />
        <Main />
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
