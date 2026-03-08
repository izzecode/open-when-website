# Open When Birthday Website

A beautiful, responsive, interactive "Open When" birthday website built with HTML, CSS, and Vanilla JavaScript.

## How to Customize Your Content

All of your media files (images, videos, audio) should be placed inside the `assets/` folder. I have updated the code to look for files there!

### 1. Linking to the Professional Portfolio (Envelope 2)
It is highly recommended to build the portfolio as a **separate** project (just like we did for your portfolio earlier). This keeps this "Open When" gift website separate from her professional public-facing site. 
Once her portfolio is live at a URL (e.g., `https://her-name-portfolio.vercel.app`), open `index.html`, find `id="modal-2"`, and change the link:
```html
<!-- Change this line: -->
<a href="https://your-portfolio-link.com" target="_blank" class="premium-button">Access Professional Portfolio</a>

<!-- To this: -->
<a href="https://her-name-portfolio.vercel.app" target="_blank" class="premium-button">Access Professional Portfolio</a>
```

### 2. Replacing Videos (Envelopes 3 & 5)
1. Drag and drop your actual video files into the `assets/` folder. Let's say your new video is named `my-marathon.mp4`.
2. Open `index.html` and find `id="modal-3"`.
3. Change the `<source>` tag to point to your new file:
```html
<video controls poster="assets/marathon_poster.png">
    <source src="assets/my-marathon.mp4" type="video/mp4">
</video>
```
*(You can also replace the `poster` image the exact same way!).*

### 3. Adding a Specific Spotify Song (Envelope 4)
1. Open the Spotify App or Web Player.
2. Find the song or playlist you want. Click the **3 dots (...)** next to it -> **Share** -> **Embed track/playlist**.
3. A window will pop up. Click **Show code**, and copy the `src="..."` URL from within that code.
4. Open `index.html`, find `id="modal-4"`, and replace the `src` in the `<iframe>`:
```html
<iframe style="border-radius:12px" src="YOUR_COPIED_SPOTIFY_URL_HERE" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

### 4. Replacing the Image in Envelope 6
1. Drop your beautiful couple photo into the `assets/` folder (e.g., `our-photo.jpg`).
2. Open `index.html`, find `id="modal-6"`.
3. Change the `<img>` tag source:
```html
<div class="focal-image">
    <img src="assets/our-photo.jpg" alt="A lovely moment of us">
</div>
```

---

## How to Host (Vercel)

Yes! **Vercel** is absolutely perfect for this. Since it's a static site, deployment will take seconds and is completely free.

1. Create a free account on [vercel.com](https://vercel.com/) and log in with GitHub.
2. Push this entire `open-when-website` folder to a GitHub repository.
3. In Vercel, click **Add New Project** -> Import your GitHub repository.
4. Leave all settings exactly as they are (Framework Preset: Other) and click **Deploy**.
5. Within 30 seconds, you will have a live URL to share with her!
