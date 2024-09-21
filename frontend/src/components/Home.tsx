import { Link } from "react-router-dom";
import { MessageSquare, Clock, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to OTP Sender</h1>
        <p className="text-xl mb-8">Send secure one-time passwords with ease</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contacts"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send OTP
          </Link>
          <Link
            to="/history"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            View History
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MessageSquare className="w-12 h-12 text-blue-600" />}
            title="Quick Send"
            description="Send OTPs to your contacts with just a few clicks"
          />
          <FeatureCard
            icon={<Clock className="w-12 h-12 text-green-600" />}
            title="History Tracking"
            description="Keep track of all your sent OTPs for reference"
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-yellow-600" />}
            title="Secure & Fast"
            description="Our system ensures quick and secure OTP delivery"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <Link
          to="/contacts"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Send Your First OTP
        </Link>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
