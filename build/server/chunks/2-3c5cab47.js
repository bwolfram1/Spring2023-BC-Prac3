const load = async ({ fetch }) => {
  const fetchEurope = async () => {
    const response11 = await fetch("https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Europe");
    const movementEurope = await response11.json();
    return movementEurope;
  };
  const fetchAfrica = async () => {
    const response2 = await fetch("https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Africa");
    const movementAfrica = await response2.json();
    return movementAfrica;
  };
  const fetchMiddleEast = async () => {
    const response2 = await fetch("https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=MiddleEast");
    const movementAfrica = await response2.json();
    return movementAfrica;
  };
  const fetchAmericas = async () => {
    const response2 = await fetch("https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Americas");
    const movementAfrica = await response2.json();
    return movementAfrica;
  };
  const fetchAsia = async () => {
    const response2 = await fetch("https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=AsiaOceania");
    const movementAfrica = await response2.json();
    return movementAfrica;
  };
  const fetchPaintings = async () => {
    const paintingRes = await fetch(
      "https://spring23-bc-group6.onrender.com/paintings?img_folder=images"
    );
    const paintings = await paintingRes.json();
    return paintings;
  };
  const fetchRegions = async () => {
    const regionsRes = await fetch(
      "https://spring23-bc-group6.onrender.com/region"
    );
    const regions = await regionsRes.json();
    return regions;
  };
  return {
    europe: fetchEurope(),
    africa: fetchAfrica(),
    middleEast: fetchMiddleEast(),
    americas: fetchAmericas(),
    asiaOceania: fetchAsia(),
    paintings: fetchPaintings(),
    regions: fetchRegions()
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-b4991a06.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/entry/_page.svelte.5accaf3c.js","_app/immutable/chunks/index.5caf4ef9.js","_app/immutable/chunks/Column.83148a38.js","_app/immutable/chunks/g80.0caa2d3c.js","_app/immutable/chunks/index.162afc37.js","_app/immutable/entry/_page.js.e9c7b38b.js","_app/immutable/chunks/_page.9739f2b0.js"];
const stylesheets = ["_app/immutable/assets/_page.45c2ad79.css","_app/immutable/assets/styles.1a75ed66.css","_app/immutable/assets/g80.9f220f9d.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-3c5cab47.js.map
