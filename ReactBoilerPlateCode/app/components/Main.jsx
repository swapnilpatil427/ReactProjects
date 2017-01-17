var React = require('react');
var Main = (props) => {
    return (
        <div>
            <div className="row">
                <div>
                <p > Main.jsx Render </p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;