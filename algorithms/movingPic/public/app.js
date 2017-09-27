$('#up').click(()=>{
  $.get('/up',()=>{});
})

$('#left').click(()=>{
  $.get('/left', ()=>{});
})

$('#right').click(()=>{
  $.get('/right', ()=>{})
})

$('#down').click(()=>{
  $.get('/down',()=>{} )
})

const refreshVert=()=>{
$.get('/refreshVert', (data)=>{
  const up = $('#pic');
  up.css('margin-top',` ${data}px`);
})
}
window.setInterval(refreshVert,500);

const refreshHorz=()=>{
  $.get('/refreshHorz',(data)=>{
    const left = $('#pic');
    left.css('margin-left',`${data}px`);
  })
}
window.setInterval(refreshHorz,500);

