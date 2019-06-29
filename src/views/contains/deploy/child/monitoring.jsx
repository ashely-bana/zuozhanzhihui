import React, { Component } from 'react'
import './monitoring.css'; // css样式
import { Tree, Slider, Input } from 'antd'
import $ from 'jquery'
const { TreeNode } = Tree;
const { TextArea } = Input;
const iconCameraUrl = require( '../../../../common/monitor-img/icon_shexiang.png')
const iconShebeiUrl = require( '../../../../common/monitor-img/icon_shebei.png')
const linjinPhoto = require( '../../../../common/monitor-img/shipin.png')
const mainSrc = require('./rpi_car.MP4')
const userName = '张宏'
const agentId = "stargWeHN8Y7"

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // videoMeetingMsgWindow: new MyMsgWindow("videoMeetingMsgWindow", this.videoLiveInputMsgCallBack),
            currRoom: null,
            selectVideoMeetingIndex: -1,
            videoRef: [],
            status: false,
            volume: 100,
            volumeRange: false,
            map: null,
            deviceList: [],
            btn: true,
            remark: '',
            cameraNo: 'dzm-001-03',
            control: '1',
            luminosity: 100,
            transparency: 100,
            tone: 100,
            saturation: 100,
            frameRate: 100,
            definition: 100,
            commentList:  [{
                time: 1,
                commentTime: '2019-05-23 19:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            },{
                time: 2,
                commentTime: '2019-05-23 18:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            },{
                time: 3,
                commentTime: '2019-05-23 17:18:00',
                commenter: '宋江',
                comment: '此处很重要'
            }],
            nearbyList: [{
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            }, {
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    time: 2,
                    commentTime: '2019-05-23 18:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    time: 3,
                    commentTime: '2019-05-23 17:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            }, {
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    time: 2,
                    commentTime: '2019-05-23 18:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                },{
                    time: 3,
                    commentTime: '2019-05-23 17:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    time: 1,
                    commentTime: '2019-05-23 19:18:00',
                    commenter: '宋江',
                    comment: '此处很重要'
                }]
            },{
                commentList: [{
                    time: 1,
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
                                "key":"0-0-0-0-0-1"
                            },{
                                "title":"人员A",
                                "key":"0-0-0-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-0-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-0-0-1-0"
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-0-0-1-1"
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
                                "key":"0-0-1-0-0-0"
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-0-1"
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-1-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-1-0"
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-1-1"
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
                                "key":"0-0-1-0-0-0"
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-0-1"
                            },{
                                "title":"人员A",
                                "key":"0-0-1-0-0-2"
                            }]
                        },{
                            "title":"第二小队",
                            "key":"0-0-1-0-1",
                            "children":[{
                                "title":"设备类型-编号01",
                                "key":"0-0-1-0-1-0"
                            },{
                                "title":"设备类型-编号02",
                                "key":"0-0-1-0-1-1"
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

    videoLiveInputMsgCallBack = (msg)=> {
        const { currRoom } = this.state;
        if (currRoom != null) {
            currRoom.sendChatMsg(msg);
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
            deviceList: [...list],
            volume
        }, ()=>{
            this.setMarker();
        })
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
        console.log(videoRef)
        let index;
        for(let i = 0; i< videoRef.length; i++){
            if(!videoRef[i]){
                index = i - 1;
                break;
            }
        }
        videoRef[index].srcObject = null;
        videoRef[index].load();
        this.setState({
            currRoom: null
        })
    }

    voipSetStream = (streamObj) => {
        const { videoRef } = this.state;
        for(let i = 0; i< videoRef.length; i++){
            if(!videoRef[i].srcObject){
                videoRef[i].srcObject = streamObj;
                videoRef[i].play();
                break;
            }
        }
        console.log(videoRef)
    }

    videoMeetingCallBack = (data, status, oper) => {
        var thisRoom = data.obj;
        switch (status) {
            //链接状态
            case "connect success":
                switch (oper) {
                    case "open":
                        thisRoom.createStream();
                        break;
                    case "new":
                        thisRoom.createNew();
                        break;
                }
                break;
            case "connect failed":
            case "connect closed":
                this.stopVideoMeeting();
                break;
            case "onChatRoomMessage":
                switch (data.type) {
                    case "joinChatRoom":
                        if (data.status == "success") { }
                        else {
                            alert(data.failedStatus);
                        }
                        break;
                    case "recvChatPrivateMsg":
                        // this.state.videoMeetingMsgWindow.displayMessage(data.msg.fromId + "私信", data.msg.contentData, false);
                        alert(data.msg.fromId + "私信: " + data.msg.contentData);
                        break;
                    case "recvChatMsg":
                        // this.state.videoMeetingMsgWindow.displayMessage(data.msg.fromId, data.msg.contentData, false);
                        alert(data.msg.fromId + ": " + data.msg.contentData);
                        break;
                    case "chatroomUserKicked":
                        thisRoom.leavideoMeetingMsgWindowveRoom();
                        alert("你已被踢出房间！");
                        break;
                    case "serverErr":
                        alert("服务器错误：" + data.msg);
                        break;
                }
                break;
            case "onWebrtcMessage":
                switch (data.type) {
                    case "streamCreated":
                        if (data.status == "success") {
                            this.videoMeetingSetStream(data.streamObj);
                            switch (oper) {
                                case "open":
                                    thisRoom.joinRoom();
                                    break;
                                case "new":
                                    thisRoom.joinRoom();
                                    break;
                            }
                        }
                        else {
                            alert("获取摄像头视频失败！请检查摄像头设备是否接入！error:" + data.error);
                        }
                        break;
                    case "srcApplyUpload":
                        if (data.status == "success") {
                            // this.joinMeetingRoom(data.userData.roomInfo);
                        }
                        else {
                            alert("上传申请失败");
                            console.log("收到_webrtc_apply_failed");
                        }
                        break;
                    case "addUploader":
                        var newVideoId = "webrtc_video_" + data.upUserId;
                        var streamInfo = data.streamInfo;
                        streamInfo.videoId = newVideoId;
                        this.videoMeetingAddNewVideo(newVideoId, streamInfo.streamObj, function (evt) {
                            thisRoom.streamConfigChange(data.upId);
                        });
                        break;
                    case "removeUploader":
                        var streamInfo = data.streamInfo;
                        var newVideoId = streamInfo.videoId;
                        this.removeNewVideo($("#" + newVideoId));
                        if (data.bigFlag) {
                            var videos = $(".monitor-list video");
                            if (videos.length > 0) {
                                videos[videos.length - 1].click();
                            }
                        }
                        break;
                    case "delChannel":
                        if (data.status == "success") {
                            //load gData;
                        }
                        else {
                            alert("删除视频会议失败");
                        }
                        break;
                    case "createChannel":
                        if (data.status == "success") {
                            if (window.StarRtc.Instance.configModePulic) {
                                $.get(window.StarRtc.Instance.workServerUrl + "/meeting/store?appid=" + agentId + "&ID=" + data.userData.roomInfo.ID + "&Name=" + data.userData.roomInfo.Name + "&Creator=" + data.userData.roomInfo.Creator);
                            }
                            else {
                                window.StarRtc.Instance.reportVideoMeetingRoom(data.userData.roomInfo, function (status) {
                                    console.log("创建" + status);
                                });
                            }
                            var index = -1;
                            const { deviceList } = this.state;
                            let { selectVideoMeetingIndex } = this.state;
                            for (var i in deviceList) {
                                // if (deviceList[i].ID == data.userData.roomInfo.ID) {
                                if (deviceList[i].key == data.userData.roomInfo.key) {
                                    index = i;
                                }
                            }
                            if (index >= 0) {
                                selectVideoMeetingIndex = index;
                            }
                            else {
                                selectVideoMeetingIndex = undefined;
                            }
                            this.setState({
                                selectVideoMeetingIndex
                            });
                            thisRoom.createStream();                            
                        }
                        else {
                            alert("创建失败:" + data.msg);
                        }
                        break;
                    case "serverErr":
                        alert("服务器错误：" + data.msg);
                        break;
                }
                break;
        }
    }

    videoMeetingSetStream = (object) => {
        const { videoRef } = this.state;
        videoRef[0].srcObject = object;
        videoRef[0].play();
    }

    videoMeetingAddNewVideo = (newVideoId, stream, clickCallback) => {
        var parentObj = $(".monitor-list");
        var wrapperObj = $("<li onClick={this.enlargeVideo.bind(this, 1)}></li>");
        var videoObj = $("<video id=\"" + newVideoId + "\" width=\"260\" height=\"160\" ref={this.handleVideoRef}></video>");

        videoObj.bind("click", clickCallback);
    
        wrapperObj.append(videoObj);
    
        parentObj.append(wrapperObj);
    
        videoObj[0].srcObject = stream;
        videoObj[0].play();
    }

    removeNewVideo = (parentObj, videoObject) => {
        if (videoObject != undefined) {
            videoObject.parent().remove();
        }
    }

    setMarker = () => {
        const { deviceList } = this.state;
        console.log(deviceList)
        const _this = this;
        deviceList.map((item,index)=>{
            let marker, { currRoom, selectVideoMeetingIndex } = this.state;
            const { map } = this.state;
            if(item.type === "camera"){
                marker = window.BM.marker(window.BM.latLng(item.lng,item.lat),{icon:window.BM.icon({iconUrl:iconCameraUrl})}).addTo(map);
            }else if(item.type === "shebei"){
                marker = window.BM.marker(window.BM.latLng(item.lng,item.lat),{icon:window.BM.icon({iconUrl:iconShebeiUrl})}).addTo(map);
            }
            marker && marker.on("click", function(e){
                if(selectVideoMeetingIndex === index) return
                if (currRoom != null) {
                    currRoom.leaveRoom();
                    currRoom.sigDisconnect();
                    currRoom = null;
                }
                selectVideoMeetingIndex = index;
                currRoom = window.StarRtc.Instance.getVideoMeetingRoomSDK("open", _this.videoMeetingCallBack, { "roomInfo": item })
                currRoom.sigConnect();
                _this.setState({
                    currRoom: currRoom,
                    selectVideoMeetingIndex
                });
            })
        })
    }
    
    onSelect = (selectedKey, info) => {
        console.log('selected', selectedKey, info);
        const list = [];
        this.findDevice(info.selectedNodes, list);
        this.setState({
            deviceList: [...list]
        }, ()=>{
            this.setMarker();
        })
    }

    handleVideoRef = (target) => {
        const { videoRef } = this.state;
        videoRef.push(target);
        this.setState({
            videoRef
        })
    }

    enlargeVideo = (index) => {
        const { videoRef } = this.state;
        
        this.refs.mainVideo.removeAttribute("src");
        this.refs.mainVideo.srcObject = videoRef[index].srcObject;
        this.refs.mainVideo.play();
        this.setState({
            status: true
        })
    }

    playVideo = (item) => {
        // const videoSrc = item.src;
        const videoSrc = mainSrc;
        this.setState({
            videoSrc,
            status: false,
            commentList: item.commentList
        })
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

    
    addMark() {
        const video = this.refs.mainVideo;
        const { commentList, remark } = this.state;
        const obj = {};
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        var ds = d.getDate();
        if (ds <= 9) {
            ds = '0' + ds;
        }
        var h = d.getHours();
        if (h <= 9) {
            h = '0' + h;
        }
        var f = d.getMinutes();
        if (f <= 9) {
            f = '0' + f;
        }
        var s = d.getSeconds();
        if (s <= 9) {
            s = '0' + s;
        }
        obj.commentTime = y + '-' + m + '-' + ds + ' ' + h + ':' + f  + ':' + s;
        obj.commenter = userName;
        obj.comment = remark;
        obj.time = video.currentTime;
        commentList.push(obj);
        this.setState({
            commentList,
            remark: ''
        })
    }

    gotoTime = (time) => {
        const video = this.refs.mainVideo;
        video.currentTime = time;
    }

    handleChange = (e) => {
        this.setState({
            remark: e.target.value
        })
    }

    render () {
        const { gData, btn, cameraNo, commentList, nearbyList, control, status, volume, volumeRange,
            luminosity, transparency, tone, saturation, frameRate, definition, videoSrc, remark } = this.state

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
                        <li onClick={this.enlargeVideo.bind(this, 0)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.enlargeVideo.bind(this, 1)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.enlargeVideo.bind(this, 2)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                        <li onClick={this.enlargeVideo.bind(this, 3)}><video width="260" height="160" ref={this.handleVideoRef}></video></li>
                    </ul>
                </div>
                <div className={`btn ${ btn ? 'shouqi' : 'tankai' }`} onClick={this.expand.bind(this)}></div>
                <div className={`monitor-right ${btn ? '': 'hide'}`} >
                    集中监控
                    <div className="content">
                        <video id="mainVideo" width="704" height="400" ref="mainVideo" src={videoSrc}></video>
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
                            <TextArea className="remark" placeholder="请输入备注信息：" onChange={this.handleChange} value={remark}/>
                            <button onClick={this.addMark.bind(this)}>提交</button>
                        </div>
                        <ul className="brilliant-moment">
                            {
                                commentList.map(item=>{
                                    return (
                                        <li onClick={this.gotoTime.bind(this,item.time)}>{item.commentTime} {item.commenter}标注了“{item.comment}”</li>
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
                                                    <img src={linjinPhoto} width="79" height="60" onClick={this.playVideo.bind(this,item)} />
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