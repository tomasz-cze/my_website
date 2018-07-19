import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <div className='header clearfix'>
                <h1>
                    Tomasz Czechlewski
                </h1>
                <section id='icons'>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <div id='line'></div>
            </div>
        )
    }
}

export {Header}