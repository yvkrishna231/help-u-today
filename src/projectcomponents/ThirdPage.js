import React, { Component, Fragment } from 'react';
import Shield from './shield.jpg';
import '../App.css'
class ThirdPage extends Component {

    state = {
        input: '',
        input1: '',
        error: false,
        error1: false,
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        if (this.state.input1 && this.state.input) {
            this.setState({ input: '', input1: '', error: false, error1: false })
        } else if (!this.state.input) {
            this.setState({ error: true })
        } else if (!this.state.input1) {
            this.setState({ error1: true, error: false })
        }

    }
    handleOnChange = (e) => {
        this.setState({ input: e.target.value });
    }
    handleOnChange1 = (e) => {
        this.setState({ input1: e.target.value });
    }
    render() {
        return (
            <Fragment className='p-0'>
                <div className='container p-2'>
                    <div className='row' >
                        < div className='col-lg-5 col-md-8 col-sm-10 col-12 bg-light m-auto text-center border shadow'
                            style={{ backgroundColor: '#ffffff', borderRadius: '15px' }} >
                            <img src={Shield}
                                alt='shield'
                                className='shield mt-5' />
                            <h1 style={{ fontSize: '45px' }} className='mt-2'>Help U Today </h1>
                            <p className='mb-5'>Remember Everything Is Important..!</p>
                            <a href={'https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin'}>
                                <button style={{ width: '290px', borderRadius: '16px' }} className='bg-light p-1'>
                                    <i className="fa fa-google text-danger mr-1" style={{ fontSize: '25px' }} aria-hidden="true"></i>
                                    <span style={{ fontWeight: 300 }}>Continue With Google</span>
                                </button>
                            </a>

                            <div className='col-lg-9 m-auto'>
                                <p id='lineptag'><span id='linespantag'>Or</span></p>
                            </div>
                            <div className='row'>
                                <div className='col-lg-8 col-md-8 m-auto text-center'>
                                    <span>
                                        <form onSubmit={this.handleOnSubmit}>
                                            <input
                                                type='text'
                                                id='formInput'
                                                value={this.state.input}
                                                className='form-control'
                                                onChange={this.handleOnChange}
                                                placeholder='Email' />
                                            {this.state.error && <p className='float-left text-danger'>This is a requred field</p>}
                                            <input
                                                type='text'
                                                id='formInput'
                                                value={this.state.input1}
                                                className='form-control mt-2'
                                                onChange={this.handleOnChange1}
                                                placeholder='Password' />
                                            {this.state.error1 && <p className='float-left text-danger'>This is a requred field</p>}
                                            <button id='formButton'
                                                className='btn btn-sm btn-success mb-4'>
                                                continue
                                             </button>
                                        </form>
                                        <div className='mb-5'>
                                            <small className=''>
                                                by creating an account you are agreeing our
                                                </small><br></br>
                                            <a className='text-success mr-1' href='https://evernote.com/legal/terms-of-service'>
                                                <small>Terms of Service</small>
                                            </a>
                                            <small>and </small>
                                            <a className='text-success' href='https://evernote.com/privacy'>
                                                <small>privacy policy</small>
                                            </a>
                                        </div>
                                        <div>
                                            <small className='bottomcreateaccountname'>Already have an account?</small>
                                            <a className='text-success'
                                                href='https://www.evernote.com/Login.action'><p>Sign in</p>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ThirdPage;