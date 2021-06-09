#!/usr/bin/env sh

set -e
npm run build

cd dist
git init
git add .
git commit -m "New deploy"
git push -f git@github.com:hmangaiha-dev/msegs.git master:gh-pages
cd -
