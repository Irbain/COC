import { useEffect, useState } from "react";

// Gets leads from public/checkAdbLeads.js

declare global {
  //to remove later after amplify
  interface Window {
    handleLeadsResult: any; //might affect the code
  }
}

const LeadsComponent = () => {
  const [hasLeads, setHasLeads] = useState(false);
  useEffect(() => {
    // Optional: You can use a global state, Redux, or other state management here
    // For simplicity, we'll log the leads in the console
    window.handleLeadsResult = (leads: any) => {
      console.log("Leads from Next.js component:", leads);
    };
  }, []);

  return (
    <div className="ml-[4px]">
      {/* Your component rendering logic */}
      {hasLeads ? <GreenCheckedIcon /> : <RedXIcon />}
    </div>
  );
};

// Placeholder components for icons
const GreenCheckedIcon = () => (
  <div style={{ color: "#c4c0b5d8" }}>
    {/* Add your green checked icon here */}✓
  </div>
);

const RedXIcon = () => (
  <div style={{ color: "#c4c0b5d8" }}>{/* Add your red x icon here */}✗</div>
);

export default LeadsComponent;
