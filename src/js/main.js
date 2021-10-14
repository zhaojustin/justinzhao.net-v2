const options = {
  plugins: [new SwupSlideTheme()],
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup]), a[href^="../"]:not([data-no-swup])',
};
const swup = new Swup(options);

function init() {}

// run once
init();

// this event runs for every page view after initial load
swup.on("contentReplaced", init);
