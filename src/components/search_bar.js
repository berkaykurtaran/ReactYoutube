import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input onKeyUp={this.onKeyUp.bind(this)} onChange={this.onInputChange.bind(this) }/>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        this.props.onTermChange(this.state.term);
    }

    onKeyUp(e) {
        // if (!e)
        //     e = window.event;
        // var keyCode = e.keyCode || e.which;
        // if (keyCode == '13') {
        //     this.props.onTermChange(this.state.term);
        //
        // }

    }


}


export default SearchBar;