# m3-dist-builder
Now with annotation support


## Installation

A Mirador 3 installation with mintor tweaks is required for build, this will also allow further customization.
Install Mirador 3 as a submodule and build:

* install mirador3 as a sub module: `git submodule add https://github.com/data-futures/mirador.git`
* cd mirador and checkout v3.3.0-m3dist
* npm install
* npm run build:es
* cd ..

Build mirador annotations and webpack -
* npm install
* npm build

distributable webpack should now be available in demo/dist
