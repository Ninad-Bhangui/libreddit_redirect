// ==UserScript==
// @name               Libredd.it redirect
// @namespace          https://example.org
// @description        Redirect links to libredd.it for privacy
// @include            *://www.reddit.com/*
// @exclude            *://www.reddit.com/poll/*
// @version            1.00
// @run-at             document-start
// @author             buckmelanoma
// @grant              none
// @icon               https://raw.githubusercontent.com/spikecodes/libreddit/master/static/favicon.ico

// ==/UserScript==
window.location.replace("https://libreddit.spike.codes" + window.location.pathname + window.location.search);
