// Mixing jQuery and Node.js code in the same file? Yes please!

$(function(event){

    if (event.which == 13 || event.keyCode == 13) {
        //code to execute here
        alert('enter')
        return false;
    }
    // Display some statistics about this computer, using node's os module.

    var os = require('os');
    var prettyBytes = require('pretty-bytes');
    var giphy = require('giphy-api')();

    $('.stats').append('Number of cpu cores: <span>' + os.cpus().length + '</span>');
    $('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');

    var data = [];


    $('#search-form').on('submit', function(e){
        e.preventDefault();
        
        var searchTerm = $("#term").val();
        $('.gifs').html('');
        $('.gifs').fadeOut('fast', function(){      
            giphy.search(searchTerm, function(err, res) {
                data = res.data;
                $.each(res.data, function(index, value) {
                    $('.gifs').append("<iframe src='"+ value.embed_url +"'>");
                });
                $('.gifs').after().append("<br/></br><button class='save-btn'>Salvar GIFS</button>");
                $('.save-btn').on('click', function(){
                    alert('here');
                    var gifs = parent.data;
                    console.log(data);
                });
            }); 
        });

        $('.gifs').slideDown('fast');
    });
});