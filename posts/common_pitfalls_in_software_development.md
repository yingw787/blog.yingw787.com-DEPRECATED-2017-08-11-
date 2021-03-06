# Common pitfalls in software development (that I've encountered)

## Wednesday, June 7th, 2017

I've just finished reading "The Pragmatic Programmer" by Andy Hunt and Dave Thomas, and it's probably the best book on software development that I've read so far. Maybe I prefer language-agnostic software development books. Maybe I like the examples. Maybe I just like the prose. Regardless, I think this is a keeper and one I'll be flipping through every so often.

This sparked some thinking into what things it doesn't recommend that I've seen in production code.

- **Not localizing your timestamps to a timezone**

  Let's say your application runs a pre-planned notification to your users at a pre-determined time. However, because you have users in four different timezones and you didn't localize your timestamp, you send out your notification once. So something you want to send to your users at 9AM, but because you live in New York and your clients live in Portland, they are three hours behind and get your message at 6AM. Better hope they never sleep.

- **Not internationalizing your client-facing text**

  If you don't wish to be limited by language barriers when reaching your customers, you should probably invest in internationalizing your client-facing text. And in any case, you should have the text on your page vary on some input in a prod CMS somewhere, not hardcoded into your codebase. We implement such a methodology on one repository, and we don't in another. Guess which site Sales / Marketing bothers us developers less about, and which one they demand changes for all the time.

- **Having your models automatically saving to your db**

  This is a tricky one to figure out at first, but *only a method that calls an object constructor should save the object to the database*. One time, I needed to build out a full object in order to create tests against that object. However, calling some methods on that object caused the object to be saved to the database. I don't think those tests were fully built out.

  Having explicit saves also means that you can have more scalable backends, as the backend server itself does not store or mutate state.

  This probably ranks pretty high on the "Most Difficult thing I learned" at my current company.

- **Extending your unit tests to become integration tests**

  It's really hard to tell when unit tests end and integration tests begin. I would argue that it's somewhere near making third-party or external component calls. The thing is, unit tests are easy to write and easy to run. Integration tests, however, are much more difficult.

These are all good things to be aware of when developing your next application. Some tips and recommendations from the book that I liked are:

- **Use metaprogramming and code generators when possible**

  Don't write stuff by hand! Use shell / Perl / other kind of scripts in order to automate away as much of the boredom as you can. This also helps in developer productivity, as more time is devoted to development overall.

- **Use a CMS to generate client-facing text**

  Don't hardcode any client-facing text into your codebase. It'll just be pain from the point where you deploy it to production on out. If you use a CMS, you can train your non-technical staff to use it.

- **Bonus: Use a GUI to update databases in production**

  Scripts are powerful and you don't want to blow away production while you try to get your development environment set up (like [here](https://www.reddit.com/r/cscareerquestions/comments/6ez8ag/accidentally_destroyed_production_database_on/)). Instead, use a GUI like Django admin to alter values and have checking defined throughout.
