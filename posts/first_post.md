# My first post

## Wednesday, April 5th, 2017

```python
print "Hello World!"
```

$$
    \sqrt{4} = 2
$$

This is my first blog post on my new handcrafted blog.

I thought about going with a static website generator such as Hugo or Jekyll, but after using them in the past I never felt like I had true ownership of what I could or could not do. Hand-crafting a single-page application was better because I knew each and every part of my stack, and I could swap out dependencies more easily.

Current capabilities (4-5-2017):
- Support for:
    - Markdown!! (via markdown-it)
    - Syntax highlighting for code blocks (via markdown-it-prism)
    - TeX support via KaTeX (via markdown-it-katex)
    - Images (via file-loader and webpack)
    - File upload and fetching (via axios)
    - Basic routing (via react-router)

Remaining TODOs:
- Add in working support (no console errors) for:
    - UML diagrams or equivalent (take a look at markdown-it-mermaid or js-sequence-diagrams, former is included within package.json)
    - TeX support (I hope I don't need to make my own parser, or fork the one I'm using...)
    - Disqus comment forums or equivalent
    - Google Analytics integrations and SEO optimization
- Generate easily usable deployment pipeline with npm or bash scripts
- YAML or TOML base configs to go with each markdown blog post, because having metadata to organize by is nice at any meaningful scale
- Webpack code splitting with `react-router`
- Fully responsive and mobile-friendly navbar with hamburger icon
- In-browser real-time markdown editor for editing and generating new blog posts
- Serverless authentication (not sure if it's an oxymoron)
- Linting. So much linting.

So, plenty of work to do. Guess we shall see what happens.
