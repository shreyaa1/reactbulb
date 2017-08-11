var bulb= react.createClass({

getinitialState: function () {
  return(
    status: false
  );
},
switch : function () {
  this.setstate({
status:{!this.state.status}

  });
},





render:function () {
  var displaybulb = this.state.status ? 'bulb.png':'bulb2.png';
return(
  <img src {}/>
  <button onclick{this.switch}>click me</button>

);
}

});


react.render(<bulb/>),
document.getElementById('root');
