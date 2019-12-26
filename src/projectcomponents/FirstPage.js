import React from 'react';
import Clouds from './clouds.jpg';


class FirstPage extends React.Component {
    render() {
        return (

            <div className='container-fluid p-0'>
                <div className='text col-lg-8 col-sm-12 col-md-12 col-12' >
                    <h3 className='text-center text-light mb-3'>Help u today website is for u now ..!</h3>
                    <input type='text' className='form-control text-info' />
                </div>
                <img src={Clouds} alt='clouds' width='100%' style={{ height: '740px' }} />
            </div>
        )
    }
}

export default FirstPage;