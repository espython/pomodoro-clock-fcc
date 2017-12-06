// render the hello component :-

// add 0 to the seconds and minutes
function leftPad(value) {
    if (('' + value).length > 1) {
        return value;
    }
    return '0' + value;
}
export default {
    name: "canvascomp",
    props: ['time'],
    data: function() {
        return {
            msg: "Welcome to the Pomodoro clock",
            timestamp: this.time,
            interval: null

        };
    },
    computed: {

        angle() {
            return 360 - ((360 / (this.time)) * this.timestamp);
        },
        minutes() {
            return Math.floor(this.timestamp / 60);
        },
        seconds() {
            return this.timestamp % 60;
        },
        text() {
            return `${leftPad(this.minutes)}:${leftPad(this.seconds)}`;
        }
    },
    methods: {
        sectorMove: function() {
            let canvas = document.getElementById("drawing");
            let context = canvas.getContext("2d");
            context.beginPath();
            //context.lineWidth = "1";
            var radAngle = this.angle;
            var deg = Math.PI / 180;
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;


            context.arc(centerX, centerY, 135, 0 * deg, (radAngle * deg));
            context.lineTo(centerX, centerY);


            // line color
            context.strokeStyle = "#0d47a1";
            context.stroke();
            context.fillStyle = "#0d47a1";
            context.closePath();
            context.fill();
            context.stroke();

            context.fill();

            //console.log(t);


        },
        draw: function() {
            let canvas = document.getElementById("drawing");
            let ctx = canvas.getContext("2d");
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 160;
            // Draw the outer circle :-
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#0D47A1';
            //ctx.lineWidth = 1;
            ctx.fillStyle = '#0D47A1';
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            //Draw the inner circuit :-
            ctx.beginPath();
            ctx.arc(centerX, centerY, 135, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#4FC3F7';
            //ctx.lineWidth = 1;
            ctx.fillStyle = '#4FC3F7';
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


        },
        startTimer: function() {
            this.interval = setInterval(() => {
                this.timestamp--;
                if (this.timestamp === 0) {
                    this.timestamp = this.time;

                }
                this.sectorMove();

            }, 1000);


        },
        stopTimer: function() {
            clearInterval(this.interval);
            this.timestamp = this.time;
            this.draw();
        },
        pauseTimer: function() {
            clearInterval(this.interval);

        }
    },
    mounted: function() {
        this.draw();
        //this.sectorMove();
    }
};