import React, {Component} from 'react';

class FormTextArea extends Component {
  render() {
    return <div className="my-2">
      {this.props.label && <label className="block">
        {this.props.label}
      </label>}
      <textarea className={`
        bg-white
        focus:outline-none
        focus:shadow-outline
        border
        border-gray-300
        rounded-lg
        py-2
        px-4
        block
        w-full
        appearance-none
        leading-normal
        ${this.props.classes}
      `}
      name={this.props.name}
      placeholder={this.props.placeholder}
      ></textarea>
    </div>
  }
}

export default FormTextArea;
