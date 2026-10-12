# Kai Liu's academic website

A five-page website for https://kailiu7.github.io/. All content is ordinary HTML.
No installation, account beyond GitHub, theme, package manager, or build command is required.

## Preview

Download and unzip the package. Open `index.html` in a browser. All five main pages,
the mobile menu, and the four PDF downloads work locally. External paper and
conference links require an internet connection.

## Publish at your existing address

The prepared site keeps **https://kailiu7.github.io/**. Use the existing
`kailiu7.github.io` repository in your `kailiu7` account. Do not create a new
repository or choose a new domain. Links already shared with employers and
colleagues will continue to point to the homepage after you update its files.

If you already uploaded the earlier package, replace the matching files on the
same publishing branch. Keep the current Pages settings if they already publish
from that branch and `/(root)`.

1. Open the repository that currently publishes your GitHub Pages site.
2. Back it up with **Code > Download ZIP**, and record **Settings > Pages**.
3. Upload the **contents of this folder** to your chosen branch. `index.html`,
   `assets/`, and `files/` must be at the top level, not inside `website/`.
4. Ensure the included `.nojekyll` file is present. If your computer hides it,
   create an empty file named `.nojekyll` directly on GitHub.
5. Set **Settings > Pages > Deploy from a branch**, select the branch containing
   these files, choose **/(root)**, and save.
6. When deployment completes, check all five pages at your existing website URL.

See the separate **Kai_Liu_GitHub_Setup_Guide.pdf** for every step, screenshots to
record, how to handle an existing custom deployment workflow, and troubleshooting.
Upload this folder's contents only; the guide and outer package are not needed online.

## Where to make changes

| Change | File |
| --- | --- |
| Name, position, biography, interests | `index.html` |
| Papers, author order, status, links | `publications.html` |
| Research projects, talks, service | `research-activities.html` |
| Courses and teaching history | `teaching.html` |
| Contact information | `contact.html` and repeated Home information |
| Colors, spacing, fonts | `assets/style.css` |
| Small-screen menu behavior | `assets/site.js` |
| PDFs | Replace the corresponding file in `files/` with the same filename |

You can use GitHub's pencil/Edit button to edit each HTML file. Change text between
the tags; keep the tags themselves intact. Copy a complete `<article>...</article>`
block when adding a paper or talk, and give the new block a unique `id`.
In an HTML link, the destination is the text inside `href="..."`.
Use `&amp;` for an ampersand in HTML text or URLs.

When updating a paper or talk that is also on Home, edit both pages. Move completed
talks from Upcoming presentations to the appropriate past-talk section; the site
does not automatically change statuses or dates. Keep PDF lists in agreement with
the web pages. Change the footer's update month on all pages after a content update.

The navigation is repeated in all five pages and `404.html`; edit each copy if you
rename or add a page. The error page uses root-relative paths so it works at a
nested missing URL. To change the site's domain, also update canonical/og:url tags,
`sitemap.xml`, `robots.txt`, and the absolute Home link in `404.html`.

## Optional portrait

The current design uses a text profile because no portrait was supplied.
Upload a photo of yourself as `assets/kai-liu.jpg`. In `index.html`, add this block
inside `<aside class="profile">`, immediately before your name:

```html
<div class="profile-photo">
  <img class="profile-portrait" src="assets/kai-liu.jpg"
       alt="Kai Liu" width="240" height="240">
</div>
```

The stylesheet already supports this. Keep filenames and capitalization exact.

## Content and design

The content follows the supplied CV, research statement, publication list, and
activity list. Research descriptions follow the current CV’s three directions:
mathematical foundations of quantum information; mathematical physics and quantum
control; and quantum computing, machine learning, and data science. Learning-related
applications are identified as developing directions, consistent with the statement. Paper groups and order follow the publication list. The supplied
PDFs are included unchanged. The layout is inspired by the restrained academic
style of https://www.ckuemmerle.com/home/ and uses original HTML/CSS, with no
borrowed photograph, branding, or biography. System fonts keep the site independent
of external font services. No analytics or contact-form service is required.

## Official GitHub help

- [Upload files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configure GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
