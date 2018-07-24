const main = {
  init() {

    browser.webRequest.onBeforeRequest.addListener((options) => {
      console.log("onBeforeRequest called");
      return console.log(options);
    },{urls: ["<all_urls>"], types: ["main_frame"]}, ["blocking"]);

  },
};

main.init();
