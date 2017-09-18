
$('#button').click(()=>{
  const name = $('#name').val();
  const password = $('#password').val();
  const username = $('#username').val();
  const email = $('#email').val();
  $.ajax({
    type: 'POST',
    url: '/www',
    data: JSON.stringify({
      name,password,username,email}),
    success:(data)=>{
      console.log("success:"+data);
    },
    contentType: 'application/json'
  })
})
