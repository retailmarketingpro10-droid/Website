#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 /path/to/logo.(png|jpg|jpeg)"
  exit 2
fi

SRC="$1"
if [ ! -f "$SRC" ]; then
  echo "File not found: $SRC"
  exit 3
fi

# Destinations
STATIC_DIR="/workspaces/codespaces-blank/retailmarketingpro-site/assets"
REACT_DIR="/workspaces/codespaces-blank/retailmarketingpro-site/react-app/src/assets"

mkdir -p "$STATIC_DIR"
mkdir -p "$REACT_DIR"

# Copy to static assets as logo.png (preserve extension)
BASENAME=$(basename "$SRC")
cp "$SRC" "$STATIC_DIR/$BASENAME"
# Also copy into react app as logo.(same ext)
cp "$SRC" "$REACT_DIR/$BASENAME"

# Optionally normalize file names used by the code
# Create consistent filenames expected by code
EXT="${BASENAME##*.}"
if [[ "$EXT" =~ ^(png|PNG)$ ]]; then
  cp -f "$SRC" "$STATIC_DIR/logo.png"
  cp -f "$SRC" "$REACT_DIR/logo.png"
else
  cp -f "$SRC" "$STATIC_DIR/logo.jpg"
  cp -f "$SRC" "$REACT_DIR/logo.jpg"
fi

echo "Logo installed to:"
echo "  $STATIC_DIR/$(basename "$SRC")"
echo "  $REACT_DIR/$(basename "$SRC")"
echo "Also created normalized copies:"
if [[ "$EXT" =~ ^(png|PNG)$ ]]; then
  echo "  $STATIC_DIR/logo.png"
  echo "  $REACT_DIR/logo.png"
else
  echo "  $STATIC_DIR/logo.jpg"
  echo "  $REACT_DIR/logo.jpg"
fi

echo "Done. Restart the dev server if it's running (npm run dev in react-app)."
