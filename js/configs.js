const pt_BR = {
    ATTR_LANG: "pt-br",
    ATTR_LOCALE: "pt_BR",
    ATTR_TITLE: "Gérison Sabino • Desenvolvedor Full Stack",
    ATTR_DESCRIPTION: "Olá, Mundo! Eu sou o Gérison...",
    A_IDIOMA : {
        Texto: "English (en-us)",
        Param: "en-us"
    },
    SAUDACAO: '"Olá, Mundo!"',
    APRESENTACAO: "Eu sou o Gérison...",
    DESCRICAO: "Desenvolvedor Full Stack • C# • ASP.NET MVC • MySQL • HTML • CSS • jQuery"
};

const en_US = {
    ATTR_LANG: "en-us",
    ATTR_LOCALE: "en_US",
    ATTR_TITLE: "Gérison Sabino • Full Stack Developer",
    ATTR_DESCRIPTION: "Hello, World! I'm Gérison...",
    A_IDIOMA : {
        Texto: "Português (Brasil) (pt-br)",
        Param: "pt-br"
    },
    SAUDACAO: '"Hello, World!"',
    APRESENTACAO: "I'm Gérison...",
    DESCRICAO: "Full Stack Developer • C# • ASP.NET MVC • MySQL • HTML • CSS • jQuery"
};

const param_lang = getUrlParams()["lang"];
const lang = (param_lang === "en-us" ? en_US : pt_BR);

$(document).ready(function (){
    jQuery.fn.extend({
        typeText: function (text, interval) {
            for (let i = 0; i < text.length; i++) {
                let obj = $(this);
                $(obj).html("");

                (function(i){
                    window.setTimeout(function(){
                        let s = $(obj).html() + text.charAt(i); 
                        $(obj).html(s);
                    }, i * interval);
                }(i));
            }
        }
    });

    init();
});

function getUrlParams() {
    var params = {};
    var url = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        params[key] = value;
    });

    return params;
}

function init(){
    $(".intro > mark").hide();

    $("title").text(lang.ATTR_TITLE);

    $("nav a > label").html(lang.A_IDIOMA.Texto);
    $("nav a").attr("href", "?lang=" + lang.A_IDIOMA.Param);

    $(".intro > label").typeText(lang.SAUDACAO, 100);
    
    window.setTimeout(function() { 
        $(".intro > mark").typeText(lang.APRESENTACAO, 100);
        $(".intro > mark").show();
    }, lang.SAUDACAO.length * 100);

    $("p.tagline").html(lang.DESCRICAO);

    $("a[href='#mailto']").click(function () {
        document.location.href = "mailto:gerison@outlook.com.br";
    });
};