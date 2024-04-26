import React from 'react'
import ExpenseEaselogo from '../assets/ExpenseEase.png'

function MainPageDashboard() {
  return (
    <div className='h-screen w-screen bg-sky-500'>
      <section className='h-screen w-1/5 lg:w-1/6 md:w-1/5 bg-white relative flex flex-col justify-between'>
        {/* --------------- LOGO FOR THE SITE --------- */}
        <div className='flex space-x-1 justify-center items-center p-2 lg:pe-4 pt-3'>
          <img src={ExpenseEaselogo} alt="" srcset="" width={'40px'} />
          <h1 className='text-[30px] hidden md:block lg:block'>Expenses<span className='text-sky-500 '>Ease</span> </h1>
        </div>

        {/* --------------- MENU ITEMS -------------- */}
        <div className='h-4/6'>
          <div className='flex flex-col space-x-3 mb-2 lg:ms-2 md:ms-2'>
            <p className='text-sky-500 text-center md:text-left lg:text-left ps-0 lg:ps-2 md:ps-2 text-[15px]'>Menu</p>
            <ul>
              <li className='mb-2 mt-2  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <span className='text-[17px] hidden md:block lg:block'>Dashboard</span>
                </button>
              </li>
              <li className='mb-2 mt-2  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>

                  <span className='text-[17px] hidden md:block lg:block'>Expenses</span>
                </button>
              </li>
              <li className='mb-2 mt-2  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>

                  <span className='text-[17px] hidden md:block lg:block'>Card</span>
                </button>
              </li>
              <li className='mb-2 mt-2  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>

                  <span className='text-[17px] hidden md:block lg:block'>Transaction</span>
                </button>
              </li>

            </ul>
          </div>
          <div className='flex flex-col space-x-3 lg:ms-2 md:ms-2'>
            <span className='text-sky-500 text-center md:text-left lg:text-left ps-0 lg:ps-2 md:ps-2 text-[15px] '>General</span>
            <ul>
              <li className='mb-1 mt-2  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>

                  <span className='text-[17px] hidden md:block lg:block'>FAQ</span>
                </button>
              </li>
              <li className='mb-2 mt-1  hover:bg-sky-500 hover:text-white rounded-l-lg'>
                <button className='flex space-x-1 justify-center md:justify-start lg:justify-start items-center w-5/6 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>

                  <span className='text-[17px] hidden md:block lg:block'>Settings</span>
                </button>
              </li>

            </ul>
          </div>
        </div>

        <div className=' flex justify-center items-center p-3'>
          <button className='flex space-x-1 justify-center items-center hover:text-sky-500'>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            <span className='text-[17px] hidden md:block lg:block' >LogOut</span>
          </button>
        </div>
      </section>

      <section>

      </section>
    </div>
  )
}

export default MainPageDashboard
