import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex p-5">
      <div className="px-3 py-2 bg-green-600 text-white m-4 rounded-lg">
        <Link to={"/contacts"}>Contacts</Link>
      </div>
      <div className="px-3 py-2 bg-blue-600 text-white m-4 rounded-lg">
        <Link to={"/history"}>History</Link>
      </div>
    </div>
  );
};

export default Home;
