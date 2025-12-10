function randombg() {
  var random= Math.floor(Math.random() * 16) + 0;
  var bigSize = ["url('background/starfield.gif')",
                 "url('background/grid.jpg')",
                 "url('background/grid1.jpg')",
                "url('background/back1.png')",
                "url('background/back2.png')",
                "url('background/back3.png')",
                "url('background/back4.png')",
                "url('background/back5.png')",
                "url('background/back6.png')",
                "url('background/back7.png')",
                "url('background/back8.png')",
                "url('background/back9.png')",
                "url('background/back10.png')",
                "url('background/back11.png')",
                "url('background/back12.png')",
                "url('background/back13.png')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}

//gotta think about this one. Create text for the midi iframe text? Either way it's not a style
function randommidi() {
  var random= Math.floor(Math.random() * 3) + 0;
  var Midi = ["url('starfield.gif')",
                 "url('grid.jpg')",
                 "url('grid1.jpg')"];
}
//same here
/** 
 * start when the browser has finished parsing but is still loading sub-resources (like videos)
 * not needed in JSFiddle as you can choose it in the options (onDomready)
 *
 * document.onreadystatechange = function () {
 *     if (document.readyState == "interactive") {    
 **/
    
// build up your storage for video urls here 
// leave out the file extension, we will let the browser decide which type he can play.
// also note how I left out the 'http:' part. we don't need it, the browser automatically
// decides if he needs http or https.
function randomvid() {
var videoStorage = [ 
    '//media.w3.org/2010/05/sintel/trailer',
    '//techslides.com/demos/sample-videos/small',
    '//fat.gfycat.com/DazzlingCompleteAnkole',
    '//zippy.gfycat.com/HeavyPlumpIvorybilledwoodpecker'
],
    video = document.querySelector('video'),
    // choose one random url from our storage as the active video
    activeVideoUrl = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))];        
        
// check which file extension your browser can play and set the video source accordingly
if(video.canPlayType('video/webm')) {
    video.setAttribute('src', activeVideoUrl + '.webm');
} else if(video.canPlayType('video/mp4')) {
    video.setAttribute('src', activeVideoUrl + '.mp4');
}
}
