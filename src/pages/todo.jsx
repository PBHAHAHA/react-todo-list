import React , { Component } from 'react';
import './todo.css';

import Header from '../components/header/header';
import List from '../components/list/list';

export default class Todo extends Component {
    render () {
        return (
            <div className="todo">
                <Header></Header>
                <List></List>
            </div>
        )
    }
}