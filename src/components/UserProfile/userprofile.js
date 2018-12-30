import React, {Component} from 'react';
import './card.css';
import axios from 'axios';

class UserProfile extends React.Component {

  componentDidMount(){
    this.getUserProfileData();
  }

  getUserProfileData(){
    let component = this;
    axios('http://127.0.0.1:3001/getUserProfile', {
      method: 'post',
      withCredentials: true
    })
    .then(function (response) {
      console.log(response);
      component.setState({
        username: response.data.result[0].name,
        email: response.data.result[0].email,
        address: response.data.result[0].address,
        image: response.data.result[0].image,
        birthday: response.data.result[0].birthday
      })
    })
    .catch(function (error) {
      console.log(error);
    }).then(function(){
      if(component.state.image == ''){
          //doNothing
      }else{
        component.getImage();
      }
    });
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditModeSubmit = this.handleEditModeSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getUserProfileData = this.getUserProfileData.bind(this);

    this.state = {
      username: '',
      email: '',
      address: '',
      image: '',
      birthday: '',
      editMode: false
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e){
    let component = this;
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("file", imagefile.files[0]);
    axios.post('http://127.0.0.1:3001/upload', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
     component.getUserProfileData()
    });
  }

  handleEditModeSubmit(){
    let formData = new FormData();
    let usernameField = document.querySelector('#username');
    let addressField = document.querySelector('#address');
    let birthdayField = document.querySelector('#birthday');
    formData.append("username", usernameField.value);
    formData.append("address", addressField.value);
    formData.append("birthday", birthdayField.value);
    axios.post('http://127.0.0.1:3001/editUserProfile', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
  }

  getImage(){
    let img =document.getElementById('img')
    let formData = new FormData();
    formData.append("filename", this.state.image);
    axios.post('http://127.0.0.1:3001/getImage', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
    // handle success
    console.log(response);
    img.src = "data:image/*;base64," + encode(response.data.result.Body.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
    function encode(data)
{
    var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
    return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
}
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
      <img src="http://placehold.it/250x250" style={{height:'250px',width:'250px'}} class="img-rounded" id="img"></img>
      <form>
        <input type="file" id="file" name="foo" accept="image/*"/>
        <button type="button" class="btn btn-default" onClick={this.handleSubmit}>submit</button>
      </form>
    </div>

    <div class="col-md-6 details">
      <blockquote>
        {this.state.editMode ? <input value={this.state.username} onChange={this.handleChange} placeholder="Username" type="text" id="username" name="username"/> : <h5>{this.state.username}</h5>}
        {this.state.editMode ? <small><input value={this.state.address} onChange={this.handleChange} placeholder="Address" type="text" id="address" name="address"/></small> : <small><cite title="Source Title">{this.state.address=='' ? "your address" : this.state.address}<i class="icon-map-marker"></i></cite></small>}
      </blockquote>
      <p>
        {this.state.email} <br />
        {this.state.editMode ? <input value={this.state.birthday} onChange={this.handleChange} placeholder="Birthday" type="text" id="birthday" name="birthday"/> : this.state.birthday=='' ? 'your birthday' : this.state.birthday} <br />
      </p>
      {
        this.state.editMode? <button type="button" class="btn btn-default" onClick={(e)=>{this.setState({editMode: false});this.handleEditModeSubmit()}}>submit</button> : <button type="button" class="btn btn-default" onClick={(e)=>{this.setState({editMode: true})}}>edit</button>
      }
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
