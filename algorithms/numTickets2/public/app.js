
$('#button').click(()=>{
  const sTics = $('#ticIn').val();
  $.get(`/sTicInfo?numTics=${sTics}`, (data)=>{
    console.log(data);
    $('#saumyaLeft').html(data);
  })
})

const sRefreshFunc =()=>{
$.get('/refreshSData' ,(data)=>{
  $('#saumyaLeft').html(data);
})
}
window.setInterval(sRefreshFunc,500);

$('#mButton').click(()=>{
  const Tick = $('#mTics').val();
  $.get(`http://sz.llip.life/buy?amnt=${Tick}`,(data)=>{
      $('#mleft').html(data);
  })
})

const mRefreshFunc=()=>{
  $.get('http://sz.llip.life/tickets',(data)=>{
      $('#mleft').html(data);
  })
}
window.setInterval(mRefreshFunc,500);
