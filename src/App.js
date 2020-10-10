import React, {Component} from 'react';
import './App.css';
import { ResponsiveImage,ResponsiveSource } from '@quintype/components';
import Footer from './Footer';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }
  componentDidMount() {
    let headers = new Headers();
    headers.append('Save-Data', 'on');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.thequint.com/api/v1/stories";
    fetch(proxyurl + url, {            
      method: 'GET',
      headers: headers

  })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result',result.stories);
          this.setState({
            stories: result.stories
          });
        },
        (error) => {
          this.setState({
            stories: []
          });
        }
      )
  }

  render() {
    const stories = this.state.stories.map((data) => {
      console.log(data["hero-image-s3-key"]);
      return (
        <div className="card card-margin">
        <div className="card-body">
        <h3 className="card-title">{data.headline}</h3>
        <h6 className="card-subtitle mb-2 text-muted">{data.sections[0].name}</h6>
        <a href={data.url} target="_blank" className="card-link">{data["author-name"]}</a>
      </div>
        </div>
      )
    })
    return <>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        {stories}
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className="row">
    <Footer /></div></>
  }
}
