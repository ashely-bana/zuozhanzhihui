import React, { Component, Fragment } from 'react'
import './monitoring.css'; // css样式
import Tree from 'antd/lib/tree'
const { TreeNode } = Tree;

class componentName extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // BM.Config.HTTP_URL = 'http://www.bigemap.com:9000';
        // 在ID为map的元素中实例化一个地图，并设置地图的ID号为 bigemap.googlemap-streets，ID号程序自动生成，无需手动配置，并设置地图的投影为百度地图 ，中心点，默认的级别和显示级别控件
        // var map = BM.map('map', 'bigemap.googlemap-streets', { center: [39.9023974684,116.4056851466], zoom: 10, zoomControl: true });
    }

    render () {
        return (
            <div className="monitor">
                <div className="monitor-left">
                    <div className="device-info">
                        设备信息
                    </div>
                    <div id="map" className="map"></div>
                </div>
                <div className="monitor-middle">
                    
                </div>
                <div className="monitor-right">
                    集中监控
                </div>
            </div>
        )
    }
}


export default componentName