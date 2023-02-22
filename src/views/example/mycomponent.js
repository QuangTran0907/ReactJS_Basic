import React from 'react';
import ChildComponent from './ChildComponent';


class MyComponent extends React.Component {
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
        lastName: '',
        arrayJobs: [
            { id: 'abc', tittle: 'developer', salaly: '500' },
            { id: 'def', tittle: 'tester', salaly: '400' },
            { id: 'ghi', tittle: 'Gu', salaly: '800' }
        ]
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

        return (
            <div>
                <p>hello html form</p>
                <form action="">
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.fistName}
                        onChange={(event) => this.handleChangeFistName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="button" value="Submit" onClick={(event) => this.handleSubmit()} />
                    <ChildComponent name={this.state.fistName} age={"22"} arrayJobs={this.state.arrayJobs} />

                </form>


            </div>

        )
    }
}
export default MyComponent;