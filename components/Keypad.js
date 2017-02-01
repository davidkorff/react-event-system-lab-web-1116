const React = require('react')

class Keypad extends React.Component{
  enter(){
    console.log('Entering password...')
  }

  render(){
    return(
      <input type="password" onKeyUp={this.enter} />
    )
  }
}
module.exports = Keypad
