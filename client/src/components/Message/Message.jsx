import React from 'react';
import './Message.css';

export const Message = ({ message }) => message.length ? <div className="message"><span>{message}</span></div> : ''