import React, { Component } from 'react'
import './monitoring-more.css'; // css样式
import { Pagination, DatePicker, Input } from 'antd'
const { RangePicker } = DatePicker;
const { Search } = Input;

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoList: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
        }
    }

    componentDidMount() {
        // BM.Config.HTTP_URL = 'http://www.bigemap.com:9000';
        // 在ID为map的元素中实例化一个地图，并设置地图的ID号为 bigemap.googlemap-streets，ID号程序自动生成，无需手动配置，并设置地图的投影为百度地图 ，中心点，默认的级别和显示级别控件
        // var map = BM.map('map', 'bigemap.googlemap-streets', { center: [39.9023974684,116.4056851466], zoom: 10, zoomControl: true });
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render () {
        const { videoList } = this.state

        return (
            <div className="monitor-more">
                <div className="monitor-search">
                    <RangePicker onChange={this.onChange.bind(this)} />
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                <div className="more-content">
                    集中监控
                    <ul className="video-list">
                        {
                            videoList.map(item=>{
                                return (
                                    <li></li>
                                )
                            })
                        }
                    </ul>
                    <Pagination size="small" total={100} />
                </div>
            </div>
        )
    }
}


export default componentName