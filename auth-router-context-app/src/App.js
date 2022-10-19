import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components./../layout/Main'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path:'/', 
          element: <Home></Home>
        },
        {
          path: '/orders',
          element:<PrivateRoute>Orders</PrivateRoute>

        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;