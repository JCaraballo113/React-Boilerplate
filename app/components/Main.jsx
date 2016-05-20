var React = require('react');

//A stateless component
var Main = (props) => {
  return (
      <div>
          <div>
            <div className>
              <h1>Main.jsx Rendered</h11>
              {props.children}
            </div>
          </div>
      </div>
  );
};

module.exports = Main;
