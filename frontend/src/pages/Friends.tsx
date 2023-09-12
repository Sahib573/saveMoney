import { useEffect, useState } from "react";
import img1 from "../images/user/user-02.png";
import img2 from "../images/user/user-03.png";
import img3 from "../images/user/user-04.png";

type Friend = {
  url: string;
  email: string;
  name: string;
  mobile: number;
  address: {
    city: string;
    country: string;
  };
};
const Friends = () => {
  const [contactList, setcontactList] = useState<Array<Friend> | undefined>([
    {
      url: img2,
      email: "sahib@gmail.com",
      name: "sahib singh",
      mobile: 7056953669,
      address: {
        city: "Kurukshetra",
        country: "India",
      },
    },
    {
      url: img3,
      email: "kush@gmail.com",
      name: "Kush Aggarwal",
      mobile: 7056953669,
      address: {
        city: "Kaithal",
        country: "India",
      },
    },
    {
      url: img1,
      email: "Ayushi@gmail.com",
      name: "Ayushi Gupta",
      mobile: 7056953669,
      address: {
        city: "Kurukshetra",
        country: "India",
      },
    },
  ]);
  //   useEffect(() => {
  //     const data = fetch("url");
  //     setcontactList((contactList) => [...contactList, data]);
  //   });
  return (
    <>
      <div className="flex gap-x-10px flex-wrap justify-items-center">
        {contactList?.map((contact, index) => (
          <figure
            className="bg-white text-white m-3 p-2 min-w-[45%] rounded-lg shadow-md hover:scale-105 transition"
            key={index}
          >
            <img
              alt="user"
              className="w-25 h-25 rounded-full mx-auto mt-7"
              src={contact.url}
            />
            <figcaption className="text-center mt-5">
              <p className="text-black font-semibold text-xl mb-2">
                {contact.name}
              </p>
              <p className="text-black">
                <span className="font-medium">email: </span>
                {contact.email}
              </p>
              <p className="text-black">
                <span className="font-medium">phone: </span>
                {contact.mobile}
              </p>
              <p className="text-black">
                <span className="font-medium">city: </span>
                {contact.address.city}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};
export default Friends;
