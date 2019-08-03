import React , { Component } from 'react';
import { Input,Button,Modal } from 'antd';
import './list.css';

export default class List extends Component {
    state = {
        inputValue : "",
        listData : [],
        visible: false,
        listIndex: ''
    }
    componentDidMount() {
        this.initData()
    }
    // 初始化数据
    initData = () => {
        if(!window.localStorage.getItem('list')){
            this.setState({
                listData:   ['学习React']
            })
        }else{
            let data = window.localStorage.getItem('list').split(',')
            this.setState({
                listData:  data
            })
        }
        
    }
    //添加todo
    addList = () => {
        if(this.inputValue!==''){
            let newItem = this.state.inputValue
            let newList = this.state.listData;
            newList.push(newItem)
            this.setState({
                listData : newList,
                inputValue : ''
            })
        }
        let storage=window.localStorage;
        storage.setItem("list",this.state.listData)
    }
    //删除todo
    deleteList = (index) => {
        this.state.listData.splice(index,1)
        let newData = this.state.listData
        this.setState({
            listData: newData
        })
        window.localStorage.setItem("list",this.state.listData)
    }
    //编辑todo
    editList = (index) => {
        this.setState({
            visible: true,
            listIndex: index
        });
    }
    editInputValue = (event) => {
        console.log(event.target.value)
        this.state.listData.splice(this.state.listIndex,1,event.target.value)
        let newData = this.state.listData
        this.setState({
            listData: newData
        })
        window.localStorage.setItem("list",this.state.listData)
    }
    //点击OK
    handleOk = e => {
        
        this.setState({
          visible: false,
        });
    };
    //点击CANCEL
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    //输入框
    handleInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render () {
        return (
            <div className="List">
                <div className="list-input">
                    <Input value={this.state.inputValue} onChange={this.handleInputValue} placeholder="add your todo."></Input>
                    <Button onClick={this.addList} type="primary">ADD</Button>
                </div>
                <div className="list-box">
                    {
                       this.state.listData.map((item,index) => {
                           return (
                               <div className="item" key={index}>
                                    <li onClick={() => {
                                        this.editList(index)
                                    }} key={index}> {item} </li>
                                    <Button onClick={() => {
                                        this.deleteList(index)
                                    }}>删除</Button>
                               </div>
                              
                           )
                       })
                    }
                </div>
                <Modal
                    title="编辑"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input onChange={this.editInputValue} value={this.state.listData[this.state.listIndex]}></Input>
                </Modal>
                <p>直接点击内容即可编辑</p>
            </div>
        )
    }
}