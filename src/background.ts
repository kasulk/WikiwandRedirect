import browser from "webextension-polyfill";

type RequestDetails = {
  url: string;
};

function redirectWikipediaToWikiwand(
  details: RequestDetails
): { redirectUrl: string } | void {
  const url = new URL(details.url);
  console.log("url:", url);

  if (url.hostname.includes("wikipedia.org")) {
    const [languageCode] = url.hostname.split(".");
    const newPath = url.pathname.replace("/wiki/", "");
    const newUrl = `https://www.wikiwand.com/${languageCode}/${newPath}`;
    return { redirectUrl: newUrl };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirectWikipediaToWikiwand,
  { urls: ["*://*.wikipedia.org/*"] },
  ["blocking"]
);
