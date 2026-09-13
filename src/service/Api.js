async function getArrival() {
  const res = await fetch(
    "https://haven-api-jet.vercel.app/api/newarrival"
  );
  return res.json();
}

async function getHaven() {
  const res = await fetch(
    "https://haven-api-jet.vercel.app/api/haven"
  );
  return res.json();
}

async function getFeatures() {
  const res = await fetch(
    "https://haven-api-jet.vercel.app/api/features"
  );
  return res.json();
}

async function getNews() {
  const res = await fetch(
    "https://haven-api-jet.vercel.app/api/news"
  );
  return res.json();
}

export { getArrival, getHaven, getFeatures, getNews };