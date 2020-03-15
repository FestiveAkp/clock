#!/usr/bin/env sh

# abort on error
set -e

# build static assets
npm run build

# stage files
cd dist
git init
git add -A
git commit -m "deploy: $(date +"%F %r")"

# push to branch gh-pages
git push -f https://github.com/FestiveAkp/clock.git master:gh-pages

cd -
echo ">> Deploy successful"
