var React = require('react');

// {temp, location} is new ES6 destructuring syntax
var WeatherMessage = ({temp,location}) => {
    return (
        <div>
            <h3 className="text-center">
                It's {temp}f in {location}.</h3>
        </div>
    );
};

module.exports = WeatherMessage;
