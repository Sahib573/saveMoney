import GroupCard from '../components/GroupCard';

const Groups = () => {
    const groups = [
        {
            groupName: 'Sunday Outing',
            totalExpenses: 1500,
            members: ['Sahib', 'Kush', 'Parul'],
        },
        {
            groupName: 'Trip to canada',
            totalExpenses: 87750,
            members: ['Somesh', 'Sahib', 'Parul', 'Kush'],
        },
    ];
    return (
        <>
            Show Groups
            <div className="grid grid-rows-4  gap-4 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                {groups.map((group, index) => (
                    <GroupCard
                        key={index}
                        groupName={group.groupName}
                        totalExpenses={group.totalExpenses}
                        members={group.members}
                    />
                ))}
            </div>

        </>
    )
}
export default Groups;