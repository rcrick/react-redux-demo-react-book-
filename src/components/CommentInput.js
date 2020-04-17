import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            content: ''
        }
    }

    // componentWillMount() {
    //     this._loadUsername();
    // }

    componentDidMount() {
        this.textarea.focus();
    }


    handleUsernameBlur = (e) => {
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value)
        }
    }


    handleUsernameInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    // _saveUsername(username) {
    //     localStorage.setItem('username', username)
    // }

    // _loadUsername() {
    //     const username = localStorage.getItem('username');
    //     if (username) {
    //         this.setState({ username })
    //     }
    // }




    handleSubmit = () => {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            });
        }
        this.setState({ content: '' })
    }


    render() {
        return (
            <div className='comment-input' >
                <div className='comment-field' >
                    <span className='comment-field-name'>用户名</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameInput}
                            onBlur={this.handleUsernameBlur}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleCommentInput}
                            ref={textarea => this.textarea = textarea} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
          </button>
                </div>
            </div>
        )
    }
}

export default ComponentInput