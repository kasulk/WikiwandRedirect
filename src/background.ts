import browser from "webextension-polyfill";

type RequestDetails = {
  url: string;
};

function redirectWikipediaToWikiwand(
  details: RequestDetails
): { redirectUrl: string } | void {
  const url = new URL(details.url);
  const [languageCode] = url.hostname.split(".");

  if (url.hostname.includes("wikipedia.org")) {
    const newUrl = `https://www.wikiwand.com/${languageCode}/${url.pathname}`;
    return { redirectUrl: newUrl };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirectWikipediaToWikiwand,
  { urls: ["*://*.wikipedia.org/*"] },
  ["blocking"]
);
