import React from "react";

interface GroupDetailCardProps {
    groupName: string;
    totalExpenses: number;
    members: string[];
    amountsOwed: number[];
}

const GroupDetailCard: React.FC<GroupDetailCardProps> = ({
    groupName,
    totalExpenses,
    members,
    amountsOwed,
}) => {
    return (
        <div className="group-detail-card">
            <h2>{groupName}</h2>
            <p>Total Expenses: {totalExpenses}</p>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        {member}: {amountsOwed[index]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupDetailCard;
