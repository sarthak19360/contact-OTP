import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex mx-auto bg-red-200 py-4 justify-around">
      <div className="mr-5 ml-5">Logo</div>
      <div className="flex">
        <div className="mx-5">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="mx-5">
          <Link to={"/contacts"}>Contacts</Link>
        </div>
        <div className="mx-5">
          <Link to={"/history"}>History</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
