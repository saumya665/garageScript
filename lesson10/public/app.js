$('#submit').click( ()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();

  $:ajax({
    type: 'POST',
    url: '/send',
    contentType: 'application/json',
    data: JSON.stringify({name: name, comment: comment }),
    success: (data)=>{
      console.log('SucessText: ', data);
    }
  });
});

//Display text on browser
const getTextFile = ()=>{
  $.get('/text.txt',(data)=>{
    const display = $('#browserViewText');
    display.html(data);
  })
}
window.setInterval(getTextFile,1000);

const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({video:true, audio:false}).then((stream)=>{
  video.srcObject = stream;
  video.play();
});

//Take pictures
$('#picture').click(()=>{
  const name = $('#name').val();
  const comment = $('name').val();
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video,0,0);
  const dataURL = canvas.toDataURL('image/png');

  $.ajax({
    type: 'POST',
    url: '/image',
    contentType: 'application/JSON',
    data: JSON.stringify({
      Canvas: dataURL,
      name: name,
      comment: comment
    }),
    sucess: ()=>{
      console.log('Sucess Image Taken');
    }
   });
})
