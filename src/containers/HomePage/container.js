import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/companies/actions'

const mapDispatchToProps = dispatch => ({
	addEmployer: (employerInfo) => dispatch(actions.addEmployer(employerInfo)),
	addEmployee: (employeeInfo) => dispatch(actions.addEmployee(employeeInfo))
});

export default connect(null, mapDispatchToProps)(HomePage);

