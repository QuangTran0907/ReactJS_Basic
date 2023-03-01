import React from 'react';
import DepartmentItem from './DepartmentItem';
import ServiceBlock from './ServiceBlock';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

class DepartmentSection extends React.Component {


    render() {


        return (

            <BrowserRouter>
                <section id="departments" class="departments">
                    <div class="container">

                        <div class="section-title">
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row gy-4">
                            <div class="col-lg-3">
                                <ul class="nav nav-tabs flex-column">
                                    <li class="nav-item">
                                        <Link class="nav-link active show" data-bs-toggle="tab" to="/Cardiology">Cardiology</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" data-bs-toggle="tab" to="/Neurology">Neurology</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" data-bs-toggle="tab" to="/Hepatology">Hepatology</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" data-bs-toggle="tab" to="/Pediatrics">Pediatrics</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" data-bs-toggle="tab" to="/Eye Care">Eye Care</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-9">
                                <div class="tab-content">
                                    <Routes>
                                        <Route path="/Cardiology" element={<DepartmentItem />} />
                                        <Route path="/Neurology" element={<ServiceBlock />} />
                                        <Route path="/Hepatology" element={<DepartmentItem />} />
                                        <Route path="/Pediatrics" element={<ServiceBlock />} />
                                    </Routes>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </BrowserRouter >

        )
    }
}

export default DepartmentSection;