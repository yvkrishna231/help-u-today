import React from 'react';
import Worker from './Worker.jpg';
import FriendlyWorker from './FriendlyWorker.jpg'
import '../App.css'

class HelpCenter extends React.Component {
    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-12 col-12 col-sm-12 m-auto shadow p-3 bg-info text-white'>
                            <h3>IF YOU WEREN’T A DESIGNER BEFORE, NOW YOU WILL BE</h3>
                            <h1>Design your entire website right inside the WP Customizer</h1>
                            <p>Help-U-Today takes the Customizer to the next level so you can customize every
                               aspect of your website in a single interface. This includes headers, page
                               content, footers, navigation menus, global and individual styling.
                            </p>
                            <img id='pictures' className='col-12' src={Worker}></img>
                            <h1>Design features that will make your websites stand out</h1>
                            <p>With Help-U-Today you can combine design options like background,
                               overlay, graphic separator,  spacings, header layout and media
                               type to obtain truly unique and outstanding websites.
                            </p>
                            <h1>Friendly Behaviour Between Workers</h1>
                            <p>It seems like good when workers are work in healthy and friendly manner</p>
                            <img id='pictures' className='col-12' src={FriendlyWorker} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HelpCenter;