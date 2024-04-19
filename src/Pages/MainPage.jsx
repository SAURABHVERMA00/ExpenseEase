import React from "react";
import ContentPage from '../Pages/ContentPage'
import NewUser from '../components/NewUser'
import ExistingUser from '../components/ExistingUser'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ExistingUser />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/existing-user",
    element: <ExistingUser />,
  },
]);
const MainPage = () => {
  return (

    <div className="container flex">
      <main className="bg-sky-500 w-1/2 h-[100vh] flex items-center justify-center">
        <ContentPage />
      </main>
      <div className="w-0 " style={{ borderRight: "12vw solid transparent", borderTop: "100vh solid #0ea5e9" }}></div>
      <main className="bg-white w-1/2 flex flex-col justify-center items-center">
        <h1 className='text-center mt-4 mb-10 text-black font-bold text-7xl'>Expense<span className='text-sky-500'>Ease</span></h1>
        <div className=" h-[28rem]">
          <RouterProvider router={router} />
        </div>
      </main>
    </div>

  );
};

export default MainPage;
