import React, { useState, useEffect } from "react";

function UserExpense() {
  const [salary, setSalary] = useState(0);
  const [pension, setPension] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);

  const [HomeMortage, setHomeMortage] = useState(0);
  const [HomeInsurance, setHomeInsurance] = useState(0);
  const [HomeMaintainance, setHomeMaintainance] = useState(0);
  const [HomeUtilities, setHomeUtilities] = useState(0);

  const [LivingFood, setLivingFood] = useState(0);
  const [LivingClothing, setLivingClothing] = useState(0);
  const [LivingHouseholdSupplies, setLivingHouseholdSupplies] = useState(0);
  const [LviningOtherExpense, setLviningOtherExpense] = useState(0);

  const [DebtOtherLoan, setDebtOtherLoan] = useState(0);
  const [DebtVehicleLoan, setDebtVehicleLoan] = useState(0);
  const [DebtEducationLoan, setDebtEducationLoan] = useState(0);
  const [DebtCreditCard, setDebtCreditCard] = useState(0);

  const [MiscTravelVacation, setMiscTravelVacation] = useState(0);
  const [MiscEntertainment, setMiscEntertainment] = useState(0);
  const [MiscHobbySport, setMiscHobbySport] = useState(0);
  const [MiscGiftDonation, setMiscGiftDonation] = useState(0);

  
  const [PaymentVendor, setPaymentVendor] = useState("");
  const [PaymentDate, setPaymentDate] = useState("");
  const [PaymentAmount, setPaymentAmount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [totalBudgetOfUser, setTotalBudgetOfUser] = useState(0);
  const [totalExpenseOfUser, setTotalExpenseOfUser] = useState(0);
  const [totalInvestmentOfUser, setTotalInvestmentOfUser] = useState(0);


  useEffect(() => {
    const totalBudget =
      parseFloat(salary) + parseFloat(pension) + parseFloat(otherIncome);
    setTotalBudgetOfUser(totalBudget);
    localStorage.setItem("total_budget", totalBudget.toString());
  }, [salary, pension, otherIncome]);

  useEffect(() => {
    const totalExpense =
      parseFloat(HomeMortage) +
      parseFloat(HomeInsurance) +
      parseFloat(HomeMaintainance) +
      parseFloat(HomeUtilities) +
      parseFloat(LivingFood) +
      parseFloat(LivingClothing) +
      parseFloat(LivingHouseholdSupplies) +
      parseFloat(LviningOtherExpense);
    setTotalExpenseOfUser(totalExpense);
    localStorage.setItem("total_expenses", totalExpense.toString());
  }, [
    HomeMortage,
    HomeInsurance,
    HomeMaintainance,
    HomeUtilities,
    LivingFood,
    LivingClothing,
    LivingHouseholdSupplies,
    LviningOtherExpense,
  ]);

  useEffect(() => {
    const totalInvestment = parseFloat(investments);
    setTotalInvestmentOfUser(totalInvestment);
    localStorage.setItem("total_investment", totalInvestment.toString());
  }, [investments]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const inputWidth = (value) => {
    const minWidth = 90;
    const calculatedWidth = `${value.length * 10}px`;
    return calculatedWidth >= minWidth ? calculatedWidth : `${minWidth}px`;
  };

  const handlePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentVendor("");
      setPaymentDate("");
      setPaymentAmount(0);
      setPaymentSuccess(false);
    }, 2000);
  };


  return (
    <div className="h-full w-full p-4">
      <div className=" lg:flex lg:space-x-4 lg:items-center lg:justify-between md:flex md:space-x-4 md:items-center md:justify-between">
        <div className="lg:w-3/5 lg:flex lg:justify-between lg:items-center lg:space-x-4">
          <div className="lg:w-1/2">
            {/* INCOMES INPUTS */}
            <div className=" bg-white rounded-xl mb-3 lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                INCOMES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Salary & Income</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={salary}
                    onChange={(e) => handleInputChange(e, setSalary)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Pension </label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={pension}
                    onChange={(e) => handleInputChange(e, setPension)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Investments & Savings</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={investments}
                    onChange={(e) => handleInputChange(e, setInvestments)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Other Income</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(salary) }}
                    type="number"
                    value={otherIncome}
                    onChange={(e) => handleInputChange(e, setOtherIncome)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* HOUSING AND UTILITIZE */}
            <div className=" bg-white  rounded-xl mb-3 lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                HOUSING & UTILITIES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Mortage </label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeMortage) }}
                    type="number"
                    value={HomeMortage}
                    onChange={(e) => handleInputChange(e, setHomeMortage)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Home maintainance</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeMaintainance) }}
                    type="number"
                    value={HomeMaintainance}
                    onChange={(e) => handleInputChange(e, setHomeMaintainance)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Insurance</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeInsurance) }}
                    type="number"
                    value={HomeInsurance}
                    onChange={(e) => handleInputChange(e, setHomeInsurance)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Utilities</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(HomeUtilities) }}
                    type="number"
                    value={HomeUtilities}
                    onChange={(e) => handleInputChange(e, setHomeUtilities)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* LIVING EXPENSES */}
            <div className=" bg-white rounded-xl lg:h-52 md:h-52  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                LIVING EXPENSES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Food</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingFood) }}
                    type="number"
                    value={LivingFood}
                    onChange={(e) => handleInputChange(e, setLivingFood)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Clothing</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingClothing) }}
                    type="number"
                    value={LivingClothing}
                    onChange={(e) => handleInputChange(e, setLivingClothing)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Household Supplies</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LivingHouseholdSupplies) }}
                    type="number"
                    value={LivingHouseholdSupplies}
                    onChange={(e) =>
                      handleInputChange(e, setLivingHouseholdSupplies)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>OtherExpense</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(LviningOtherExpense) }}
                    type="number"
                    value={LviningOtherExpense}
                    onChange={(e) =>
                      handleInputChange(e, setLviningOtherExpense)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Loan INPUTS */}
            <div className=" bg-white rounded-xl mb-2  pb-2  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                DEBT & LOAN PAYMENTS
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Credit Card</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtCreditCard) }}
                    type="number"
                    value={DebtCreditCard}
                    onChange={(e) => handleInputChange(e, setDebtCreditCard)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Education Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtEducationLoan) }}
                    type="number"
                    value={DebtEducationLoan}
                    onChange={(e) => handleInputChange(e, setDebtEducationLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Vehicle Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtVehicleLoan) }}
                    type="number"
                    value={DebtVehicleLoan}
                    onChange={(e) => handleInputChange(e, setDebtVehicleLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Other Loan</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(DebtOtherLoan) }}
                    type="number"
                    value={DebtOtherLoan}
                    onChange={(e) => handleInputChange(e, setDebtOtherLoan)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* MISCELLANEOUS EXPENSES */}
            <div className=" bg-white rounded-xl mb-2  pb-2  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                MISCELLANEOUS EXPENSES
              </div>
              <div className="p-2 ">
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Travel & Vacation</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscTravelVacation) }}
                    type="number"
                    value={MiscTravelVacation}
                    onChange={(e) =>
                      handleInputChange(e, setMiscTravelVacation)
                    }
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Entertainment/ Tickets</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscEntertainment) }}
                    type="number"
                    value={MiscEntertainment}
                    onChange={(e) => handleInputChange(e, setMiscEntertainment)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 mb-2 items-center">
                  <label>Hobbies/Sports</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscHobbySport) }}
                    type="number"
                    value={MiscHobbySport}
                    onChange={(e) => handleInputChange(e, setMiscHobbySport)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div className="flex space-x-3 items-center">
                  <label>Gifts/Donations</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1  w-20"
                    style={{ width: inputWidth(MiscGiftDonation) }}
                    type="number"
                    value={MiscHobbySport}
                    onChange={(e) => handleInputChange(e, setMiscGiftDonation)}
                  />
                  <select>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            {/* PERSONAL PAYMENT */}
            <div className=" bg-white rounded-xl  pb-1  w-full">
              <div className="bg-sky-400 p-2 font-bold rounded-t-xl">
                PAYMENTS
              </div>
              <div className="p-2">
                <div className="flex space-x-3 mb-2 ps-3 items-center">
                  <label>Vendor</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50 "
                    type="text"
                    value={PaymentVendor}
                    onChange={(e) => handleInputChange(e, setPaymentVendor)}
                  />
                </div>
                <div className="flex space-x-8 mb-2 ps-3 items-center">
                  <label>Date</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50"
                    type="date"
                    value={PaymentDate}
                    onChange={(e) => handleInputChange(e, setPaymentDate)}
                  />
                </div>
                <div className="flex space-x-3 mb-2 ps-3 items-center">
                  <label>Amount</label>
                  <input
                    className="border-2 border-[#efefef] rounded-sm ps-1 w-50"
                    type="number"
                    value={PaymentAmount}
                    onChange={(e) => handleInputChange(e, setPaymentAmount)}
                  />
                </div>

                <div className="flex justify-center items-center p-2">
                  <button
                    className="bg-sky-200 w-1/2 rounded-lg  p-1  hover:bg-sky-400 hover:text-white"
                    onClick={handlePayment}
                  >
                    PAY
                  </button>
                </div>

                {paymentSuccess && (
                  <div className="text-green-600 text-center">
                    Payment successful!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="2/5"></div>
      </div>
    </div>
  );
}

export default UserExpense;
