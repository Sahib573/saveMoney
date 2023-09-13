import { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import img1 from "../images/user/user-02.png";
import img2 from "../images/user/user-03.png";
import img3 from "../images/user/user-04.png";
import add from "../images/icon/icons8-add-64.png";
import minus from "../images/icon/icons8-minus-48.png";

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Email to send to the backend:', email);

    setEmail('');
  };
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  //   useEffect(() => {
  //     const data = fetch("url");
  //     setcontactList((contactList) => [...contactList, data]);
  //   });
  const [showDiv, setShowDiv] = useState(false);
  const [buttonImage, setButtonImage] = useState(add);

  const toggleInvite = () => {
    setShowDiv(!showDiv);
    setButtonImage(showDiv ? add : minus);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 xl:gap-7.5">
        <div
          onClick={toggleInvite}

          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#5B39CF] py-4 px-10 text-center font-medium text-white hover:bg-[#8D80EE] lg:px-8 xl:px-10"
        >

          <img src={buttonImage} className="h-5 w-5" alt="" />
          Add Friends
        </div>
        {showDiv &&
          (<div>
            <h2 className="italic text-[#5B39CF]">
              <ReactTyped strings={["Let each spend Become a Trend!!!"]} typeSpeed={100} loop />
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <input type="email"
                  id="emailInput"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="friendsMail@gmail.com"
                  className="w-full h-8 rounded-lg p-2 bg-transparent	border" />
                <button type="submit" className="ml-2 h-8 rounded-lg bg-[#5B39CF] p-1 text-white hover:bg-blue">Invite!</button>
              </div>
            </form>
          </div>)
        }
      </div>
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
