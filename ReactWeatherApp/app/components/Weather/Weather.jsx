var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
    getDefaultProps: function () {
        return {}
    },
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage : undefined
        }
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
                    isLoading : false,
                    errorMessage : errMsg.message
                });
               // alert("fdfds");
            });

    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return (
                    <h3 className="text-center">
                        Fetching weather ...
                    </h3>
                );
            } else if (temp && location) {
                return (<WeatherMessage temp={temp} location={location}/>);
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal errorMessage={errorMessage} />
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">
                   Get Weather
                </h1>
                <WeatherForm onSearch={this.handleSearch}/> 
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
