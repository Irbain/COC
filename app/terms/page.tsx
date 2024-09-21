import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // ROBOT
  robots: {
    index: true,
    nocache: true,
    // we can add other properties
  },
}; // there are other options for making robot file
// by creating at the root app robot.ts see the nextjs docs

const page = () => {
  const name = "COC Gems";
  const email = "contact@email.com";
  return (
    <div className="p-[5%]">
      <h1 className="text-4xl font-bold mt-4">
        {name} Giveaway Terms of Service
      </h1>

      <p>
        Welcome to the {name} Giveaway! By participating in this giveaway, you
        agree to the following Terms of Service.
      </p>

      <h2 className="text-2xl font-bold mt-4">1. Eligibility:</h2>

      <p>To be eligible for the {name} Giveaway, participants must:</p>
      <ul className="list-disc ml-8">
        <li>
          Apply only once. Multiple applications from the same individual will
          result in disqualification.
        </li>
        <li>
          Provide accurate and valid information during the application process.
        </li>
        <li>Successfully complete tasks as specified on the website.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">2. Winners Selection:</h2>

      <p>
        The number of winners will depend on the total number of participants
        and the completion of the tasks. Winners will be selected randomly from
        eligible entries.
      </p>
      <p>
        The time for announcing the winners may vary based on the number of
        applications received. We will make reasonable efforts to announce the
        winners in a timely manner after the giveaway ends.
      </p>

      <h2 className="text-2xl font-bold mt-4">3. Prize Distribution:</h2>

      <p>
        Winners will receive their prizes via email. It is crucial to provide a
        valid and accessible email address during the application process.
      </p>

      <h2 className="text-2xl font-bold mt-4">4. Contact Information:</h2>

      <p>
        If you have any questions or concerns about the {name} Giveaway or these
        Terms of Service, please contact us at {email}.
      </p>

      <h2 className="text-2xl font-bold mt-4">5. Changes to Terms:</h2>

      <p>
        {name} reserves the right to update or modify these Terms of Service at
        any time without prior notice. It is your responsibility to review these
        terms periodically.
      </p>

      <p>
        By participating in the {name} Giveaway, you acknowledge that you have
        read, understood, and agree to these Terms of Service. Failure to comply
        with these terms may result in disqualification from the giveaway.
      </p>

      <p className="mb-4 mt-4">
        Thank you for participating in the {name} Giveaway and good luck!
      </p>
    </div>
  );
};

export default page;
