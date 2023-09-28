import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import GroupDetailCard from "../../components/GroupDetailsCard";

interface Member {
    name: string;
    amountOwed: number;
}

interface Expense {
    description: string;
    amount: number;
}

interface Group {
    name: string;
    totalExpenses: number;
    members: Member[];
    expenses: Expense[];
}

const GroupDetail: React.FC = () => {
    const { groupName } = useParams<{ groupName: string }>();

    const groups: Group[] = [
        {
            name: "Sunday Outing",
            totalExpenses: 1500,
            members: [
                { name: "Sahib", amountOwed: +50.0 },
                { name: "Kush", amountOwed: +25.0 },
                { name: "Parul", amountOwed: -75.0 },
            ],
            expenses: [
                { description: "Food", amount: 500 },
                { description: "Tickets", amount: 1000 },
            ],
        },
        {
            name: "Trip to Canada",
            totalExpenses: 87750,
            members: [
                { name: "Somesh", amountOwed: +50000.0 },
                { name: "Sahib", amountOwed: -25000.0 },
                { name: "Parul", amountOwed: 750.0 },
                { name: "Kush", amountOwed: 6000.0 },
            ],
            expenses: [
                { description: "Flight", amount: 60000 },
                { description: "Accommodation", amount: 25000 },
                { description: "Meals", amount: 2500 },
            ],
        },
    ];
    const selectedGroup = groups.find((group) => group.name === groupName);

    return (
        <>
            <Breadcrumb pageName="Groups" />
            <div>
                {selectedGroup ? (
                    <GroupDetailCard group={selectedGroup} />
                ) : (
                    <p>Group not found.</p>
                )}
            </div>
        </>
    );
};

export default GroupDetail;
