
<script type="text/javascript">
var page = 1

$(function () {

  const $aList = $('.showpage > a')
  $aList.click(function () {
    $aList.removeClass('act')
    $(this).addClass('act')
    var index = $(this).index()
    page = ++index
    console.log(page);
    $.get('/getComments?page='+page, function (data) {
      setStar(data)
      formatDate(data)
      $('#pl').html(template('temp6', {data:data}))
    })
  })

  $.get('/getServiceItem?id=1001', function (data) {
    $('.htit-center').append(template('temp3', {data:data}))
    $('#fw').append(template('temp4', {data:data}))
    $('#sj').append(template('temp5', {data:data}))
  })

  $.get('/getComments?page='+page, function (data) {
    setStar(data)
    formatDate(data)
    $('#pl').html(template('temp6', {data:data}))
  })

  $(document).scroll(function () {
    if($(this).scrollTop()>=71){
      $('#header').addClass('ani')
    }else{
      $('#header').removeClass('ani')
    }
  })

})

function pageUpOrDown(type) {
  if(type == 'up'){
    page--
    if(page<=1){
      page = 1
      return
    }
    $.get('/getComments?page='+page, function (data) {
      setStar(data)
      formatDate(data)
      $('#pl').html(template('temp6', {data:data}))
    })
  }else if(type == 'down'){
    page++
    if(page>9){
      page = 9
      return
    }
    console.log(page);
    $.get('/getComments?page='+page, function (data) {
      setStar(data)
      formatDate(data)
      $('#pl').html(template('temp6', {data:data}))
    })
  }
}

function getStar(count) {
  var starArr = []
  for(var i=0; i<count; i++){
    starArr.push('red_star.png')
  }
  while(starArr.length<5){
    starArr.push('gray_star.png')
  }
  return starArr
}

function setStar(data) {
  for(var i=0; i<data.comments.length; i++){
    const count = data.comments[i].star
    const starArr = getStar(count)
    data.comments[i].starClass = starArr
  }
}

function formatDate(data) {
  for(var i=0; i<data.comments.length; i++){
    const time = data.comments[i].createtime
    const formatTime = timestampToTime(time)
    data.comments[i].formatTime = formatTime
  }
}

function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  D = date.getDate() + ' ';
  return Y+M+D;
}
</script>