$('#submit').click(()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();
  $.ajax({
    type: 'POST',
    url: '/nameCom',
    data:JSON.stringify ({name, comment}),
    success:(data)=>{
      console.log('success:', data);
    },
    contentType: 'application/json'
   })
})

/*chat function*/
const chat =()=>{
  $.get('/ncom.txt', (data)=>{
    $('#messages').html(data);
  })
}
window.setInterval(chat,1000);

/* turn on camera*/
const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({ video:true, audio: false})
  .then((mediaStream)=>{
    video.srcObject = mediaStream;
    video.play();
  }).catch((err)=>{
    console.log("error: ",err);
  })
 
/*take a picture*/
$('#picture').click(()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video,0,0);
  const dataURL = canvas.toDataURL('image/png');
  $.ajax({
    type: 'POST',
    url: '/pics',
    data: JSON.stringify({ name, comment, canvas: dataURL}),
    successs: (data)=>{
      console.log('Success:',data);
    },
    contentType: 'application/json'
  })
 })

