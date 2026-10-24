#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=resume.pdf "file://$(pwd)/resume.html" 2>/dev/null
cp resume.pdf ../public/resume.pdf
echo "Built resume.pdf -> public/resume.pdf"
