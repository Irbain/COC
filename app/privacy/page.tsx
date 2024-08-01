import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // ROBOT
  robots: {
    index: false,
    nocache: true,
    // we can add other properties
  },
}; // there are other options for making robot file
// by creating at the root app robot.ts see the nextjs docs

const page = () => {
  const name = process.env.NEXT_PUBLIC_NAME;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  return (
    <div>
      <div className="p-[5%]">
        <h1 className="text-4xl font-bold mt-4">
          {name} Giveaway Website Privacy Policy
        </h1>

        <p>
          <strong>Effective Date:</strong> 01/01/2024
        </p>

        <p>
          Thank you for visiting {name}&apos;s Giveaway Website. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          personal information. By accessing or using our website, you agree to
          the terms and conditions of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold mt-4">1. Information We Collect:</h2>

        <div className="ml-4">
          <p>
            a. <strong>Personal Information:</strong>
          </p>
          <ul className="list-disc ml-8">
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
          </ul>
        </div>

        <div className="ml-4">
          <p>
            b. <strong>Non-personal Information:</strong>
          </p>
          <ul className="list-disc ml-8">
            <li>IP addresses</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Usage patterns</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-4">
          2. How We Use Your Information:
        </h2>

        <div className="ml-4">
          <p>
            a. <strong>Personal Information:</strong>
          </p>
          <ul className="list-disc ml-8">
            <li>To notify winners and deliver prizes</li>
            <li>To communicate with participants</li>
            <li>To improve our services</li>
            <li>To comply with legal requirements</li>
          </ul>
        </div>

        <div className="ml-4">
          <p>
            b. <strong>Non-personal Information:</strong>
          </p>
          <ul className="list-disc ml-8">
            <li>For website analytics</li>
            <li>To enhance user experience</li>
            <li>To improve our website and services</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-4">
          3. Cookies and Tracking Technologies:
        </h2>

        <p>
          We use cookies and similar technologies to collect non-personal
          information and enhance your experience on our website. You can modify
          your browser settings to control the use of cookies.
        </p>

        <h2 className="text-2xl font-bold mt-4">4. Third-Party Disclosure:</h2>

        <p>
          We do not sell, trade, or transfer your personal information to
          outside parties. However, we may share non-personal information with
          trusted third parties for analytics, marketing, or other legitimate
          purposes.
        </p>

        <h2 className="text-2xl font-bold mt-4">5. Security:</h2>

        <p>
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold mt-4">6. Children&apos;s Privacy:</h2>

        <p>
          Our website is not directed to individuals under the age of 13. We do
          not knowingly collect personal information from children. If you are a
          parent or guardian and believe that your child has provided us with
          personal information, please contact us, and we will delete it.
        </p>

        <h2 className="text-2xl font-bold mt-4">
          7. Changes to This Privacy Policy:
        </h2>

        <p>
          We may update our Privacy Policy periodically. We will notify you of
          any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-bold mt-4">8. Contact Information:</h2>

        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at {email}.
        </p>

        <p>
          By participating in our giveaways or using our website, you agree to
          the terms outlined in this Privacy Policy. It is your responsibility
          to review this Privacy Policy periodically for changes.
        </p>

        <p className="mb-4 mt-4">
          Thank you for trusting {name} with your information.
        </p>
      </div>
    </div>
  );
};

export default page;
