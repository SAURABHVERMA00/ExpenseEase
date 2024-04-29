import React from "react";
import { useState ,useEffect} from "react";
const Card = () => {
   
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });


  const storeCardDetails = () => {
    localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  };

  // Fetch card details from local storage on component mount
  useEffect(() => {
    const storedCardDetails = localStorage.getItem("cardDetails");
    if (storedCardDetails) setCardDetails(JSON.parse(storedCardDetails));
  }, []);
  // console.log(cardDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    storeCardDetails(); // Update local storage on change
  };
 


 


  return (
    <>
      <div className="card flex overflow-hidden">
        <div className="leftCardside w-1/2   flex flex-col my-16 items-center gap-24">
          <h1 className="text-center text-5xl font-semibold">Your Master Card</h1>
          <div className="w-2/3 relative ">
            <img
              className="rounded-2xl"
              src="./credit_card_bg.jpeg"
              alt="banckground"
            />

            <div className="absolute top-3 left-4">
              <img src="./chip.png" alt="" width={40} />
            </div>
            <div className="absolute top-3 right-5  ">
              <img src="./mastercard.png" alt="mastercrd  " width={80} />
            </div>
            <div className="absolute top-24 left-10 py-10">
              <p className="text-white text-2xl font-semibold">
                # {cardDetails.cardNumber}
              </p>
            </div>
            <div className="absolute bottom-0 left-3 py-7 ">
              <p className="text-white text-lg font-semibold">
                Card Holder Name
              </p>
              <p className="text-white text-lg font-semibold">
                {cardDetails.cardHolderName}
              </p>
            </div>
            <div className="absolute bottom-0 right-20 py-7 ">
              <p className="text-white text-lg font-semibold">Expires</p>
              <p className="text-white text-lg font-semibold">{cardDetails.expiryDate}</p>
            </div>
            <div className="absolute bottom-0 right-5  py-7 ">
              <p className="text-white text-lg font-semibold">CVV </p>
              <p className="text-white text-lg font-semibold">{cardDetails.cvv}</p>
            </div>
          </div>
        </div>

        <div className="rightCardside w-1/2 flex flex-col items-center my-16  ">
          <div className="">
            <h1 className=" text-5xl font-semibold">
              {" "}
              Payment Details :
            </h1>
            <form className=" my-10 ">
              <div className="flex flex-col justify-center gap-3 my-10 ">
                <label className="text-2xl font-semibold" for="cardHolderName">
                  Card Holder Name :
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg   block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Card Holder Name"
                  required
                  name="cardHolderName"
                  value={cardDetails.cardHolderName}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="flex flex-col justify-center gap-3 my-8">
                <label className="text-2xl font-semibold" for="cardNumber">
                  Card Number :
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg   block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Card Number  (5555 5555 5555 5555) "
                  required
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex  justify-center items-center">
                <div className="flex flex-col mx-3">
                  <label
                    className="text-2xl font-semibold my-3"
                    for="cardNumber"
                  >
                    Expiry Date :
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg   block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Expiry Date (MM/YYYY)"
                    required
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col mx-3 ">
                  <label
                    className="text-2xl font-semibold  my-3"
                    for="cardNumber"
                  >
                    CVV :
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg   block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="CVV (919)"
                    required
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  class="text-white w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  
                 >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
