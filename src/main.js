import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './theme/main.scss'

var TRANSACTIONS = [
	{
		name: "paycheck",
		amount: 728.81,
		id: 1,
		date: "11/16/2017",
	},
	{
		name: "pizza",
		amount: -22.11,
		id: 2,
		date: "11/20/2017",
	},
	{
		name: "gas monies",
		amount: -15,
		id: 3,
		date: "11/28/2017",
	},
	{
		name: "kumquats",
		amount: -6.82,
		id: 4,
		date: "12/1/2017",
	},
	{
		name: "tips",
		amount: 86.28,
		id: 5,
		date: "12/1/2017",
	},
];

var nextId = 6;

class AddTransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			displayName: "Description",
            name: "",
			displayAmount: "Amount",
			amount: 0,
            date: "",
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onNameFocus = this.onNameFocus.bind(this);
        this.onNameBlur = this.onNameBlur.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onAmountFocus = this.onAmountFocus.bind(this);
        this.onAmountBlur = this.onAmountBlur.bind(this);
    }

	onSubmit(e) {
		e.preventDefault();
		if (!this.state.name || !this.state.amount) {
			alert('Both Description and Amount are required')
		}
		else {
			this.props.onAdd(this.state.name, this.state.amount);
			this.setState({ displayName: "Description" });
			this.setState({ name: "" });
			this.setState({ displayAmount: "Amount" });
			this.setState({ amount: "" });
			this.setState({ date: "" });
		}
	}

	onNameChange(e) {
		this.setState({displayName: e.target.value});
	}

	onNameFocus(e) {
		if(String(e.target.value).toLowerCase() == "description")
		{
			this.setState({displayName: ""});
		}
	}

	onNameBlur(e) {
		if(e.target.value=="")
		{
			this.setState({ displayName: "Description" });
			this.setState({ name: ""});
		}
		else
		{
			this.setState({ name: e.target.value });
		}
	}

    onAmountChange(e) {
		this.setState({displayAmount: e.target.value});
	}

    onAmountFocus(e) {
		if(String(e.target.value).toLowerCase() == "amount")
		{
			this.setState({displayAmount: ""});
		}
	}

	onAmountBlur(e) {

		let val = +parseFloat(e.target.value).toFixed(2)

		if (isNaN(val)) {
			this.setState({ displayAmount: "Amount" });
			this.setState({ amount: 0 });
		}
		else
		{
			this.setState({ displayAmount: val });
			this.setState({ amount: val });
		}
	}

	render() {
		return (
			<div className="add-transaction-form">
				<form onSubmit={this.onSubmit}>
					<input type="text" id="input-name" value={this.state.displayName} onChange={this.onNameChange} onFocus={this.onNameFocus} onBlur={this.onNameBlur} />
					<input id="input-amount" type="text" value={this.state.displayAmount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}
AddTransactionForm.defaultProps = {
    onAdd: PropTypes.func.isRequired,
};

function Transactions (props) {
	var totalBalance = props.items.reduce(function(total, item) {
		return total + item.amount;
	}, 0)

	return (
		<table className="balance">
			<tbody>
				<tr>
					<td>Balance:</td>
					<td>${parseFloat(totalBalance).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
	);
}

Transactions.propTypes = {
	items: PropTypes.array.isRequired,
};

function Header (props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
			<Transactions items={props.items}/>
		</div>
	);
}
Header.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};

function Item (props) {

	return (
		<div className="item">
			<div className="item-date">
				{props.date}
			</div>
			<div className="item-name">
				{props.name}
			</div>
			<div className="item-amount">
				<div className="amount">
					{props.amount}
				</div>
				<a onClick={props.onRemove}>
					<div className="remove">
						<span>X</span>
					</div>
				</a>
			</div>
		</div>
	);
}
Item.propTypes = {
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	onAmountChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.initialItems
        }
        this.onItemAdd = this.onItemAdd.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
    }

	onItemAdd(name, amount) {
		var d = new Date();
		this.state.items.push({
			name: name,
			amount: amount,
			id: nextId,
			date: d.toLocaleDateString("en-US"),
		});
		this.setState(this.state);
		nextId += 1;
	}

	onRemoveItem(index) {
		this.state.items.splice(index, 1);
		this.setState(this.state);
	}

	render() {
		return (
			<div className="checkbook">
                <Header title={this.props.title} items={this.state.items} />
                <div className="items">
                    {this.state.items.map(function(item, index) {
                        return (
                            <Item
                                name={item.name}
                                amount={item.amount}
                                key={item.id}
                                date={item.date}
                                onAmountChange={function(delta) {this.onAmountChange(index, delta)}.bind(this)}
                                onRemove={function() {this.onRemoveItem(index)}.bind(this)}
                            />
                        );
                    }.bind(this))}
                </div>
				<AddTransactionForm onAdd={this.onItemAdd} />
			</div>
		);
	}
}
Application.defaultProps = {
    title: "Someone's Checkbook",
};
Application.propTypes = {
	title: PropTypes.string,
	initialItems: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		date: PropTypes.string.isRequired,
	})).isRequired,
};

ReactDOM.render(<Application initialItems={TRANSACTIONS} title="My Checkbook"/>, document.getElementById('root'));
