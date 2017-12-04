// render the hello component :-
export default {
    name: "canvascomp",
    data: function() {
        return {
            msg: "Welcome to Your Vue.js App",
            x: 0,
            y: 0

        };
    },
    methods: {
        sectorMove: function() {
            this.interval = setInterval(function() {
                myTimer();

            }, 1000);
            var t = 0;

            function myTimer() {
                if (t < 360) {
                    t = t + 1;
                } else {
                    console.log('timeOut');
                }

                let canvas = document.getElementById("drawing");
                let context = canvas.getContext("2d");
                context.beginPath();
                //context.lineWidth = "1";
                var deg = Math.PI / 180;
                let centerX = canvas.width / 2;
                let centerY = canvas.height / 2;
                context.arc(centerX, centerY, 135, 0 * deg, (t * deg));
                context.lineTo(centerX, centerY);


                // line color
                context.strokeStyle = "#0277BD";
                context.stroke();
                context.fillStyle = "#0277BD";
                context.closePath();
                context.fill();
                context.stroke();

                context.fill();
                //console.log(t);


            }

        },
        mousePosition: function(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        draw: function() {
            let canvas = document.getElementById("drawing");
            let ctx = canvas.getContext("2d");
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 156;
            // Draw the outer circle :-
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#0277BD';
            //ctx.lineWidth = 1;
            ctx.fillStyle = '#0277BD';
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            //Draw the inner circuit :-
            ctx.beginPath();
            ctx.arc(centerX, centerY, 135, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#00B8D4';
            //ctx.lineWidth = 1;
            ctx.fillStyle = '#00B8D4';
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


        },
        startTimer: function() {
            this.sectorMove();
        },
        stopTimer: function() {

        },
        pauseTimer: function() {
            clearInterval(this.interval);

        }

    },
    mounted: function() {
        this.draw();
        // this.sectorMove();
    }
};