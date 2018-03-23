import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Button, Card, Media, Title, SubTitle, Content, Image, Input } from 'reactbulma';
const propTypes = {
	addEmployer: PropTypes.func.isRequired,
	addEmployee: PropTypes.func.isRequired,
};

const contextTypes = {
	store: PropTypes.object
}

class HomePage extends Component {
	employers;
	constructor(props, state) {
		super(props, state);
		this.employeeInfoChange = this.employeeInfoChange.bind(this);
		this.employerInfoChange = this.employerInfoChange.bind(this);
		this.saveEmployee = this.saveEmployee.bind(this);
		this.saveEmployer = this.saveEmployer.bind(this);
		this.baseState = state;
	}

	componentWillMount() {
		this.setState({ ...this.state, employee: {} });
		const { store } = this.context;
		this.setState({ ...this.state, ...store.getState() });
		store.subscribe(() => {
			const state = store.getState();
			this.employers = state.companies.employers;
			this.setState({ ...this.state, ...state, employers: this.employers });
		});
	}

	employeeInfoChange(event) {
		// const employee = { ...this.state.employee, [event.target.id]: event.target.value };
		this.setState({ ...this.state, [event.target.id]: event.target.value });
	}

	employerInfoChange(event) {
		// event.target.value = this.state[event.target.id];
		// const employer = { ...this.state.employer, [event.target.id]: event.target.value };
		this.setState({ ...this.state, ['_' + event.target.id]: event.target.value, _emodified: true });
	}

	saveEmployee() {
		this.props.addEmployee(this.state.employee);
		this.setState({ ...this.state, modified: false });
	}

	saveEmployer() {
		const { _ename,
			_eaddress,
			_erevenue,
			_ephone,
			_emodified } = this.state;
		if (!!_ename &&
			!!_eaddress &&
			!!_erevenue &&
			!!_ephone
			&& !!_emodified) {
			this.props.addEmployer({
				name: _ename,
				address: _eaddress,
				revenue: _erevenue,
				phone: _ephone
			});
			this.setState({ ...this.baseState, _emodified: false });
		}
	}

	getEmployersSelect() {
		if (!!this.employers) {
			const options = [];
			let index = 0;
			this.employers.forEach((employer) => {
				options.push(<option key={index++} value={employer.name}>{employer.name}</option>);
			});
			return options;
		}
	}

	getEmployers() {
		if (!!this.employers) {
			const cards = [];
			let index = 0;
			for (let item of this.employers) {
				cards.push(<Card key={index++}>
					<Card.Content>
						<Media>
							<Media.Content>
								<Title is='4'>{item.name}</Title>
							</Media.Content>
						</Media>
						<Content>
							<div className="metadata">
								<label htmlFor="">
									Address:
								</label>
								<span>{item.address}</span>
							</div>
							<div className="metadata">
								<label htmlFor="">
									Revenue:
								</label>
								<span>{item.revenue}</span>
							</div>
							<div className="metadata">
								<label htmlFor="">
									Phone:
								</label>
								<span>{item.phone}</span>
							</div>
						</Content>
					</Card.Content>
				</Card>)
			}
			return cards;
		}
	}

	render() {
		const { addEmployee, addEmployer } = this.props;
		const state = this.state;
		// console.log(store);
		return (
			<React.Fragment>
				<div className="home__wrapper">
				</div>
				<div className="container">
					<div className="list-items">
						{this.getEmployers()}
					</div>
					<div className="new-items">
						<Card>
							<Card.Content>
								<Media>
									<Media.Content>
										<Title is='5'>Create New Company</Title>
									</Media.Content>
								</Media>
								<Content>
									<div className="form">
										<div className="form-element">
											<label>
												Name:
												<Input small id="ename" value={this.state.ename} onChange={this.employerInfoChange} autoComplete="Name" />
											</label>
										</div>
										<div className="form-element">
											<label>
												Address:
												<Input id="eaddress" small value={this.state.eaddress} onChange={this.employerInfoChange} autoComplete="Address" />
											</label>
										</div>
										<div className="form-element">
											<label>
												Revenue:
												<Input type="number" id="erevenue" small value={this.state.erevenue} onChange={this.employerInfoChange} autoComplete="Revenue" />
											</label>
										</div>
										<div className="form-element">
											<label>
												Phone:
												<Input id="ephone" small value={this.state.employee.ephone} onChange={this.employerInfoChange} autoComplete="Phone" />
											</label>
										</div>
										<div className="form-element">
											<Button onClick={() => this.saveEmployer()} primary>Save</Button>
										</div>
									</div>
								</Content>
							</Card.Content>
						</Card>
						<Card>
							<Card.Content>
								<Media>
									<Media.Content>
										<Title is='5'>Create New Person</Title>
									</Media.Content>
								</Media>
								<Content>
									<div className="form">
										<div className="form-element">
											<label>
												Name:
												<Input small id="name" onChange={this.employeeInfoChange} autoComplete="Name" />
											</label>
										</div>
										<div className="form-element">
											<label>
												Address:
												<Input small id="address" onChange={this.employeeInfoChange} autoComplete="Address" />
											</label>
										</div>
										<div className="form-element">
											<label>
												<select>
													<option>Select Employer</option>
													{this.getEmployersSelect()}
												</select>
											</label>
										</div>
										<div className="form-element">
											<Button onClick={() => this.saveEmployee()} primary>Save</Button>
										</div>
									</div>
								</Content>
							</Card.Content>
						</Card>
					</div>
				</div>
			</React.Fragment >
		);
	}
}

HomePage.propTypes = propTypes;
HomePage.contextTypes = contextTypes;
export default HomePage;