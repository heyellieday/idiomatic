var Idiom = React.createClass({
  render: function() {
    return (
      <div className="idiom">
        <div className="text">
          <h3 className="heading">Idiom</h3>
          <p className="attribute">{this.props.text}</p>
        </div>
        <div className="meaning">
          <h3 className="heading">Meaning</h3>
          <p className="attribute">{this.props.meaning}</p>
        </div>
      </div>
    );
  }
});