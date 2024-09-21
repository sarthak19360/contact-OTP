import { useState } from "react";
import { Link } from "react-router-dom";
import { contacts } from "../utils/contacts";
import { Search, User } from "lucide-react";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contacts
      </h1>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      {/* Contacts List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <Link
            to={"/contact?c=" + contact.id}
            key={contact.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {contact.firstName} {contact.lastName}
                </h2>
                <p className="text-sm text-gray-600">
                  {contact.phoneNum || "No phone number"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No contacts found.</p>
      )}
    </div>
  );
};

export default Contacts;
