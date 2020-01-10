import { Message } from '../components/Message/Message';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  message: state.message,
});

export const MessageContainer = connect(mapStateToProps, null)(Message);
