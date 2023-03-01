import React from 'react';
import SectionCPN from './childrenOfMain/SectionCPN';
import ServiceSectionCPN from './childrenOfMain/ServiceSectionCPN';
import AboutSection from './childrenOfMain/AboutSection';
import AppointmentSection from './childrenOfMain/AppointmentSection';
import DepartmentSection from './childrenOfMain/DepartmentSection';
import DoctorsSection from './childrenOfMain/DoctorsSection';


class Main extends React.Component {


    render() {


        return (

            <>
                <main id="main">
                    <SectionCPN />
                    <AboutSection />
                    <ServiceSectionCPN />
                    <AppointmentSection />
                    <DepartmentSection />
                    <DoctorsSection />
                </main>

            </>

        )
    }
}

export default Main;