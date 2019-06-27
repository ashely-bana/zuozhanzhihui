import React, { Component } from 'react'
import './monitoring.css'; // css样式
import { Tree, Slider } from 'antd'
const { TreeNode } = Tree;
const iconCameraUrl = require( '../../../../common/monitor-img/icon_shexiang.png')
const iconShebeiUrl = require( '../../../../common/monitor-img/icon_shebei.png')
const linjinPhoto = require( '../../../../common/monitor-img/shipin.png')
const mainSrc = require('./rpi_car.MP4')

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currRoom: null,
            videoRef: [],
            status: false,
            volume: 100,
            volumeRange: false,
            map: null,
            deviceList: [],
            btn: true,
            cameraNo: 'dzm-001-03',
            control: '1',
            luminosity: 100,
            transparency: 100,
            tone: 100,
            saturation: 100,
            frameRate: 100,
            definition: 100,
            commentList:  [{
                id: 1,
                commentTime: '2019-05-23 19:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            },{
                id: 2,
                commentTime: '2019-05-23 18:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            },{
                id: 3,
                commentTime: '2019-05-23 17:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            }],
            nearbyList: [{
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            }, {
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    id: 2,
                    commentTime: '2019-05-23 18:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    id: 3,
                    commentTime: '2019-05-23 17:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            }, {
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    id: 2,
                    commentTime: '2019-05-23 18:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    id: 3,
                    commentTime: '2019-05-23 17:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    id: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            }],
            gData: [{
                "title":"朝阳区",
                "key":"0-0",
                "children":[{
                    "title":"案件一",
                    "key":"0-0-0",
                    "children":[{
                        "title":"任务一",
                        "key":"0-0-0-0",
                        "children":[{
                            "title":"第一小队",
                            "key":"0-0-0-0-0",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-0-0-0-0",
                                "type": "camera",
                                "lng":39.90,
                                "lat":116.40
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-0-0-0-1",
                                "type": "shebei",
                                "lng":40.00,
                                "lat":116.50
                            },{
                                "title":"人员A",
                                "key":"0-0-0-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-0-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-0-0-1-0",
                                "type": "camera",
                                "lng":39.91,
                                "lat":116.51
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-0-0-1-1",
                                "type": "shebei",
                                "lng":40.92,
                                "lat":116.52
                            },{
                                "title":"人员A",
                                "key":"0-0-0-0-1-2"
                            }]
                        }]
                    },{
                        "title":"任务二",
                        "key":"0-0-0-1",
                        "children":[{
                            "title":"第一小队",
                            "key":"0-0-0-0-0",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-0-0-0-0",
                                "type": "shebei",
                                "lng":39.93,
                                "lat":116.53
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-0-0-0-1",
                                "type": "camera",
                                "lng":39.70,
                                "lat":116.20
                            },{
                                "title":"人员A",
                                "key":"0-0-0-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-0-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-0-0-1-0",
                                "type": "shebei",
                                "lng":39.80,
                                "lat":116.30
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-0-0-1-1",
                                "type": "shebei",
                                "lng":39.70,
                                "lat":116.20
                            },{
                                "title":"人员A",
                                "key":"0-0-0-0-1-2"
                            }]
                        }]
                    }]
                },{
                    "title":"案件二",
                    "key":"0-0-1",
                    "children":[{
                        "title":"任务一",
                        "key":"0-0-1-0",
                        "children":[{
                            "title":"第一小队",
                            "key":"0-0-1-0-0",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-0-0",
                                "type": "camera",
                                "lng":39.60,
                                "lat":116.10
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-0-1",
                                "type": "camera",
                                "lng":39.50,
                                "lat":116.00
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-1-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-1-0",
                                "lng":36.40,
                                "lat":113.40
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-1-1",
                                "lng":35.90,
                                "lat":112.90
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-1-2"
                            }]
                        }]
                    },{
                        "title":"任务二",
                        "key":"0-0-1-1",
                        "children":[{
                            "title":"第一小队",
                            "key":"0-0-1-0-0",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-0-0",
                                "lng":41.90,
                                "lat":117.90
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-0-1",
                                "lng":42.40,
                                "lat":118.40
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-1-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-1-0",
                                "lng":42.90,
                                "lat":118.90
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-1-1",
                                "lng":43.40,
                                "lat":119.40
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-1-2"
                            }]
                        }]
                    }]
                }]
            }],
            expandedKeys: ['0-0', '0-0-0', '0-0-0-0']
        }
    }

    componentDidMount() {
        window.BM.Config.HTTP_URL = 'http://www.bigemap.com:9000';
        // 在ID为map的元素中实例化一个地图，并设置地图的ID号为 bigemap.googlemap-streets，ID号程序自动生成，无需手动配置，并设置地图的投影为百度地图 ，中心点，默认的级别和显示级别控件
        var map = window.BM.map('map', 'bigemap.googlemap-satellite', { center: [39.9023974684,116.4056851466], zoom: 10, zoomControl: true });
        const { gData } = this.state;
        const list = [];
        this.findDevice(gData, list);
        var video = this.refs.mainVideo;
        const volume = video.volume * 100;
        console.log(list)
        this.setState({
            map,
            deviceList: list,
            volume
        })
        this.setMarker();

    }

    findDevice = (data, deviceList) => {
        data.map(item=>{
            if(item.children){
                this.findDevice(item.children, deviceList)
            }else{
                deviceList.push(item)
            }
        })
    }

    expand() {
        const { btn } = this.state
        this.setState({
            btn: !btn
        })
    }

    changeControl(control) {
        this.setState({
            control: control
        })
    }

    stopVoip = () => {
        const { videoRef } = this.state;
        videoRef.map(item=>{
            item.srcObject = null;
            item.load();
        })
        this.setState({
            currRoom: null
        })
    }

    voipSetStream = (streamObj) => {
        const { videoRef } = this.state;
        videoRef.map(item=>{
            if(!item.srcObject){
                item.srcObject = streamObj;
                item.play();
            }
        })
    }

    voipCallBack = (data, status, oper) => {
        var thisRoom = data.obj;
        switch (status){
            case "connect success":
                //连接成功
                thisRoom.createStream();
                break;
            case "connect failed":
            case "connect closed":
                this.stopVoip();
                //连接失败
            break;
            case "onWebrtcMessage":
                //视频接口消息
                switch(data.type)
                {
                    case "streamCreated":
                        //本地视频流创建，data.status == "success"为成功
                        if (data.status === "success") {
                            this.voipSetStream(data.streamObj);
                            thisRoom.joinRoom();
                        }
                        else {
                            // voipConnectDlg.dialog("close");
                            alert("获取摄像头视频失败！请检查摄像头设备是否接入！error:" + data.error);
                        }
                        break;
                    case "voipStreamReady":
                        //远端视频流准备，data.status == "success"为成功
                        //可以使用data.streamObj对象
					    this.voipSetStream(data.streamObj);
                        break;
                }
                break;
            case "onVoipMessage":
                switch(data.type)
                {
                    case "voipRefuse":
                    //对方拒绝了通话
                    break;
                    case "voipHangup":
                    //对方挂断了通话
                    break;
                    case "voipConnect":
                    //voip接通
                    break;
                    case "voipBusy":
                    //对方正忙
                    break;
                    case "voipSingleMsg":
                    //收到voip消息
                    break;
                }
                break;
        }
    }

    setMarker = () => {
        const { deviceList } = this.state;
        console.log(deviceList)
        const _this = this;
        deviceList.slice(0,2).map(item=>{
            let marker, currRoom;
            const { map } = this.state;
            if(item.type === "camera"){
                marker = window.BM.marker(window.BM.latLng(item.lng,item.lat),{icon:window.BM.icon({iconUrl:iconCameraUrl})}).addTo(map);
            }else{
                marker = window.BM.marker(window.BM.latLng(item.lng,item.lat),{icon:window.BM.icon({iconUrl:iconShebeiUrl})}).addTo(map);
            }
            marker.on("click", function(e){
                currRoom = window.StarRtc.Instance.getVoipRoomSDK("call", _this.voipCallBack, { "roomInfo": { "targetId": item.key } });
                currRoom.sigConnect();
                _this.setState({
                    currRoom: currRoom
                });
            })
        })
    }
    
    onSelect = (selectedKey, info) => {
        console.log('selected', selectedKey, info);
        console.log(this)
        const list = [];
        this.findDevice(info.selectedNodes, list);
        this.setState({
            deviceList: list
        })
        this.setMarker();
    }

    handleVideoRef = (target) => {
        const { videoRef } = this.state;
        videoRef.push(target);
    }

    playVideo(index) {
        // $("#mainVideo")[0].srcObject = this.state.videoRef[index].srcObject;
        // this.refs.mainVideo.src = "https://github.com/starrtc/iot_car_demo/raw/master/rpi_car.MP4";
    }

    vidplay = () => {
        var video = this.refs.mainVideo;
        const { status } = this.state;
        if(video.paused) {
            video.play();
            this.setState({
                status: !status
            })
        }else{
            video.pause();
            this.setState({
                status: !status
            })
        }
    }
    
    skip = (value) => {
        var video = this.refs.mainVideo;
        // var video = document.getElementById("mainVideo");
        video.currentTime += value;
    }

    volume = () => {
        const { volumeRange } = this.state;
        this.setState({
            volumeRange: !volumeRange
        })
    }

    handleVolume = (value) => {
        var video = this.refs.mainVideo;
        video.volume = value/100;
        this.setState({
            volume: value/100
        })
    }

    render () {
        const { gData, btn, cameraNo, commentList, nearbyList, control, status, volume, volumeRange,
            luminosity, transparency, tone, saturation, frameRate, definition } = this.state

        const loop = data =>
                data.map(item => {
                    if (item.children && item.children.length) {
                        return (
                        <TreeNode key={item.key} title={item.title}>
                            {loop(item.children)}
                        </TreeNode>
                        );
                    }
                    return <TreeNode key={item.key} title={item.title} />;
                });
        return (
            <div className="monitor">
                <div className="monitor-left">
                    <div className="device-info">
                        设备信息
                        <div className="tree">
                            <Tree
                                className="draggable-tree"
                                defaultExpandedKeys={this.state.expandedKeys}
                                onSelect={this.onSelect}
                            >
                                {loop(gData)}
                            </Tree>
                        </div>
                    </div>
                    <div id="map" className="map"></div>
                </div>
                <div className="monitor-middle">
                    <ul className="monitor-list">
                        <li onClick={this.playVideo.bind(this,1)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.playVideo.bind(this,1)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.playVideo.bind(this,1)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.playVideo.bind(this,1)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                    </ul>
                </div>
                <div className={`btn ${ btn ? 'shouqi' : 'tankai' }`} onClick={this.expand.bind(this)}></div>
                <div className={`monitor-right ${btn ? '': 'hide'}`} >
                    集中监控
                    <div className="content">
                        <video id="mainVideo" width="704" height="400" ref="mainVideo" autoPlay src={mainSrc}></video>
                        <div className="buttonDiv">
                            <button id="rew" onClick={this.skip.bind(this,-10)}></button>
                            <button id="play" className={`${status?'zanting':''}`} onClick={this.vidplay.bind(this)}></button>
                            <button id="fastFwd" onClick={this.skip.bind(this,10)}></button>
                            <button id="volume" onClick={this.volume.bind(this)}></button>
                            <Slider vertical disabled={false} defaultValue={volume} onChange={this.handleVolume}
                                className={`volumeSlider ${volumeRange?'':'hide'}`}
                            />
                        </div>
                        <div className="video-right">
                            <p>摄像头编号：{cameraNo}</p>
                            <ul className="video-control">
                                <li className={`${control === '1' ? 'active' : ''}`} onClick={this.changeControl.bind(this,'1')}>云台控制</li>
                                <li className={`${control === '2' ? 'active' : ''}`} onClick={this.changeControl.bind(this,'2')}>视频控制</li>
                            </ul>
                            <div className={`video-content ${control === '1' ? '' : 'hide'}`}>
                                        <div className="yuntai-left">
                                            <div className="shang"></div>
                                            <div className="you"></div>
                                            <div className="xia"></div>
                                            <div className="zuo"></div>
                                            <div className="zhong"></div>
                                        </div>
                                        <div className="yuntai-right">
                                            <p><span>缩放</span><span className="anniu"><i className="jia"></i></span><span className="anniu"><i className="jian"></i></span></p>
                                            <p><span>光圈</span><span className="anniu">大</span><span className="anniu">小</span></p>
                                            <p><span>聚焦</span><span className="anniu">近</span><span className="anniu">远</span></p>
                                            <p><span>速度</span><Slider defaultValue={30} disabled={false} /></p>
                                        </div>
                                        <div className="yuntai-left-bottom">
                                            <p><span>扫描</span><span className="anniu">启</span><span className="anniu">停</span></p>
                                            <p><span>红外</span><span className="anniu">启</span><span className="anniu">停</span></p>
                                        </div>
                                        <div className="yuntai-right-bottom">
                                            <p><span>巡航</span><span className="anniu">启</span><span className="anniu">停</span></p>
                                            <p><span>雨刷</span><span className="anniu">启</span><span className="anniu">停</span></p>
                                        </div>
                                    </div>
                                    <div className={`video-content  ${control === '2' ? '' : 'hide'} attribute`}>
                                        <p>光度：{luminosity}</p>
                                        <p>透明度：{transparency}</p>
                                        <p>色调：{tone}</p>
                                        <p>饱和度：{saturation}</p>
                                        <p>帧率：{frameRate}</p>
                                        <p>清晰度：{definition}</p>
                                    </div>
                            <textarea className="remark" cols="30" rows="10" placeholder="请输入备注信息："></textarea>
                            <button>提交</button>
                        </div>
                        <ul className="brilliant-moment">
                                {
                                    commentList.map(item=>{
                                        return (
                                            <li>{item.commentTime} {item.commenter}标注了“{item.comment}”</li>
                                        )
                                    })
                                }
                        </ul>
                        <div className="nearby"><span>临近视频</span><span onClick={()=>this.props.history.push("/deploy/monitoringMore")}>查看更多 >></span></div>
                        <ul className="nearby-list">
                                {
                                    nearbyList.map((item,index)=>{
                                        if(index > 5){
                                            return null
                                        }else {
                                            return (
                                                <li>
                                                    {/* <video width="79" height="60" autoPlay>
                                                        <source src='' type="video/mp4" />
                                                        您的浏览器不支持 HTML5 video 标签。
                                                    </video> */}
                                                    <img src={linjinPhoto} width="79" height="60" onClick={this.playVideo} />
                                                    <ul className={`markList ${(index+1)%3 ? '' : 'mr0'}`}>
                                                            <li className="title">标注：</li>
                                                            {
                                                                item.commentList.map(comment=>{
                                                                    return (
                                                                        <li>{comment.commentTime} {comment.commenter}标注了“{comment.comment}”</li>
                                                                    )
                                                                })
                                                            }
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default componentName