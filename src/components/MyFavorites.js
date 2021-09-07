import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import CardChoclate from './CardChoclate.js';
import axios from 'axios';
import Updatemodel from './Updatemodel.js';


class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favChocolates: [],
      chosenChocolate: {},
      stateOfModal: false
    };

  }
  componentDidMount = async () => {
    const { user } = this.props.auth0;

    // http://localhost:3005/chocolate?email=a.nazzal1995@gmail.com

    let ChocolateURL = await axios.get(`${process.env.REACT_APP_SERVER}/chocolate?email=${user.email}`);
    this.setState({ favChocolates: ChocolateURL.data });
    // if (ChocolateURL.data.length <= 0) {
    //   console.log('Empty');
    // }
  }

  deleteChocolate = async (chocolate_id) => {
    const { user } = this.props.auth0;

    // http://localhost:3005/chocolate/3454354345?email=a.nazzal1995@gmail.com
    let ChocolateURL = await axios.delete(`${process.env.REACT_APP_SERVER}/chocolate/${chocolate_id}?email=${user.email}`);
    this.setState({ favChocolates: ChocolateURL.data });


  }
  getChocolateID = async (chocolate_id) => {
    const { user } = this.props.auth0;

    this.setState({ stateOfModal: false });

    // http://localhost:3005/chocolate, chocolateInfo
    let chosenChocolate = await this.state.favChocolates.find((chocolate) => {
      return chocolate._id === chocolate_id;
    })
    this.setState({ chosenChocolate: chosenChocolate, stateOfModal: true });


  }
  closeModal = () => {
    this.setState({ stateOfModal: false });

  }
  updateChocolate = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;

    // http://localhost:3005/chocolate/3454354345,chocolateInfo
    const chocolateInfo = {
      name: e.target.name.value,
      img: e.target.img.value,
      email: user.email
    }
    let ChocolateURL = await axios.put(`${process.env.REACT_APP_SERVER}/chocolate/${this.state.chosenChocolate._id}`, chocolateInfo);
    this.setState({ favChocolates: ChocolateURL.data });

  }
  render() {
    return (
      <>
        {((this.state.favChocolates.length <= 0) ? 'Your List is Empty ¯_(ツ)_/¯ ' :
          this.state.favChocolates.map((chocolate, idx) => {
            return (
              <CardChoclate
                key={idx}
                chocolate={chocolate}
                deleteChocolate={this.deleteChocolate}
                getChocolateID={this.getChocolateID}
              />
            )
          })
        )}
        {/* {this.state.favChocolates.map((chocolate, idx) => {
          return (
            <CardChoclate
              key={idx}
              chocolate={chocolate}
              deleteChocolate={this.deleteChocolate}
              getChocolateID={this.getChocolateID}
            />
          )
        })} */}

        <Updatemodel
          stateOfModal={this.state.stateOfModal}
          closeModal={this.closeModal}
          updateChocolate={this.updateChocolate}
          chosenChocolate={this.state.chosenChocolate}
        />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

