import React from 'react';

class Login extends React.Component {

  state = {registrationMode: false};

  toggleMode = () => {
      this.setState({registrationMode: !this.state.registrationMode});
  }

  componentDidMount() {
      this.registrationMode = false;
  }

  render() {
    return (
      <div className='container'>
        <form className='form'>
          {this.state.registrationMode ? (
            <div className='row'>
              {' '}
              <form-group>
                {' '}
                <label htmlFor='name'>Your Name: </label>{' '}
                <input type='text' id='name' />
              </form-group>
            </div>
          ) : null}
          <div className='row'>
            <form-group>
              <label htmlFor='email'>Your Email: </label>
              <input type='email' id='email' />
            </form-group>
          </div>
          <div className='row'>
            <form-group>
              <label htmlFor='password'>Password: </label>
              <input type='password' id='password' />
            </form-group>
          </div>
          {this.state.registrationMode ? (
            <div className='row'>
              <form-group>
                <label htmlFor='retype-password'>Retype Password: </label>
                <input type='password' id='retype-password' />
              </form-group>
            </div>
          ) : null}
          <button type='Submit' className='btn btn-primary'>
            Login
          </button>
          <button type='button' className='btn btn-success' onClick={this.toggleMode}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
