# Weather Forecast App
This application uses Open Weather API to list down the temprature & humidity details of Chennai City.
It has a very simple user interface. It uses Viewport which makes this simple page resposive.
It provides an option to view the temprature both in Celcius & Fahrenheit format.


## How to run this application
To run this application once the package is downloaded follow steps below -

1. Navigate to project folder and run below command in command line to install the dependencies
    ```bash
    npm install
    ```
2. Once above process is complete, in terminal window run below command to start the server.  
    ```bash
    node server
    ```
3. Open the web browser and navigate to URL [http://localhost:3000/](http://localhost:3000/)

## Hosting
Application is hosted at [http://weatherbasicapp.herokuapp.com/](http://weatherbasicapp.herokuapp.com/)

## Technical Details
1. This application is developed using jQuery and Bootstrap.
2. Express.js is used along with node host and run the application.,


## Future Enhancements
1. This application fetches the data for Chennai City. This can be enhanced further to take the preferred city from the user and fetch the data for the mentioned city.
2. This is a simple webapp, This can be made as a Hybrid Application.
3. Proper error handlig with the proper alert/error messages.
4. UI Ehancemet : Rich & Appealing UI.
5. Add geo location API support to get the weather information of current city/place.
6. Multi-Language support.
7. Pass city/place name as a query string so that this application can be integrated with other system.
