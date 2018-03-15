import { connect } from 'react-redux';
import App from './components/app';

const AppWithRedux = connect(
  function mapStateToProps(state) {
    const {
      filteredProducts
    } = state.AppReducer;
    return {
      products: filteredProducts
    };
  }
)(MainComponent);



export default AppWithRedux;