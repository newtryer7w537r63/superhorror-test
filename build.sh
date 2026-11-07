#!/bin/sh
# Run on your Linux machine (needs Node.js + internet once)
set -e
npm install
npm run dist
echo "Done. Your file is in ./dist/"
ls dist/*.AppImage
