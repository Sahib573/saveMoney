import SettleUpSection from "./SettleUp.tsx";
import ChatCard from "../../components/ChatCard.tsx";

const ECommerce = () => {
  return (
    <>
      <SettleUpSection />

      <div className=" grid grid-cols-10 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChatCard />
      </div>
      {/* Dashboard hai ye bc <br /> Friend list should be cached , multiple uses */}
    </>
  );
};

export default ECommerce;
