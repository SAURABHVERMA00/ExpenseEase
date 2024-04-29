
import React, { useRef ,useState} from 'react';

const UserBox = ({userId,userName,userAccount,Amount}) => {

 
  const [isChecked, setIsChecked] = useState(false);

  // const handleRadioChange = () => {
  //   setIsChecked(prevState => !prevState); // Toggle the checked state
  // };
  

  return (
    <div id='main'  className="  p-4 m-3 border-1 border-gray-300 bg-red-500 text-black rounded flex flex-col ">
    <table className="w-full ">
      <tbody className=''>
        <tr className="">
          <td className="pr-4 font-semibold text-lg">{userId}</td>
          <td className=" font-semibold text-lg">{userName}</td>
          <td className="pr font-semibold text-lg">{userAccount}</td>
          <td className="text-lg  font-semibold">Rs. {Amount}</td>
        </tr>
      </tbody>
    </table>
    <div className='  flex justify-end items-center'>

    <input
        type="radio"
        id="pending"
        name="status"
        value='pending'

        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      />
    <label htmlFor="pending"  className="font-semibold text-black px-1 cursor-pointer">Pending...</label>
    </div>

  </div>
  )
}

export default UserBox