var React = require('react');

// {temp, location} is new ES6 destructuring syntax
var WeatherMessage = ({temp,location}) => {
    return (
        <div>
            <h3>
                It's {temp}
                in {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;
