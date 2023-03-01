import React from 'react';


class Header extends React.Component {


    render() {


        return (

            <>
                <section id="hero" class="d-flex align-items-center">
                    <div class="container">
                        <h1>Welcome to Medilab</h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                    </div>
                </section>

            </>

        )
    }
}

export default Header;