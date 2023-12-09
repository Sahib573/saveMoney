import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import GroupCard from "../../components/GroupCard.tsx";
import axios from "axios";

interface Group {
  groupName: string;
  description : string;
  totalExpenses: number;
  members: string[];
  amountsOwed: number[];
}

const Groups: React.FC = () => {

  const [group, setGroup] = useState<Array<Group>>([]);
  const getUser = localStorage.getItem("user");

  useEffect(() => {
    async function submit() {
      if (getUser) {
        const usr = JSON.parse(getUser);
        const _id = usr._id;
        const res = await axios.post("http://localhost:5001/group/getGroups", {
          _id,
        });
        if (res && res.data && res.data.arr) {
          const data = res.data.arr;
          // console.log(data[0].members);
          for (let k = 0; k < data.length; k++) {
            let memArr = [],
            amtArr = [];
            // console.log(data[k].members)
            for (let i = 0; i < data[k].members.length; i++) {
                memArr.push(data[k].members[i].name);
                amtArr.push(data[k].members[i].total);
            }
            const newGroup: Group = {
              groupName: data[k].name,
              description : data[k].description,
              totalExpenses: data[k].total,
              members: memArr,
              amountsOwed: amtArr,
            };
            setGroup((group) => [...group, newGroup]);
          }
        }
      }
    }
    submit();
  },[]);

  return (
    <>
      <Breadcrumb pageName="Groups" />
      <div>
        <h1>Show Groups</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {group.map((group, index) => (
            <div key={index} className="max-h-80">
              <GroupCard
                groupName={group.groupName}
                description = {group.description}
                totalExpenses={group.totalExpenses}
                members={group.members}
                amountsOwed={group.amountsOwed}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Groups;
