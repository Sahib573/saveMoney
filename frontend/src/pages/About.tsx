// Example Updated Headings
import React from 'react';

const AboutUs: React.FC = () => {
  // Color Scheme
  const mainColor = '#5B39CF';
  const textColor = '#333';

  return (
    <div className="container mx-auto mt-8 px-4 mb-12">
      <h1 className="text-4xl font-extrabold mb-4" style={{ color: mainColor }}>Discover Smart Expense!!</h1>
      <p className="text-lg mb-8" style={{ color: textColor }}>
        Welcome to Smart Expense, where managing your finances is as smart as it gets!
      </p>

      <h2 className="text-2xl font-bold mb-4" style={{ color: mainColor }}>Our Mission</h2>
      <p className="text-lg mb-8" style={{ color: textColor }}>
        Join us in revolutionizing the way you handle your expenses. Smart decisions, simplified finances.
        Our goal is to provide a
        smart and intuitive platform that not only tracks your spending but also empowers you to make informed financial
        decisions.
      </p>


      <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: mainColor }}>Meet the Visionaries</h2>
      <div className="flex items-center gap-5 py-3 border-b border-gray-300">
        {/* Team Member 1 */}
        <div>
          <h3 className="text-xl font-semibold" style={{ color: mainColor }}>Sahib Singh</h3>
          <p className="text-sm text-gray-600" style={{ color: textColor }}>Lead Developer</p>
          <p className="text-sm text-gray-600" style={{ color: textColor }}>John is the mastermind behind the Smart Expense app...</p>
        </div>
      </div>
      <div className="flex items-center gap-5 py-3 border-b border-gray-300">
        {/* Team Member 2 */}
        <div>
          <h3 className="text-xl font-semibold" style={{ color: mainColor }}>Parul</h3>
          <p className="text-sm text-gray-600" style={{ color: textColor }}> Developer</p>
          <p className="text-sm text-gray-600" style={{ color: textColor }}>Parul is connected with us for past 2 years...</p>
        </div>
      </div>
      <div className="flex items-center gap-5 py-3 border-b border-gray-300">
        {/* Team Member 3 */}
        <div>
          <h3 className="text-xl font-semibold" style={{ color: mainColor }}>Kush</h3>
          <p className="text-sm text-gray-600" style={{ color: textColor }}> Project Manager</p>
          <p className="text-sm text-gray-600" style={{ color: textColor }}>Kush handled the timeline and flow of process for the app</p>
        </div>
      </div>


      <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: mainColor }}>Connect with Us</h2>
      <p className="text-lg mb-8" style={{ color: textColor }}>
        We're eager to hear from you! Have questions, feedback, or suggestions? Reach out to us at{' '}
        <a href="mailto:info@smartexpense.com" className="text-blue-500 hover:underline" style={{ color: mainColor }}>
          info@smartexpense.com
        </a>.
      </p>
    </div>
  );
};

export default AboutUs;
