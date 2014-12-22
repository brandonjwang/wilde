var Wilde = new function() {
  this.canvasId = "main";
  this.canvas = document.getElementById(this.canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.colors = ["#797883", "#444E5A", "#999999", "#668899"];
  this.getRandomColor = function() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  this.drawCircle = function() {
    this.ctx.beginPath();
    this.ctx.arc(
      Math.floor(Math.random() * this.canvas.width),
      Math.floor(Math.random() * this.canvas.height),
      Math.floor(Math.random() * (this.canvas.width + this.canvas.height)/10),
      0, 2 * Math.PI, false
    );
    this.ctx.fillStyle = this.getRandomColor();
    this.ctx.fill();
    this.ctx.closePath();
  };

  this.actions = [this.drawCircle];
  this.draw = function() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    var numActions = (this.canvas.width * this.canvas.height) / 100;
    for (var i = 0; i < numActions; ++i) {
      this.actions[Math.floor(Math.random() * this.actions.length)].call(this);
    }
    stackBlurCanvasRGB(this.canvasId, 0, 0, this.canvas.width, this.canvas.height, 170);
  };
}();

Wilde.draw();
