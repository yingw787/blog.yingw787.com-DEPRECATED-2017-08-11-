# How to submit a post

## Last updated: April 9th, 2017

First, clone the [repository](https://github.com/yingw787/blog.yingw787.com). Then, `cd` into the repository and run `npm install`. Make sure that you have the latest versions of `npm` and `node` installed. As of last update, I am using versions `3.10.8` and `6.9.0` respectively.

Make sure you have git installed. Check out a separate git branch.

Within this repository there is a `posts` directory. Add your markdown-formatted post to this directory. Then add the relative path to the config/posts.js file, in regularPosts.

Make a PR to `master`, and if everything looks fine and dandy, I'll integrate it into `master` and run a deployment script to s3.

Of course this isn't terribly ideal, and a real-time editor is on the agenda, but it should work for the time being.
