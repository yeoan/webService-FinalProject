import React, {Component} from 'react';
import './card.css';

class UserProfile extends React.Component {

  componentWillMount(){
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="page-wrapper" style={{height:'900px'}}>
          <div class="container-fluid">
              <div class="row">
              <div class="col-md-12">
                <h1 class="page-header">Profile</h1>
              </div>

    <div class="col-md-4 img">
      <img src="http://placehold.it/250x250" class="img-rounded"></img>
      <form action="http://127.0.0.1:3001/upload" method="post" encType="multipart/form-data">
        <input type="file" name="foo" accept="image/*"/>
        <input type="submit" />
      </form>
    </div>

    <div class="col-md-6 details">
      <blockquote>
        <h5>Fiona Gallagher</h5>
        <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small>
      </blockquote>
      <p>
        fionagallager@shameless.com <br />
        June 18, 1990 <br />
      </p>
      </div>
      <div class="col-md-12">
        <h1 class="page-header">Where you go!</h1>
      </div>

</div>
</div>
</div>

    );
  }
}

export default UserProfile;
