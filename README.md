# on-before-request-bug
Firefox addon that simply logs to the console when onBeforeRequest is called

## Steps to recreate the bug:
1. Open Firefox to `about:debugging#addons`.
1. "Load Temporary Add-on...".
1. Find and select the `manifest.jso`n file in this repo.
1. Start "Debug" mode.
1. Open a new tab and go to "status.twitter.com" and note the output to the console.
1. Open a new tab and go to "mobile.twitter.com" and note the lack of output to the console.
