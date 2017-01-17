var React = require('react');
// As this does not have methods other than render we will use Lambda function
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">
                About
            </h1>

            <p> This is a weather application build on React. 
            I built to demonstrate all the basic features of React.
            </p>

            <p> Here are some of the tools I used :
            </p>

            <ul>
                <li>
                    <a href="https://facebook.github.io/react"> React </a> - This was the 
                    javaScript framework used.
                </li>
                <li>    
                    <a href="http://openweathermap.org/" > Open Weather Map </a>
                    - I used open Map weather APIs to fetch weather.
                </li>
            </ul>
        </div>

    );
};

module.exports = About;
