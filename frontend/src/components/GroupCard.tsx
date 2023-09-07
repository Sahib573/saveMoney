import React, { useState } from 'react';

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
        <div className="max-w-sm rounded overflow-hidden border-b border-[#514644] shadow-lg bg-[#efc8b1]">
            <div className="px-6 py-4">
                <div className="flex justify-between">
                    <div
                        className={`font-semibold text-xl mb-2 ${isOpen ? 'text-blue-600' : 'text-black'
                            }`}
                    >
                        {groupName}
                    </div>
                    <button
                        onClick={toggleCard}
                        className="float-right rounded-full bg-[#514644] text-white p-2 hover:bg-yellow transition-colors duration-300 ease-in-out"
                    >
                        {isOpen ? 'Show Less ↑' : 'Show More ↓'}
                    </button>
                </div>
                <div
                    className={`transition-max-height ease-out duration-300 ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
                        }`}
                >
                    <p className="text-lg text-gray-800">
                        Total Expenses: ${totalExpenses.toFixed(2)}
                    </p>
                    <ul className="mt-3">
                        {members.map((member, index) => {
                            const amountOwed = amountsOwed[index];
                            const isOwing = amountOwed > 0;

                            return (
                                <li key={index} className="text-lg">
                                    {member}<p className={`text-base ${isOwing ? 'text-green' : 'text-red'}`}>{isOwing ? 'Owes You' : 'You Owe'}: ${Math.abs(amountOwed).toFixed(2)}</p>

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
