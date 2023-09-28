import Breadcrumb from "../components/Breadcrumb";
import AnalyticsCompareChart from "../components/AnalyticsCompareChart";
import AnalyticsPieChart from "../components/AnalyticsPieChart";
import AnalyticsCompareCategoryChart from "../components/AnalyticsCompareCategoryChart";

const Analytics = () => {
  return (
    <>
      <Breadcrumb pageName="Anal" />
      <div className="mt-4 grid grid-cols-10 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ">
        <AnalyticsCompareChart />
        <AnalyticsCompareCategoryChart />
        <AnalyticsPieChart />
      </div>
    </>
  );
};

export default Analytics;
