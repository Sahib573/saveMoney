import Breadcrumb from "../components/Breadcrumb";
import TableTwo from "../components/TableTwo";

const Activities = () => {
  return (
    <>
      <Breadcrumb pageName="Activites" />
      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        <TableTwo title="Today's Transaction" />
        <TableTwo title="Yesterday's Transaction" />
        {/* <TableThree /> */}
      </div>
      {/* Activities */}
    </>
  );
};

export default Activities;
