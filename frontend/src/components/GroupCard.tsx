import React, { useState } from "react";
import { Link } from "react-router-dom";

interface GroupCardProps {
  groupName: string;
  totalExpenses: number;
  members: string[];
  amountsOwed: number[];

}

const GroupCard: React.FC<GroupCardProps> = ({
  groupName,
  totalExpenses,
  members,
  amountsOwed,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-sm rounded hover:shadow-md overflow-hidden hover:scale-105 transition duration-500 ease-in-out hover:shadow-black-100 bg-[#5B39CF]">
      <div className="px-6 py-4">
        <div className="flex justify-between items-left">
          <div className={`font-semibold text-xl text-white flex items-center gap-2`}>
            {/* <Link to={`/groups/groupdetail`}> */}
            <Link to={`/groups/${groupName}`}>
              <span>{groupName}</span>
            </Link>
            {isOpen && (
              <button
                title="Add Expense"
                className="text-white bg-[#7A3DDF] rounded-full w-7 h-7 p-0 justify-center hover:bg-[#F6C11E]"
              >
                <span>+</span>
              </button>
            )}
          </div>

          <div>
            <button
              onClick={toggleCard}
              className="float-right rounded-full bg-[#7A3DDF] text-white p-2 hover:bg-yellow transition-colors duration-300 ease-in-out"
            >
              {isOpen ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        </div>
        <div
          className={`transition-max-height ease-out duration-300 ${isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
            }`}
        >
          <p className="text-lg text-white">
            Total Expenses: ${totalExpenses.toFixed(2)}
          </p>
          <ul className="mt-3">
            {members.map((member, index) => {
              const amountOwed = amountsOwed[index];
              const isOwing = amountOwed > 0;

              return (
                <li key={index} className="text-white text-lg">
                  {member}
                  <p
                    className={`text-base ${isOwing ? "text-[#00F609]" : "text-[#FC5E3A]"
                      }`}
                  >
                    {isOwing ? "Owes You" : "You Owe"}: $
                    {Math.abs(amountOwed).toFixed(2)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
