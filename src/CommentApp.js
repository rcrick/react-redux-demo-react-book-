import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments()
    }

    _loadComments() {
        let comments = localStorage.getItem('comments');
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }

    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    handleDeleteComment = (index) => {
        const comments = this.state.comments
        comments.splice(index, 1);
        this.setState({ comments });
        this._saveComments(comments);
    }

    handleSubmitComment = (comment) => {
        const comments = this.state.comments
        comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
        this._saveComments(comments);
    }

    render() {

        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} />
            </div>
        )
    }
}

export default CommentApp