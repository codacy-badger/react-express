import { connect } from 'react-redux';
import Index from './../../../views/index/index.jsx';

const mapStateToProps = (store) => {
  return {
    store: store.indexReducer,
  }
}

export default connect(
  mapStateToProps
)(Index);