

import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import List from "../../compoents/List";

import "./index.css";
//生成song数据
const getSong = (data)=>{

    let singgers =   data.singer.map(function (singer) {
        return singer.name
    }).join("-");

    let song = {
        name:data.title,
        singer:singgers,
        id:data.mid,
        album:data.album.mid,
        duration:data.interval,
        currentTime:0,

    };
    return song;
};

class LocalList extends Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }
    goBack() {
        this.props.history.goBack();
    }
    renderItem(song){
        return(
            <div onClick={()=>{

                this.props.play(song);
            }} className="recent-item" key={song.id}>
                <p className="text-overflow">{song.name}</p>
                <p className="text-overflow">{song.singer}</p>
            </div>
        )
    }
    render() {
        return (
            <div className="page recent-list">

                <div  className="play-all">
                    <header>
                        <h2 className="ignore" ref={(ref)=>{this.title=ref}}>
                            {/*返回按钮*/}
                            <span className="back ignore" onClick={()=>{
                                this.goBack()
                            }}> </span>
                            <p className="ignore text-overflow">最近播放</p>
                            <span> </span>
                        </h2>
                    </header>
                    <div>
                        <div onClick={()=>{
                            this.props.addToPlayingList(this.props.data)}} className="btn-play-all ignore"><span>播放全部</span></div>
                    </div>
                </div>


                <List
                    renderItem={this.renderItem}
                    data={this.props.data}
                    overHidden={false}
                />
            </div>
        )
    }
}

export default withRouter(LocalList)

