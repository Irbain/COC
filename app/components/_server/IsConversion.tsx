const isConversion = async () => {
  const res = await fetch(
    `https://d1tjcziy9n8hnk.cloudfront.net/public/external/check2.php?testing=1&callback=?`
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) {
    throw new Error("Failed!!!!!");
  }

  return res.json();
};
