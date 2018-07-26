import React, { Component } from 'react';


class Portfolio extends Component {
    render() {
        return (
            <div id='projects' className='container'>
                <div className='title clearfix'>
                    <h1>
                        Moje prace
                    </h1>
                </div>
                <div className='galleryContent'>
                    <div className='galleryPart'>
                        <div className='galleryImage '>
                        </div>
                        <div className='projShortText'>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit.
                                </li>
                            </ul>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi architecto assumenda blanditiis commodi cupiditate delectus deserunt dignissimos distinctio dolor eum eveniet fugit hic id iure laudantium nam nisi optio placeat provident quae quam quasi reprehenderit, similique veniam veritatis!
                        </div>
                    </div>
                    <div className='galleryButtons'>
                        <p>
                            <button className="btn-left"><a href="#">Previous</a></button>
                        </p>
                        <p>
                            <button className="btn-right"><a href="#">Next</a></button>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export {Portfolio}