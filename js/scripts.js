var prime = function(input) {
  var prime=[];

  for (var i = 2; i<=input; i++){
    prime.push(i);
  };

  for (var i =2;i<=prime.length;i++){
    for (var a = 0; a<=prime.length; a++){
      if ((prime[i] !== prime[a]) && (prime[i]% prime[a]===0)){
        prime.splice(i,1);
        i=2;
      }
    };
  };

  return prime;
};

$(document).ready(function() {
    $("form#prime").submit(function(event) {
        var input = parseInt($('input#input').val());
        var result = prime(input);
        result = result.join(" ,");
        $(".prime_number").text(result);

        $("#result").show();

        event.preventDefault();
    });
});
