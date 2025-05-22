var c_something = document.querySelector("#ajaxMarketData")

$.get('https://afx-text-bucket.s3.amazonaws.com/axios-market-data.html',
  function (data, textStatus, jqXHR) {
    c_something.innerHTML = data;
  });

  var x = new Array();