import { connect } from 'react-redux';
import NumberPage from 'components/NumberPage';

const mapStateToProps = state => ({
  number: state.clickCounter.number,
});

export default connect(mapStateToProps)(NumberPage);

