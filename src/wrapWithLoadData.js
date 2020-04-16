import React, { Component } from 'react';

export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                data: null
            }
        }

        componentWillMount() {
            let data = localStorage.getItem(name);
            try {
                this.setState({ data: JSON.parse(data) })
            } catch (e) {
                this.setState({ data })
            }
            this.setState({ data });
        }

        saveData = (data) => {
            try {
                localStorage.setItem(name, JSON.stringify(data))
            } catch {
                localStorage.setItem(name, `${data}`);
            }
        }

        render() {
            return <WrappedComponent data={this.setState.data} saveData={this.saveData} {...this.props} />
        }
    }
    return NewComponent;
}