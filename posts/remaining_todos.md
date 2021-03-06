# Remaining Todos

## Saturday, May 13th, 2017

So far I have listed (publicly and privately) the following remaining todos:
- Support for markdown-it-katex
- Support for js-sequence-diagrams
- Mobile friendliness
- Routes for individual posts
- Metadata for each individual post using markdown-it-meta or similar
- Centering images
- Pagination
- High-resolution favicons
- Code splitting
- Linting
- Serverless authentication
- Markdown editor in React
- Disqus Comments
- Google Analytics
- Deployment pipeline
- Responsive navbar

Of these, the following are done:
- Mobile friendliness
- Deployment pipeline

The following are put on hold indefinitely:
- Anything regarding routes:
    - Routes for individual posts
    - Pagination
    - Code splitting
- Anything that's a nice to have:
    - Markdown-it-katex, no console errors
    - js-sequence-diagrams
    - Metadata for each individual post
    - High-res favicons
    - Linting
    - Centering images
    - Disqus Comments
    - Responsive navbar
- Anything that would need a server
    - Google Analytics
    - Editor in React

Uh, yeah... Most of these will probably not be finished...

Kinda sad, but I think I should admit it to myself and to the world. There will be other projects ahead where I can learn to tackle these problems.

So some more experience gained:
- Having a server is really nice. Serverless authentication is *technically* possible, if you use something like AWS Lambda. Which is basically a pay-per-execution server. Which given any meaningful scale, is going to require you to pay through the nose. Might as well have a backend. Not having a backend is the whole point of this blog.
- I don't know anything security as of right now, including XSS vulnerabilities, which are created if you use `dangerouslySetInnerHTML` in React, which may have helped resolve some of the mathML console errors that I was seeing. I'm not going to expose myself to those practices if I don't need to, and certainly not because I have console errors.
- Code splitting through `react-router` is done through the routes. However, if you have one main route, I don't think you can split along route params. A server would help in this case too.
- I can't create new files in React alone. So no live editor unfortunately.
- I tried integrating high-res favicons, but it would just increase the bundle size and doesn't look all that much nicer.
- I'm probably going to be the only person who is posting here for the foreseeable future, and linting isn't all that necessary.

Where does that leave me now?
- Just continue to write posts, and if it gets too heavy (unbearable load times, unlikely because it should be load once and cached in the user's computer, and I can always add in a loading spinner), get a server. 
