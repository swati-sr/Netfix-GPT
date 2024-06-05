export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL_MOVIE_CARD = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE_CODE = [
  { id: "english", name: "English" },
  { id: "hindi", name: "Hindi" },
  { id: "french", name: "French" },
  { id: "spanish", name: "Spanish" },
  { id: "japanese", name: "Japanese" },
  { id: "german", name: "German" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const gptSearchSuggestionOne =
  "Act as a movie recommendation system and suggest some movie for the query: ";

export const gptSearchSuggestionTwo =
  ". Only give me names of 5 items, comma separated like the example result given ahead. Example Result: Koi Mil Gaya, My name is Khan, Dear Zindagi, Tamasha, Don";
