Mohan self — PWA package (corrected)

Upload the CONTENTS of this folder to the root of the existing GitHub repository.
Required root structure:
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png

The original app's main JavaScript was kept intact. Service-worker registration is placed only before the final document closing tags.
