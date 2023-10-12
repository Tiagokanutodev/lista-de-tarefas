$(document).ready(function() 
{
    $('#form').submit(function(event) 
    {
        event.preventDefault();
        var nomeDigitado = $('#input').val();                //variavel puxou o nome da TAREFA DIGITADO
        if (nomeDigitado) 
        {
            $('#list').append('<li>' + nomeDigitado + '</li>');
            $('#input').val('');
        }
    });

    $('#list').on('click', 'li', function() 
    {
        $(this).toggleClass('completed');
    });
});















