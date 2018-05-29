import React from 'react';
import PropTypes from 'prop-types';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    //Called after the component has been rendered onto the page
  }

  componentWilReceiveProps(nextProps) {
    //Called when the props provided to the component are changed
  }

  componentWilUpdate(nextProps, nextState) {
    //Called when the props and/or state change
  }

  componentWillUnmount() {
    //Called when the component is removed
  }

  render() {
    //deconstructing props
    const { htmlId, value, label, onChange, placeholder} = this.props;
    //deconstructing state
    const { showPassword } = this.state;

    return (
      //items to render
    );
  }
}

Template.defaultsProps = {
  maxLength: 50,
  label: 'Password'
};

Template.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.sting.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.sting
};

export default Template;