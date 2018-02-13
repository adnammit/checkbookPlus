
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');


//
// class Application extends React.Component {
//     // render: function() {
//     //     return (
//     //         <div className="checkbook">
//     //         <Header title={this.props.title} items={this.state.items} />
//     //         <div className="items">
//     //         {this.state.items.map(function(item, index) {
//     //             return (
//     //                 <Item
//     //                 name={item.name}
//     //                 amount={item.amount}
//     //                 key={item.id}
//     //                 date={item.date}
//     //                 onAmountChange={function(delta) {this.onAmountChange(index, delta)}.bind(this)}
//     //                 onRemove={function() {this.onRemoveItem(index)}.bind(this)}
//     //                 />
//     //             );
//     //         }.bind(this))}
//     //         </div>
//     //         <AddTransactionForm onAdd={this.onItemAdd}/>
//     //         </div>
//     //     );
//     // }
//     render() {
//         return <h1>World is YOU or ME or that other guy!</h1>
//     }
// }
//
// ReactDOM.render(<Application/>, document.getElementById('container'));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import deleteImg from './img/x.png';


var TRANSACTIONS = [
    {
        name: "pizza",
        amount: 22,
        id: 1,
        date: "11/20/2017",
    },
    {
        name: "gas monies",
        amount: 15,
        id: 2,
        date: "11/28/2017",
    },
    {
        name: "kumquats",
        amount: 6,
        id: 3,
        date: "12/1/2017",
    },
    {
        name: "tips",
        amount: -86,
        id: 4,
        date: "12/1/2017",
    },
];

var nextId = 5;
//
// var AddTransactionForm = React.createClass({
//     propTypes: {
//         onAdd: PropTypes.func.isRequired,
//     },
//
//     getInitialState: function() {
//         return {
//             def_name: "Description",
//             name: "Description",
//             def_amount: "Amount",
//             amount: "Amount",
//             date: "",
//         };
//     },
//
//     onSubmit: function(e) {
//         e.preventDefault();
//         this.props.onAdd(this.state.name,this.state.amount);
//         /* this.setState({name: "Description"}); */
//         this.setState({def_name: "Description"});
//         this.setState({name: def_name});
//         this.setState({def_amount: "Amount"});
//         this.setState({amount: def_amount});
//         this.setState({date: ""});
//     },
//
//     onAmountChange: function(e) {
//         console.log(e.target.value);
//         this.setState({amount: e.target.value});
//         /*this.setState({amount: amount}); */
//     },
//
//     onNameChange: function(e) {
//         console.log(e.target.value);
//         this.setState({name: e.target.value});
//         /*this.setState({_name: name});*/
//     },
//
//     onNameFocus: function(e) {
//         console.log(e.target.value);
//         if(e.target.value=="Description")
//         {
//             this.setState({name: ""});
//         }
//     },
//
//     onNameBlur: function(e) {
//         console.log(e.target.value);
//         if(e.target.value=="")
//         {
//             this.setState({name: "Description"});
//         }
//         /*this.setState({name: e.target.value});*/
//     },
//
//     onAmountFocus: function(e) {
//         console.log(e.target.value);
//         if(e.target.value=="Amount")
//         {
//             this.setState({amount: ""});
//         }
//     },
//
//     onAmountBlur: function(e) {
//         console.log(e.target.value);
//         if(e.target.value=="")
//         {
//             this.setState({amount: "Amount"});
//         }
//         /*this.setState({name: e.target.value});*/
//     },
//
//     render: function() {
//         return (
//             <div className="add-transaction-form">
//             <form onSubmit={this.onSubmit}>
//             <input type="text" id="input-name" value={this.state.name} onChange={this.onNameChange} onFocus={this.onNameFocus} onBlur={this.onNameBlur} />
//             <input id="input-amount" type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />
//             <input type="submit" value="Add" />
//             </form>
//             </div>
//         );
//     }
// });
//
// function Transactions (props) {
//     //var totalBalance = props.players.length;
//     var totalBalance = props.items.reduce(function(total, item) {
//         return total + item.amount;
//     }, 0)
//
//     return (
//         <table className="transactions">
//         <tbody>
//         <tr>
//         <td>Balance:</td>
//         <td>{totalBalance}</td>
//         </tr>
//         </tbody>
//         </table>
//     );
// }
//
// Transactions.propTypes = {
//     items: PropTypes.array.isRequired,
// };
//
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
//
// function Item (props) {
//
//     return (
//         <div className="item">
//         <div className="item-date">
//         {props.date}
//         </div>
//         <div className="item-name">
//         {props.name}
//         </div>
//         <div className="item-remove">
//         <a onClick={props.onRemove}>x</a>
//         </div>
//         <div className="item-amount">
//         {props.amount}
//         </div>
//         </div>
//     );
// }
// Item.propTypes = {
//     name: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//     date: PropTypes.string.isRequired,
//     onAmountChange: PropTypes.func.isRequired,
//     onRemove: PropTypes.func.isRequired,
// };

// var Application = React.createClass ({
//class Application extends React.Component {
//export default class Application extends React.Component {
//var Application = React.createClass ({
class Application extends React.Component {
    static propTypes: {
        title: PropTypes.string
        // initialItems: PropTypes.arrayOf(PropTypes.shape({
        //     name: PropTypes.string.isRequired,
        //     amount: PropTypes.number.isRequired,
        //     id: PropTypes.number.isRequired,
        //     date: PropTypes.string.isRequired,
        // })).isRequired,
    }

    static getDefaultProps() {
        return {
            title: "Someone's Checkbook",
        }
    }

    static getInitialState() {
        return {
            items: this.props.initialItems,
        };
    }

    onItemAdd(name, amount) {
        var d = new Date();
        this.state.items.push({
            name: name,
            amount: parseInt(amount,10),
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

            </div>
        );
    }
}

ReactDOM.render(<Application initialItems={TRANSACTIONS} title="My Checkbook"/>, document.getElementById('container'));





// // var Application = React.createClass ({
// class Application extends React.Component {
//     // render: function() {
//     //     return (
//     //         <div className="checkbook">
//     //         <Header title={this.props.title} items={this.state.items} />
//     //         <div className="items">
//     //         {this.state.items.map(function(item, index) {
//     //             return (
//     //                 <Item
//     //                 name={item.name}
//     //                 amount={item.amount}
//     //                 key={item.id}
//     //                 date={item.date}
//     //                 onAmountChange={function(delta) {this.onAmountChange(index, delta)}.bind(this)}
//     //                 onRemove={function() {this.onRemoveItem(index)}.bind(this)}
//     //                 />
//     //             );
//     //         }.bind(this))}
//     //         </div>
//     //         <AddTransactionForm onAdd={this.onItemAdd}/>
//     //         </div>
//     //     );
//     // }
//     render() {
//         return <h1>World</h1>
//     }
// }
//
// ReactDOM.render(<Application />, document.getElementById('container'));
