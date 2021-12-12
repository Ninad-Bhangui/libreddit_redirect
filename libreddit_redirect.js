// ==UserScript==
// @name               Libredd.it redirect
// @namespace          https://greasyfork.org/en/users/6969696969
// @description        Redirect links to libredd.it for privacy
// @include            *://www.reddit.com/*
// @exclude            *://www.reddit.com/poll/*
// @version            1.02
// @run-at             document-start
// @author             uint2048_t
// @grant              none
// @icon               https://raw.githubusercontent.com/spikecodes/libreddit/master/static/favicon.ico
// ==/UserScript==

window.location.replace("https://libredd.it" + window.location.pathname + window.location.search);
