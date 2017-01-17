var React = require('react');
var Nav = require('Nav');
var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="small-centered large-4 medium-6 columns">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;