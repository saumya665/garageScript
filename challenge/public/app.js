/*turn on camera*/
const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({
  video: true, audio: false}).then((mediaStream)=>{
    video.srcObject = mediaStream;
    video.play();
  }).catch((err)=>{
    console.log("Error is: "+err);
  })

const displayPicture = ()=>{
  $.get('/picInfo', (data)=>{
      $('#pictures').html(data);
    })
  }
window.setInterval(displayPicture,1000);

/*take picture*/
$('#camButton').click(()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video,0,0);
  const dataURL = canvas.toDataURL('image/png');
  $.ajax({
    type: 'POST',
    url: '/picAsMeme',
    data: JSON.stringify({
      name, comment, canvas:dataURL}),
    contentType: 'application/JSON'
  })
})

