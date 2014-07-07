/* @jsx React.DOM */
window.LGI = {};

window.LGI.Carusel = React.createClass({
    getInitialState: function() {
        return {
            color: '#000000'
        };
    },
    render: function() {
        console.log(this.props.caseSensitivePropertyName);

        var rows = [];

        if (this.props.items === undefined) {
            return <div></div>;
        }

        this.props.items.forEach(function(item) {
            rows.push(<li key={item.text}>{item.text}</li>);
        });

        return <div>&lt;my-reactive-element&gt;<ul style={this.state}>{rows}</ul>&lt;/my-reactive-element&gt;</div>;
    },
    changeColor: function(color) {
        this.state.color = color;
        this.forceUpdate();
    }
});

document.registerReact('my-reactive-element', window.LGI.Carusel);