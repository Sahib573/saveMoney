import ProductOne from "../images/product/product-01.png";
import ProductTwo from "../images/product/product-02.png";
import ProductThree from "../images/product/product-03.png";
import ProductFour from "../images/product/product-04.png";
import edit from "../images/icon/edit.png";
import { Props } from "react-apexcharts";

const TableTwo = (props: Props) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {props.title}
        </h4>
      </div>

      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Serial</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Total Paid</p>
        </div>

        {/* <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div> */}
      </div>

      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">1 </p>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" />
            </div> */}
            <p className="text-black dark:text-white">
              Ate maggi at student center
            </p>
            <img src={edit} className="h-6 w-6 ml-1" />
          </div>
        </div>

        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-black dark:text-white">Food and Beverages</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-black dark:text-white">$443</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div> */}
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$247</p>
        </div> */}
      </div>
      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">1.</p>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" />
            </div> */}
            <p className="text-black dark:text-white">
              Ate maggi at student center
            </p>
            <img src={edit} className="h-6 w-6 ml-1" />
          </div>
        </div>

        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-black dark:text-white">Food and Beverages</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-black dark:text-white">$443</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div> */}
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$247</p>
        </div> */}
      </div>
      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">1.</p>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" />
            </div> */}
            <p className="text-black dark:text-white">
              Ate maggi at student center
            </p>
            <img src={edit} className="h-6 w-6 ml-1" />
          </div>
        </div>

        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-black dark:text-white">Food and Beverages</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-black dark:text-white">$443</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">64</p>
        </div> */}
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$247</p>
        </div> */}
      </div>
    </div>
  );
};

export default TableTwo;
