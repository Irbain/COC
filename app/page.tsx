import React from "react";
import { Metadata } from "next";

// ROBOT TXT
export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const page = () => {
  return <div>app</div>;
};

export default page;
