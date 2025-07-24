# Discussion Topics

I have marked a few areas of not with code comments prefixed with `TOPIC:` to help pinpoint areas in the code. In the topic sections below I will expand opn some of that.

## Search API

The initial seed data gets stringified by drizzle but it also impacts the searchability of the jsonb array. Even the exact match search does not work. When I manually updated the stringified values from something like `"[\"Weight loss & nutrition\"]"` to `["Weight loss & nutrition"]` then the search worked as intended.

Some greater efficiency at large scale of search can be found if some of the search can be exact match like the specialties. It is a great candidate for exact match because a list of existing specialties can be presented to the user for select so they don't have to type them in at all.

Another enhancement for performance on the search endpoint could be made by making it a paginated result. There would be good performance gains at larger scale and from a user point of view paginated tables are very common and the more that can be kept "above the fold" the better.

## Advanced UI Search

Having an option to select from a list of "specialties" and add multiple "specialties" would benefit the user because they might not even know what the specialty is called that they need. This would also aid in making the search against the `specialties` an exact match search allowing for the ability to make a much mor efficient search. I imagine something like a dropdown where the user selects the specialty and clicks an add button thin a tag/chip UI component gets pined to the UI for that specialty. Each specialty that is pined would update the search and there would be an "x" icon on each specialty tag/chip that could be used to remove individual specialties. The "Reset Search" should still reset all search criteria including the new specialties UI.

It would also be good to add a slider for the `yearsOfExperience`. This would allow for better type restriction. It would also allow for range search selection which would be helpful.

## Loading Indicators & Error Messaging

I did not have time to add loading indicators but they should absolutely be added. The fact that something is in flight should be communicated to the use. It would be nice to upgrade the API calls to something like React Query or RTK Query so the status of the API call would be more closely tied to React state management.

Currently there is also no error messages being surfaced to the use but they absolutely need to be. I personally like a combination of toast messaging and persistent error messages.
