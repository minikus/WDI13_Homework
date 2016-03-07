var jsbin = {};
jsbin.user = {"avatar":"https://www.gravatar.com/avatar/306c8a282206228d4bb51f04994cfac0?s=29&d=https%3A%2F%2Fjsbin-gravatar.herokuapp.com%2Fminikus.png","name":"minikus","bincount":2,"settings":{},"large_avatar":"https://www.gravatar.com/avatar/306c8a282206228d4bb51f04994cfac0?s=120&d=blank"};

if (jsbin.user && jsbin.user.name) {
  $('.loggedout').hide();
  var menu = $('.loggedin').show();
  var html = $('#profile-template').text();
  var $html = $(html.replace(/({.*?})/g, function (all, match) {
    var key = match.slice(1, -1).trim(); // ditch the wrappers
    return jsbin.user[key] || '';
  }));
  if (jsbin.user.pro) {
    document.documentElement.className += ' pro';
    $html.find('.gopro').remove();
  } else {
    $html.find('.pro').remove();
  }
  var $menu = menu.append($html);
} else {
  $('.loggedout').show();
}