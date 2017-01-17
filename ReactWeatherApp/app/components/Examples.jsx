var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">
                Examples
            </h1>
            <p>
                Here are few example location to try out :</p>

            <ol>
                <li>
                    <Link to="/?location=San Jose,CA"> San Jose, CA</Link>
                </li>
                <li>
                <Link to="/?location=Pune,India"> Pune, India</Link>
                </li>
            </ol>

        </div>
    );
};

module.exports = Examples;
