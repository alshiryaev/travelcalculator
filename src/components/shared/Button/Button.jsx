import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
  children = 'default button',
  onClick = f => f,
  className = '',
  disabled = false,
  active = false,
  ...attrs
}) => {


  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  }

  const classes = classNames('btn', className, { active });  
  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag {...attrs} disabled={disabled} onClick={onClickAction} className={classes}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
