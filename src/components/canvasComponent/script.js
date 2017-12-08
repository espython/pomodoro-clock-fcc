// render the hello component :-
var $ = require('jquery');

if (this.seconds === 0) {
    $('.toggle').toggle();
}

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
            interval: null,
            isStarted: false,
            isPaused: false,
            isStopped: true,

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


            context.arc(centerX, centerY, 138, (0 - 90) * deg, ((radAngle - 90) * deg));
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
            ctx.arc(centerX, centerY, 145, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#4FC3F7';
            //ctx.lineWidth = 1;
            ctx.fillStyle = '#4FC3F7';
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


        },
        startTimer: function(event) {
            if (this.isStarted === false) {
                //this.timestamp = this.time;
            }
            this.isStarted = true;
            this.isStopped = false;
            this.isPaused = false;
            if (this.interval) {
                clearInterval(this.interval);
            }
            // this.sectorMove();
            if (this.timestamp > 0) {
                this.interval = setInterval(() => {
                    $('#start').hide();
                    this.timestamp--;
                    this.sectorMove();
                    if (this.timestamp === 0) {
                        $('#digitalClock').addClass('alert-danger');
                        clearInterval(this.interval);
                        $('#start').show();
                    }



                }, 1000);



            }


        },
        stopTimer: function() {
            clearInterval(this.interval);
            this.timestamp = this.time;
            this.isStopped = true;
            this.isStarted = false;
            this.isPaused = false;
            this.draw();
            $('#digitalClock').removeClass("alert-danger");
            $('#start').show();
        },
        pauseTimer: function() {
            clearInterval(this.interval);
            this.isPaused = true;
            $('#start').show();

        },
        breakeTimer: function() {
            this.timestamp = 5;

        }
    },
    mounted: function() {
        this.draw();
        //this.sectorMove();
    }
};