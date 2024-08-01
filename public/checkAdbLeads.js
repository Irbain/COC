// Passes leads to cpa/Adblue/LeadsComponent.tsx

// Define a callback function to handle leads in your Next.js component
function handleLeadsResult(leads) {
  // Your logic to pass the leads to the Next.js component
  // You can use a global state, Redux, or any other state management approach here
  console.log("Leads result in script:", leads);
}

setInterval(() => {
  checkLeads(handleLeadsResult);
}, 15000000);

function checkLeads(callback) {
  const callbackName = "jsonpCallback_" + Date.now();

  window[callbackName] = function (leads) {
    try {
      var completedLeads = leads.length;

      if (completedLeads) {
        var offerIds = [];
        var earningsInCents = 0;

        $.each(leads, function (key, lead) {
          offerIds.push(parseInt(lead.offer_id));
          earningsInCents += parseFloat(lead.points);

          console.log(
            "Single lead on offer id " +
              lead.offer_id +
              " for  $" +
              (parseFloat(lead.points) / 100).toFixed(2)
          );
        });

        console.log(
          "SUMMARY: User has completed " +
            completedLeads +
            " leads, for $" +
            earningsInCents / 100 +
            " earnings, on offer ids: " +
            offerIds.join(",")
        );

        // Call the callback with leads data
        if (callback) {
          callback(leads);
        }
      } else {
        console.log("Leads from leads array", ["No leads were found"]);

        // Call the callback with "No leads were found"
        if (callback) {
          callback(["No leads were found"]);
        }
      }
    } finally {
      document.head.removeChild(script);
      delete window[callbackName];
    }
  };

  const script = document.createElement("script");
  script.src = `https://d3qjvuswze4ycy.cloudfront.net/public/external/check2.php?testing=1&callback=${callbackName}`;
  document.head.appendChild(script);
}
