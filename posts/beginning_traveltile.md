# Beginning Traveltile

## Monday, May 29th, 2017

So I'm redoing a project I tried to do last year but kinda failed at: Traveltile. It's an application I wanted to find, document, and share my travels with other people, and for other people to document and share them with me.

I wanted to do this because:
1. There's no great travel builder experience out there for cheap travelers, like for people taking a grad trip. Try and find one that's good (Airbnb might have one but I think it came out after I started building my thing last year)
2. We all want to visit the same locations, but we each go on the same trip once. Lots of planning, but no incentive to save or share these plans.
3. I'm lazy and didn't want to plan my own travel itinerary, so I wanted a computer to do it for me.

Those aren't the three original reasons for doing it, which I have forgotten (the second one is original), but they'll do. I think.

I kinda succeeded last year with getting a front-end mockup up and running with it, but haven't kept it up due to a number of reasons:

1. Authentication. I had no authentication. Anybody could edit and add anything. I shut it down partially because I was afraid I could demo something and somebody would have added something dumb to the app without me noticing.
2. Limited debugging skills. I didn't know how to even use Chrome Devtools, which honestly would have made my life so much easier (CSS styling!!!)
3. Limited mastery of React (the one thing I was doing); not to mention a whole bunch of other stuff applications need, such as some form of analytics, payments (if you want to eat), monitoring/logging, etc.

Right now, the plan looks something like:
- traveltile.yingw787.com: Statically built HTML/CSS/JS landing page, built with Hugo and modified hugo-elate-theme, optimized for mobile. Still some hiccups but otherwise it looks alright.
- app.traveltile.yingw787.com: React front-end for Traveltile, built with multiple staging environments, authentication, etc. Shouldn't encounter any terribly big problems there, besides the API endpoint part.
- api.traveltile.yingw787.com: Django back-end for Traveltile. I have no idea how to back-end, and this will require a decent amount of skill to pull off. I think I'll need to work through a number of tutorials in order to see how to effectively build and deploy this.

So how long will this all take? Hopefully not long, as I have a couple more ideas that I want to pull off this year in addition to other coding stuff. A month seems optimistic but something that I should target if I want to go places.

If you want to check the status of this application, you should check out [the landing page](https://traveltile.yingw787.com) and go from there.
