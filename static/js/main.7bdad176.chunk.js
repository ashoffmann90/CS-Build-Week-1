(this.webpackJsonpgol=this.webpackJsonpgol||[]).push([[0],{15:function(t,e,n){t.exports=n(16)},16:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(3),a=n(5),l=n(4),s=n(6),c=n(0),i=n.n(c),u=n(11),f=n.n(u),p=n(7);n(21);function d(){var t=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return d=function(){return t},t}function h(){var t=Object(s.a)(["\n  background-color: white;\n  &:hover {\n    background-color: #c32aff;\n    color: white\n  }\n  width: 30%;\n  height: 3em;\n  margin-top: 15px;\n"]);return h=function(){return t},t}var v=p.a.button(h()),m=p.a.div(d()),g=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))).selectBox=function(){t.props.selectBox(t.props.row,t.props.col)},t}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.selectBox})}}]),n}(i.a.Component),w=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=16*this.props.cols,e=[],n="",r=0;r<this.props.rows;r++)for(var o=0;o<this.props.cols;o++){var a=r+"_"+o;n=this.props.gridFull[r][o]?"box on":"box off",e.push(i.a.createElement(g,{boxClass:n,key:a,boxId:a,row:r,col:o,selectBox:this.props.selectBox}))}return i.a.createElement("div",{className:"grid",style:{width:t}},e)}}]),n}(i.a.Component),b=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).selectBox=function(e,n){var r=B(t.state.gridFull);r[e][n]=!r[e][n],t.setState({gridFull:r})},t.reset=function(){for(var e=B(t.state.gridFull),n=0;n<t.rows;n++)for(var r=0;r<t.cols;r++)1===Math.floor(4*Math.random())&&(e[n][r]=!0);t.setState({gridFull:e})},t.resetButton=function(){t.clear(),t.reset()},t.clearButton=function(){t.clear()},t.clear=function(){var e=Array(t.rows).fill().map((function(){return Array(t.cols).fill(!1)}));t.setState({gridFull:e,generation:0})},t.stopButton=function(){clearInterval(t.intervalId)},t.startButton=function(){clearInterval(t.intervalId),t.intervalId=setInterval(t.play,t.speed)},t.slowButton=function(){t.slow()},t.fastButton=function(){t.fast()},t.slow=function(){t.speed=1e3,t.startButton()},t.fast=function(){t.speed=100,t.startButton()},t.play=function(){for(var e=t.state.gridFull,n=B(t.state.gridFull),r=0;r<t.rows;r++)for(var o=0;o<t.cols;o++){var a=0;r>0&&e[r-1][o]&&a++,r>0&&o>0&&e[r-1][o-1][o+1]&&a++,r>0&&o<t.cols-1&&e[r-1][o+1]&&a++,o<t.cols-1&&e[r][o+1]&&a++,o>0&&e[r][o-1]&&a++,r<t.rows-1&&e[r+1][o-1]&&a++,r<t.rows-1&&o>0&&e[r+1][o-1]&&a++,r<t.rows-1&&t.cols-1&&e[r+1][o+1]&&a++,e[r][o]&&(a<2||a>3)&&(n[r][o]=!1),e[r][o]||3!==a||(n[r][o]=!0)}t.setState({gridFull:n,generation:t.state.generation+1})},t.speed=300,t.rows=30,t.cols=44,t.state={generation:0,gridFull:Array(t.rows).fill().map((function(){return Array(t.cols).fill(!1)}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"Conway's Game of Life"),i.a.createElement(w,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),i.a.createElement(m,null,i.a.createElement(v,{onClick:this.stopButton},"Stop"),i.a.createElement(v,{onClick:this.startButton},"Start"),i.a.createElement(v,{onClick:this.resetButton},"Reset Cells"),i.a.createElement(v,{onClick:this.clearButton},"Clear Grid"),i.a.createElement(v,{onClick:this.slowButton},"Slower"),i.a.createElement(v,{onClick:this.fastButton},"Faster")),i.a.createElement("h2",{className:"gens"},"Generations: ",this.state.generation))}}]),n}(i.a.Component);function B(t){return JSON.parse(JSON.stringify(t))}f.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root"))},21:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.7bdad176.chunk.js.map