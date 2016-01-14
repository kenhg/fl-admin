import _ from 'lodash' // eslint-disable-line
import React, {PropTypes} from 'react'
import ReactQuill from 'react-quill'

export default class QuillEditor extends React.Component {

  render() {
    console.log('quill got props', this.props)

    return (
      <div className="form-group form-group-lg">
        {this.props.label ? (<label className="control-label">{this.props.label}</label>) : null}
        <ReactQuill defaultValue={this.props.initialValue} theme="snow" {...this.props} />
      </div>
    )
  }
}

QuillEditor.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
}