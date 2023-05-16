var languagesList = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "Php",
    "Python",
    "C#",
    "Java",
    "C",
    "C++"
]


$(document).ready(function(){
    $('#birthday').datepicker();

    
});

$(document).ready(function(){
    $("#programmingLanguage").autocomplete({
        source:languagesList
    });
});


