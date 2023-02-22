import React from 'react';


class ChildComponent extends React.Component {
    // state = {
    //     name: "Quang",
    //     channel: "Quang toi"
    // }
    // handelOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handelClickButton = () => {
    //     alert('Click me');

    // }

    // render() {

    //     return (
    //         <div>
    //             <input type="text" value={this.state.name} onChange={(event) => this.handelOnChangeName(event)}></input>

    //             <p> Day la react component, My name is {this.state.name}</p>

    //             <p>My youtube channel is {this.state.channel}</p>
    //             <div className='button'>
    //                 <button onClick={() => this.handelClickButton()}>Click me</button>
    //             </div>
    //         </div>

    //     )
    // }

    state = {
        fistName: '',
        lastName: ''
    }
    handleChangeFistName = (event) => {
        this.setState({
            fistName: event.target.value
        })

    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {

        alert("click me");
        console.log(this.state)
    }

    render() {

        console.log("Check props: ", this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, arrayJobs } = this.props;/*Ten bien trung ten key */

        return (

            <div>

                <div className='Jobs-list'>
                    {
                        arrayJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.tittle} -- {item.salaly}
                                </div>
                            )
                        })
                    }

                </div>

            </div>

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
export default ChildComponent;