var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');
var Weather = React.createClass({
    getDefaultProps: function () {
        return {}
    },
    getInitialState: function () {
        return {isLoading: false}
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading: true});
        openweathermap
            .getTemp(location)
            .then(function (temp) {
                that.setState({isLoading: false,location: location, temp: temp});
            }, function (errMsg) {
                that.setState ({
                    isLoading : false
                });
                alert(errMsg);
            });

    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return (
                    <h3>
                        Fetching weather ...
                    </h3>
                );
            } else if (temp && location) {
                return (<WeatherMessage temp={temp} location={location}/>);
            }
        }

        return (
            <div>
                <h3>
                    Weather Component
                </h3>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
