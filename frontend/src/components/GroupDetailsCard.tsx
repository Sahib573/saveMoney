import React from "react";

interface GroupDetailCardProps {
    group: {
        name: string;
        totalExpenses: number;
        members: {
            name: string;
            amountOwed: number;
        }[];
        expenses: {
            description: string;
            amount: number;
        }[];
    };
}

const GroupDetailCard: React.FC<GroupDetailCardProps> = ({ group }) => {
    return (
        <div className="bg-[#5B39CF] text-white shadow-md rounded-md p-4 m-4">
            <h2 className="text-2xl font-semibold mb-2">{group.name}</h2>
            <p className="text-gray-600">Total Expenses: ${group.totalExpenses}</p>

            <div className="mt-2">
                <h3 className="text-lg font-semibold mb-1">Group Expenses:</h3>
                <ul>
                    {group.expenses.map((expense, index) => (
                        <li key={index} className="flex justify-between py-1 border-b border-gray-300">
                            <span className="text-gray-800">{expense.description}</span>
                            <span>${expense.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-1">Members:</h3>
                <ul>
                    {group.members.map((member, index) => (
                        <li key={index} className="flex justify-between py-1 border-b border-gray-300">
                            <span className="text-gray-800">{member.name}</span>
                            <span style={{ color: member.amountOwed >= 0 ? '#39FF14' : '#FF0000' }}>
                                {member.amountOwed >= 0 ? `+$${member.amountOwed}` : `-$${Math.abs(member.amountOwed)}`}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GroupDetailCard;
