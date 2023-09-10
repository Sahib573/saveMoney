import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import GroupDetailCard from "../../components/GroupDetailsCard";

interface Group {
    groupName: string;
    totalExpenses: number;
    members: string[];
    amountsOwed: number[];
}

const GroupDetail: React.FC = () => {
    const { groupName } = useParams<{ groupName: string }>();


    const groups: Group[] = [
        {
            groupName: "Sunday Outing",
            totalExpenses: 1500,
            members: ["Sahib", "Kush", "Parul"],
            amountsOwed: [+50.0, +25.0, -75.0],
        },
        {
            groupName: "Trip to Canada",
            totalExpenses: 87750,
            members: ["Somesh", "Sahib", "Parul", "Kush"],
            amountsOwed: [+50000.0, -25000.0, 750.0, 6000.0],
        },

    ];

    // Url basis
    const selectedGroup = groups.find((group) => group.groupName === groupName);


    return (
        <>
            <Breadcrumb pageName="Groups" />
            <div>
                <h1>Group Details</h1>
                {selectedGroup ? (
                    <GroupDetailCard
                        groupName={selectedGroup.groupName}
                        totalExpenses={selectedGroup.totalExpenses}
                        members={selectedGroup.members}
                        amountsOwed={selectedGroup.amountsOwed}
                    />
                ) : (
                    <p>Group not found.</p>
                )}
            </div>
        </>
    );
};

export default GroupDetail;
