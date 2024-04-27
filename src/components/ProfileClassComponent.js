import React from "react";

class ProfileClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 0
        }
        console.log('Constructor called')
    }
    componentDidMount() {
        // const data = fetch()
        // if (data) {

        //     console.log(json)
        // }
        console.log('componentDidMount called')
    }
    render() {
        console.log('Render is called')
        return <>
            <h1>Made by Biraj Regmi</h1>
            <h1>
                {
                  


                }

            </h1>
            <h2>{this.state.count1}</h2>
            <button onClick={() => {
                // we cannot directly change this.state.count1 = something
                this.setState({
                    count1: this.state.count1 + 1
                })
            }}>Increase</button>
        </>
    }
}
export default ProfileClassComponent
