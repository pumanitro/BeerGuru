# BeerGuru - small app with for recruitment purpose

Used this technologies:
    - React
    - Redux
    - Saga
    - Jest
    - Webpack
    - Babel
    - Sass

## Task requirements

### General requirements
- [x] User should at all times know that something is being loaded (e.g. spinner/fake content)
- [x] Application should be responsive and work both on desktop and mobile devices
- [x] Use this API: https://punkapi.com/documentation/v2
- [x] We should be able to run your app using only two commands: npm install && npm start

### Listing view
- [x] User should see 20 beers on the first page
- [x] Each beer on the list should display: name, image, tagline
- [x] On bigger devices items should appear in a grid and on smaller resolutions they should wrap in a column
- [x] User should be able to see more beers as she/he scrolls down (infinite scroll)
- [x] If there are no more items to load user should see that’s the end of the list and no more requests should be triggered

### Details view
- [x] Details view should be a modal accessible by clicking on any item on the listing view or by manually entering the page using it’s URL address (e.g. /details/:id)
- [x] The modal should contain the following informations: name, tagline, description, image, brewer_tips, ibu, abv
- [x] Additionally modal should also list up to 3 similar beers (use available API to get beers with similar IBU/ABV/EBC)

*Some stuff done additionally

## How it looks

![Main page](/readme_photos/MainPage.png "Main page")
![Modal](/readme_photos/Modal.png "Modal")
![StaticSite](/readme_photos/StaticSite.png "StaticSite")