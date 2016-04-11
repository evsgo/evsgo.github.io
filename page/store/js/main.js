// checked checkbox
$("#checkall").click(function () {
  var parentState = this.checked;
  $('.checktype').each(function () {
      this.checked = parentState;
  });
});

$(".checktype").click(function () {
  if ($('.checktype').length != $(".checktype:checked").length)
    {
      $("#checkall").removeAttr("checked");
    } else {
      $("#checkall").attr("checked", "checked");
    }
});


// sort plagin 'list.js'
var options = {
  valueNames: [ 'product', 'category', 'price', 'recommend', 'new', 'date']
};

var tableList = new List('sorttable', options);
var recommendList = new List('weRecommend', options);


// https://60devs.com/cross-browser-blur-effect.html
document.documentElement.setAttribute("data-agent", navigator.userAgent);
