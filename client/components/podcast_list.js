import React from "react";


const PodcastLine = (props) => (
  <li key={props.file.fileName}>
    <a href="#"onClick={props.onClick}>
      {props.file.fileName}
    </a>
    <br />
    <span>({props.file.duration})</span>
  </li>
);

export default class PodcastList extends React.Component {

  onClick(file) {
    this.props.onFileClicked(file);
  }

  render() {
    return (
      <ul className="podcast-list">
        {_.map(this.props.files, file =>
          <PodcastLine
            key={file.fileName}
            file={file}
            onClick={() => this.onClick(file)}
          />
        )}
      </ul>
    );
  }

}

PodcastList.propTypes = {
  files: React.PropTypes.array,
  onFileClicked: React.PropTypes.func
};
