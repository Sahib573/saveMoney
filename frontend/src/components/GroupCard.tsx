import React, { useState } from 'react';

interface GroupCardProps {
    groupName: string;
    totalExpenses: number;
    members: string[];
}

const GroupCard: React.FC<GroupCardProps> = ({
    groupName,
    totalExpenses,
    members,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`max-w-sm overflow-hidden shadow-lg border-2 ${isOpen ? 'border-blue-400 bg-white' : 'border-gray-300 bg-gray-100'
                } hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out ${isOpen ? 'rounded-lg' : 'rounded'
                }`}
        >
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
                        className={`float-right rounded-full ${isOpen ? 'bg-red-400' : 'bg-blue-400'
                            } text-pink p-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out`}
                    >
                        {isOpen ? 'Show Less' : 'Show More'}
                    </button>
                </div>
                {isOpen && (
                    <>
                        <p className="text-lg text-gray-800">
                            Total Expenses: ${totalExpenses.toFixed(2)}
                        </p>
                        <ul className="mt-3">
                            {members.map((member, index) => (
                                <li key={index} className="text-base text-gray-700">
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default GroupCard;
