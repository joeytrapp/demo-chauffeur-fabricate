# Demo app using Chauffeur and Fabricate

## Requirements

* node 0.8+
* grunt-cli (`npm install -g grunt-cli`)
* git

## Install and startup

	git clone git@github.com:joeytrapp/demo-chauffeur-fabricate.git
	npm install
	grunt dev

The console should be blocked waiting for files to change to recompile them. Go to `localhost:8000` in your browser. Open chrome dev tools and reload the page. In the sources panel, you should see the combined app.js and also a `src` dir that is the original sources.
