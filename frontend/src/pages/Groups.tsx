import GroupCard from "../components/GroupCard";

const Groups = () => {
  const groups = [
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
    {
      groupName: "End Sem Party",
      totalExpenses: 7750,
      members: ["Ram", "Sham", "Keval", "Kush"],
      amountsOwed: [50000.0, 25000.0, 750.0, -6000.0],
    },
    {
      groupName: "Another Party",
      totalExpenses: 5000,
      members: ["Alice", "Bob", "Carol"],
      amountsOwed: [-2000.0, 2500.0, -500.0],
    },
  ];

  return (
    <div>
      <h1>Show Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {groups.map((group, index) => (
          <div key={index} className="max-h-80">
            <GroupCard
              groupName={group.groupName}
              totalExpenses={group.totalExpenses}
              members={group.members}
              amountsOwed={group.amountsOwed}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
