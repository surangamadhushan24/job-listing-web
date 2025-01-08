import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';


const router = createBrowserRouter
(createRoutesFromElements(
<Route path='/' element={<MainLayout/>} >
  <Route index element ={<HomePage  />}/>
  <Route path='/jobs' element ={<JobsPage/>}/>
  <Route path='*' element ={<NotFound/>}/>
</Route>
));


function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;