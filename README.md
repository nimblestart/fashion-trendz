# ⚽ Grid ETI
Curated list of soccer training videos with search, filtering capabilities. Build using **E**leventy, **T**ailwind CSS, **I**sotope.
* [View on Netlify](https://soccer-grid.netlify.app/)

## Components
* This is repo is based on [jet repo](https://github.com/marcamos/jet/) which in turn uses
    * [Eleventy](https://www.11ty.dev/)
    * [Tailwind CSS](https://tailwindcss.com/)
* [Isotope](https://isotope.metafizzy.co/) is used for adding the search and filtering capability
* [Youtube Data download](https://mattw.io/youtube-metadata/bulk) is used to get video metadata

## How you can use it
1. Clone this repo
2. Install dependencies: `npm i`
3. Start development: `npm run dev`
4. Visit http://localhost:8080 to see your work-in-progress
5. Do super-fun Eleventy and Tailwind things
6. When you’re done: `npm run build`
7. Host your project somewhere ([Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/) are nice options)

## To-Do
* Done - Video load seems to be slow, see if there is a better way to do it
* YTS - Work on curating videos and better tagging them
* YTS - Add tags which correspond to a session plan

## Disclaimer
I _originally_ built this in few hours through trial-and-error, so I'm sure there's _a lot_ of room for improvement.

If you try it and find issues, or think of improvements, please [file an issue](https://github.com/nimblestart/soccer-grid/issues/new) and/or [create a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<!---just
cd soccer-grid
git config user.name "nimblestart O"
git config user.email nimble.start@gmail.com
--->