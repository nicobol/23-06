What You Will Build:

You will be building a travel application. It’s common to pull basic data from an API, but many applications don’t just pull the weather, they pull in multiple types of data, from different sources and occasionally one API will be required to get data from another API.

The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter; we are going to use the Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it’s that specific. So, we’ll need to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API.

Extend your Project Further - Roadmap/Strategy

You'l need to implement at least one of the below in the project. If you’re going to do any of the suggested tasks, it’s recommended that you hold off on service workers until you are closer to submitting. This is a good use for comments.

    Add end date and display length of trip.
    Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
    Allow user to add multiple destinations on the same trip.
        Pull in weather for additional locations.
    Allow the user to add hotel and/or flight data.
        Multiple places to stay? Multiple flights?
    Integrate the REST Countries API to pull in data for the country being visited.
    Allow the user to remove the trip.
    Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
    Instead of just pulling a single day forecast, pull the forecast for multiple days.
    Incorporate icons into forecast.
    Allow user to Print their trip and/or export to PDF.
    Allow the user to add a todo list and/or packing list for their trip.
    Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
        Automatically sort additional trips by countdown.
        Move expired trips to bottom/have their style change so it’s clear it’s expired.
