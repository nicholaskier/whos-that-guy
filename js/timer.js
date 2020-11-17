// (function() {
//     var game = this.whosThatGuyGame = this.whosThatGuyGame || {}

//     game.timer = {
//         interval: undefined,
//         countFrom: 60, //seconds
//         count: this.countFrom,
//         progressView: document.getElementById('timer'),
//         restart: function() {
//             if (this.interval) {
//                 clearInterval(this.interval)
//             }
//             this.count = this.countFrom
//             this.interval = setInterval((this.tick).bind(this), 1000)
//         },
//         stop: function() {
//             clearInterval(this.interval)
//         },
//         tick: function() {
//             this.count -= 1
//             if (this.count <= 0) {
//                 clearInterval(this.interval)
//                 game.flow.gameOver()
//             }
//             var progress = this.count / this.countFrom *100
//             this.progress.style.width = progress + '%'
//         }
//     }
// })()