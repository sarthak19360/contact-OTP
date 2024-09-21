import { useSearchParams, Link } from "react-router-dom";
import { contacts } from "../utils/contacts";
import { User, Phone, MessageSquare } from "lucide-react";

const SingleContact = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("c"));
  const contact = contacts[id - 1];

  if (!contact) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Contact Not Found
        </h2>
        <Link to="/contacts" className="text-blue-600 hover:underline">
          Back to Contacts
        </Link>
      </div>
    );
  }

  const { firstName, lastName, phoneNum } = contact;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 text-white p-6 text-center">
          <User size={64} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Phone className="text-green-600 mr-3" />
            <span className="text-gray-700">{phoneNum}</span>
          </div>
          <Link
            to={`/compose?c=${id}`}
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            <div className="flex items-center justify-center">
              <MessageSquare className="mr-2" />
              Send Message
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/contacts" className="text-blue-600 hover:underline">
          Back to Contacts
        </Link>
      </div>
    </div>
  );
};

export default SingleContact;
