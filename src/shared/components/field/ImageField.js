import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './ImageField.scss';

export default class ImageField extends Component {

  static propTypes = {
    target: PropTypes.string,
    multiple: PropTypes.bool,
    onDone: PropTypes.func
  }

  static defaultProps = {
    target: 'li',
    multiple: false,
    onDone: _.noop
  };

  input;

  constructor(props, context) {
    super(props, context);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    let $parent = window.Dom7(this.input).parents(this.props.target);
    $parent.addClass('lcb-image-field');
  }

  handleChange = (e) => {

    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {

      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {

        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        fileInfo.data = { data: fileInfo.base64, filename: fileInfo.file.name }

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length === files.length) {
          // Apply Callback function
          if (this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }

      } // reader.onload

    } // for

  }

  render() {
    let { multiple } = this.props;
    return (
      <input type="file" onChange={this.handleChange} multiple={multiple} ref={r => this.input = r} />
    );
  }

}
