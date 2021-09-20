import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { ME } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Profile } from "./Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";

class Me extends Component {
  async componentDidMount() {
    if (this.props.id === null) {
      return;
    }
    if (this.props.me.isLoaded === false) {
      this.props.startLoadingMe();

      const user = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`
      );

      this.props.setMe(user.data);

      this.props.stopLoadingMe();
    }
  }
  render() {
    return <Profile className={this.props.className} user={this.props.me} />;
  }
}

export const MeContainer = connect(
  mapStateToProps(ME),
  mapDispatchToProps(ME)
)(addLoading(Me));
