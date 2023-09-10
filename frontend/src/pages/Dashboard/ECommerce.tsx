import CardFour from "../../components/CardFour.tsx";
import CardOne from "../../components/CardOne.tsx";
import ColumnChart from "../../components/ColumnChart.tsx";
import ChartFive from "../../components/ChartFive.tsx";
import SettleUpSection from "./SettleUp.tsx";
import CardTwo from "../../components/CardTwo.tsx";
import ChartOne from "../../components/ChartOne.tsx";
import ChartThree from "../../components/ChartThree.tsx";
import ChartTwo from "../../components/ChartTwo.tsx";
import ChatCard from "../../components/ChatCard.tsx";
import MapOne from "../../components/MapOne.tsx";
import TableOne from "../../components/TableOne.tsx";

const ECommerce = () => {
  const chartData = [30, 45, 60, 25, 80]; // Sample data
  const chartLabels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']; // Sample labels
  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <ColumnChart data={chartData} labels={chartLabels} />

        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        
      </div> */}
      <SettleUpSection />

      <div className=" grid grid-cols-10 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <ChartFive />
        <ChartThree />
        <ChartTwo />

        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>

    </>
  );
};

export default ECommerce;
