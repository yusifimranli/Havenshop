import axios from "axios";

async function getArrival() {
  const res = await axios.get(
    "https://haven-api-jet.vercel.app/api/newarrival"
  );
  return res.data;
}
async function getHaven() {
  const res = await axios.get(
    "https://haven-api-jet.vercel.app/api/haven"
  );
  return res.data;
}
async function getFeatures() {
  const res = await axios.get(
    "https://haven-api-jet.vercel.app/api/features"
  );
  return res.data;
}
async function getNews() {
  const res = await axios.get(
    "https://haven-api-jet.vercel.app/api/news"
  );
  return res.data;
}

export { getArrival,getHaven,getFeatures,getNews }; 