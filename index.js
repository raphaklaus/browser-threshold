var isIE = function(version) {
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';

  if(!version) {
      return /msie/i.test(userAgent) || "ActiveXObject" in window;
  }
  if(version >= 11) {
      return "ActiveXObject" in window;
  }
  return new RegExp('msie ' + version).test(userAgent);
};

var isIELegacyBrowsers = function(){
  return isIE(6) || isIE(7) || isIE(8) || isIE(9) || isIE(10)
};

var isLegacyBrowsers = function(){
  return isIELegacyBrowsers();
};

var getHTMLtemplate = function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'template.html', false);
  xhr.send();
  return xhr.responseText;
};

var drawWarning = function(html){
  document.getElementsByTagName('body')[0].innerHTML = html;
};

if (isLegacyBrowsers())
  drawWarning(getHTMLtemplate());