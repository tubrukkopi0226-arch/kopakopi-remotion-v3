# KOPAKOPI Product Motion — Remotion

Video composition: 1080x1920 (9:16), 30 fps, 20 seconds. The uploaded KOPAKOPI bottle photo is used as the product reference and remains unaltered.

## Requirements
- Windows 10/11
- Node.js 18.18+ (recommended Node.js 20 LTS)

## Run
1. Extract this ZIP.
2. Open the project folder in Terminal / PowerShell.
3. Run `npm install`
4. Run `npm start` to open Remotion Studio and preview.
5. Run `npm run render` to render `out/kopakopi-product.mp4`.

## Edit
- Main animation: `src/video.tsx`
- Composition settings: `src/root.tsx`
- Product image: `public/kopakopi-product.jpg`

This project is a Remotion source project. The MP4 is created locally after dependencies are installed and the render command is run.
