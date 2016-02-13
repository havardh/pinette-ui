import React from "react";


export default class PodcastList extends React.Component {

  render() {
    return (
      <ul>
        {_.map(this.props.files, file =>
           <li key={file.fileName}>
               <a href="#"onClick={this.props.onFileClicked.bind(null, file)}>{file.fileName}</a> <span>({file.duration})</span>
           </li>
        )}
      </ul>
    );
  }

}

PodcastList.propTypes = {
  files: React.PropTypes.array,
  onFileClicked: React.PropTypes.func
};
