import { useSearchParams } from "react-router-dom";
import { contacts } from "../utils/contacts";
import { Link } from "react-router-dom";

const SingleContact = () => {
  const [contactId] = useSearchParams();
  const id = Number(contactId.get("c"));
  const { firstName, lastName, phoneNum } = contacts[id - 1];
  return (
    <div className="bg-green-200 flex flex-col min-[100px]:w-7/12 sm:text-sm w-5/12 items-center mx-auto py-7 my-28 justify-center rounded-3xl text-green-700 ">
      <div className="font-semibold">{firstName + " " + lastName}</div>
      <div className="font-semibold">{phoneNum}</div>
      <button className="px-3 py-2 bg-gray-200 rounded-lg mt-7">
        <Link to={"/compose?c=" + id}>Send Message</Link>
      </button>
    </div>
  );
};

export default SingleContact;
