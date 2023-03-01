import React from 'react';




class TopBar extends React.Component {


    render() {


        return (

            <>
                <div id="topbar" class="d-flex align-items-center fixed-top">
                    <div class="container d-flex justify-content-between">
                        <div class="contact-info d-flex align-items-center">
                            <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                            <i class="bi bi-phone"></i> +1 5589 55488 55
                        </div>
                        <div class="d-none d-lg-flex social-links align-items-center">
                            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
// const ChildComponent = (props) => {
//     let arrayJobs = props.a;
//     return (

//         <div className='Jobs-list'>
//             {
//                 arrayJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.tittle} -- {item.salaly}
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }
export default TopBar;