import React, {Component} from "react";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      animal: '',
      colour: '',
      fullName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.codename = this.codename.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      this.codename();
  }

  codename() {
    const { name, animal, colour } = this.state;
    const fullName = `${name} the ${colour} ${animal}`;
    this.setState({
      fullName,
    })
    if (name && animal && colour) {
      console.log(`Your codename is: ${fullName}`);
    } else {
      console.log("You don't have a codename")
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { fullName } = this.state;
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          Your name
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Your animal
          <input type="text" name="animal" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Your colour
          <input type="text" name="colour" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Give me my codename"/>
      </form>
      <p>{fullName ? fullName : null}</p>
      </React.Fragment>
    );
  }
}

export default Controls
