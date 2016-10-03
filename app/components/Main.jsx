var React = require('react');

var Main = (props)=> {
    return (
        <div>
            <div>
                <div >
                    <h3>Main.jsx - React Boilerplate3</h3>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;