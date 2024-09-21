import { Link } from "react-router-dom";
import { contacts } from "../utils/contacts";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center">
      {contacts.map((contact) => {
        return (
          <Link
            to={"/contact?c=" + contact.id}
            key={contact.id}
            className="bg-red-50 px-5 py-4 my-2 rounded-lg w-7/12"
          >
            <div className="text-center font-bold text-blue-600 text-lg">
              {contact.firstName + " " + contact.lastName}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Contacts;
