import './App.css';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header'
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <>
    <Header/>
    <Outlet>
    <About/>
    <Contact/>
    <Body/>
    </Outlet>
    <Footer/>
    </>
  );
}
export const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  }
])
export default App;

