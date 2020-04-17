import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
class ComponentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment = (index) => {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }


    render() {
        return (
            <div>
                {this.props.comments.map(
                    (item, key) => <Comment comment={item} key={key} index={key} onDeleteComment={this.handleDeleteComment} />
                )}
            </div>
        )
    }
}

export default ComponentList