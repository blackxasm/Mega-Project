import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TransactionHistory from './pages/Transactions/TransactionHistory';
import SupportPage from './pages/Support/Support';
import Wallet from './pages/Wallet/wallet';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />
//   },
//   {
//     path: "/transactions",
//     element: <Transactions />
//   },
// ]);

function App() {
  return (
    <>
    <Wallet/>
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App;
