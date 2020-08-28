import React, {Component} from 'react';

class FormSelect extends Component {
  render() {
    return <div className="my-2">
      {this.props.label && <label className="block">
        {this.props.label}
      </label>}
      <select className="
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
      name={this.props.name}
      >
        {this.props.children}
      </select>
    </div>
  }
}

export default FormSelect;
