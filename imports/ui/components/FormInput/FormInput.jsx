import React, {Component} from 'react';

class FormInput extends Component {
  render() {
    return <div className="my-2">
      {this.props.label && <label
        className="block"
        htmlFor={this.props.name}
        >
        {this.props.label}
      </label>}
      <input className="
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
      "
      id={this.props.name}
      required={this.props.required || false}
      name={this.props.name}
      type={this.props.type || 'text'}
      placeholder={this.props.placeholder}
      onChange={this.props.onChange}
      />
    </div>
  }
}

export default FormInput;
