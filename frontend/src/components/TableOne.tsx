import BrandOne from "../images/brand/brand-01.svg";
import BrandTwo from "../images/brand/brand-02.svg";
import BrandThree from "../images/brand/brand-03.svg";
import BrandFour from "../images/brand/brand-04.svg";
import BrandFive from "../images/brand/brand-05.svg";

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Today's Transaction
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Serial No.
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Description
            </h5>
          </div>

          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>

          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div>

        <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
              
            </div> */}
            <p className="text-center my-3 text-black dark:text-white sm:block">
              1
            </p>
            {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              Ate maggi at Student center
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">Rs100</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">Food</p>
          </div>

          {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">4.8%</p>
          </div> */}
        </div>

        <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
              
            </div> */}
            <p className="text-center my-3 text-black dark:text-white sm:block">
              1
            </p>
            {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              Ate maggi at Student center
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">Rs100</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">Food</p>
          </div>

          {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">4.8%</p>
          </div> */}
        </div>
        <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
              
            </div> */}
            <p className="text-center my-3 text-black dark:text-white sm:block">
              1
            </p>
            {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              Ate maggi at Student center
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">Rs100</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">Food</p>
          </div>

          {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">4.8%</p>
          </div> */}
        </div>
        <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
              
            </div> */}
            <p className="text-center my-3 text-black dark:text-white sm:block">
              1
            </p>
            {/* <p className="hidden text-black dark:text-white sm:block">Google</p> */}
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              Ate maggi at Student center
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">Rs100</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">Food</p>
          </div>

          {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">4.8%</p>
          </div> */}
        </div>

        {/* <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandFive} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              Facebook
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">1.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$2,740</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">230</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">1.9%</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TableOne;
