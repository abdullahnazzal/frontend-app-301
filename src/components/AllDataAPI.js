import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CardAPI from './CardAPI';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chocolates: []
        };

    }
    componentDidMount = async () => {
        const { user } = this.props.auth0;

        //http://localhost:3005/getChocolateAPI?email=a.nazzal1995@gmail.com

        let ChocolateURL = await axios.get(`${process.env.REACT_APP_SERVER}/getChocolateAPI?email=${user.email}`);
        this.setState({ chocolates: ChocolateURL.data });
        console.log(ChocolateURL.data);


    }
    getChocolateID = async (chocolate_name) => {
        const { user } = this.props.auth0;


        // http://localhost:3005/chocolate, chocolateInfo
        let chosenChocolate = await this.state.chocolates.find((chocolate) => {
            return chocolate.name === chocolate_name;
        })
        console.log(chosenChocolate);
        let ChocolateURL = await axios.post(`${process.env.REACT_APP_SERVER}/chocolate`,chosenChocolate);

    }
    render() {
        return (
            <>
                {
                    this.state.chocolates.map((chocolate, idx) => {
                        return (
                            <CardAPI
                                key={idx}
                                chocolate={chocolate}
                                getChocolateID={this.getChocolateID}
                            />
                        )
                    })
                }
            </>

        )
    }
}

export default withAuth0(AllDataAPI);
