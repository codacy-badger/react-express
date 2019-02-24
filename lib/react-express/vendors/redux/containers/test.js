import { connect } from 'react-redux';
import * as actions from './../actions/test';
import Test from './../../../views/test/test.jsx';
import Axios from 'axios';

const mapStateToProps = (store) => {
  return {
    store: store.testReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (e) => {
      dispatch(actions.change(e));
    },
    submit: (value) => {
      // Axios
      Axios.post('/_test', {
        params: {
          type: value
        }
      }).then((res) => {
        dispatch(actions.submit(res.data));
      }).catch((err) => {
        console.log(err);
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);