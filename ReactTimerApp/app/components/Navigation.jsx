var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu" data-dropdown-menu>
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">
                            Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link">
                            Count Down</Link>
                    </li>

                     <li>
                        <a href="https://github.com/swapnilpatil427/ReactProjects" target="_blank"> Github </a>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="http://dreamerswapnil.com" target="_blank"> Swapnil Patil</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;