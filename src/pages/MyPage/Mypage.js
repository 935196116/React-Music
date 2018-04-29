import React, { Component } from 'react';

import {
    withRouter,
    Link
} from 'react-router-dom';
import data from './data.json';
import List from '../../compoents/List'
import './index.css';


class Mypage extends Component {


    render() {
        return (
            <div className="content my-page ignore">
                <div className="list-wrap ignore">

                    <List
                        data={data.data.disslist}
                        renderItem={(item,index)=>{
                            return (

                                <Link to={"/list/"+item.tid} key={item.tid}>
                                    <div  className="diss-item">
                                        <img className="ignore" src={item.diss_cover} alt=""/>
                                        <div className="intro">
                                            <p>{item.diss_name}</p>
                                            <p>{item.song_cnt}首</p>
                                        </div>
                                    </div>
                                </Link>

                            )
                        }}
                    >
                        <div className="avatar">
                            <div className="icon">
                                <img src="http://f.hiphotos.baidu.com/zhidao/pic/item/d1a20cf431adcbef63081c28abaf2edda3cc9fdb.jpg" alt=""/>
                                <span>未登录</span>
                            </div>
                            <div className="desc">
                                <p className="text-center">今日听歌15分钟</p>
                            </div>
                        </div>

                        <div className="main">
                            <Link to={"/list/2306806058"}>
                                <div className=" ignore btn my-love-list"></div>
                                <p className="text-center">我喜欢</p>
                                <p className="text-center">97</p>
                            </Link>
                            <Link to={"/recent"}>
                                <div className="ignore btn recent-list"></div>
                                <p className="text-center">最近播放</p>
                                <p className="text-center">200</p>
                            </Link>

                        </div>

                        <div className="my-list">
                            <p className="text-center">我的歌单</p>
                            <p className="list-num">3个歌单</p>
                        </div>
                    </List>


                </div>



            </div>

        );
    }
}

export default Mypage;
