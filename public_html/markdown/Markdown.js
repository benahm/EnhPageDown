function fr() {
    Markdown.local.value = {
        bold: "Gras <strong> Ctrl+B",
        boldexample: "texte en gras",
        
        italic: "Italique <em> Ctrl+I",
        italicexample: "texte en italique",
        
        link: "Hyperlien <a> Ctrl+L",
        linkdescription: "description de l'hyperlien",
        linkdialog: "<p><b>Insérer un hyperlien</b></p><p>http://example.com/ \"titre optionnel\"</p>",
        
        quote: "Citation <blockquote> Ctrl+Q",
        quoteexample: "Citation",
        
        code: "Extrait de code <pre><code> Ctrl+K",
        codeexample: "votre extrait de code",
        
        image: "Image <img> Ctrl+G",
        imagedescription: "description de l'image",
        imagedialog: "<p><b>Insérer une image</b></p><p>http://example.com/images/diagram.jpg \"titre optionnel\"<br><br><a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>Vous chercher un hébergement d'image grauit ?</a></p>",
        
        olist: "Liste numérotée <ol> Ctrl+O",
        ulist: "Liste à point <ul> Ctrl+U",
        litem: "Elément de liste",
        
        heading: "Titre <h1>/<h2> Ctrl+H",
        headingexample: "Titre",
        
        hr: "Trait horizontal <hr> Ctrl+R",
        
        undo: "Annuler - Ctrl+Z",
        redo: "Refaire - Ctrl+Y",
        redomac: "Refaire - Ctrl+Shift+Z",
        
        help: "Aide sur Markdown"
    };
}

function ar() {
    Markdown.local.value = {
        bold: "غليظ <strong> Ctrl+B",
        boldexample: "نص غليظ",
        
        italic: "مائل <em> Ctrl+I",
        italicexample: "نص مائل",
        
        link: "رابط <a> Ctrl+L",
        linkdescription: "وصف الرابط",
        linkdialog: "<p><b>Insérer un hyperlien</b></p><p>http://example.com/ \"titre optionnel\"</p>",
        
        quote: "إقتباس <blockquote> Ctrl+Q",
        quoteexample: "إقتباس",
        
        code: "كود <pre><code> Ctrl+K",
        codeexample: "كود",
        
        image: "صورة <img> Ctrl+G",
        imagedescription: "وصف للصورة",
        imagedialog: "<p><b>Insérer une image</b></p><p>http://example.com/images/diagram.jpg \"titre optionnel\"<br><br><a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>Vous chercher un hébergement d'image grauit ?</a></p>",
        
        olist: "قائمة مرقمة <ol> Ctrl+O",
        ulist: "قائمة نقطية <ul> Ctrl+U",
        litem: "عنصر قائمة",
        
        heading: "لقب <h1>/<h2> Ctrl+H",
        headingexample: "لقب",
        
        hr: "خط أفقي <hr> Ctrl+R",
        
        undo: "إلغاء - Ctrl+Z",
        redo: "إعادة تشكيل - Ctrl+Y",
        redomac: "إعادة تشكيل - Ctrl+Shift+Z",
        
        help: "مساعدة"
    };
}

$(document).ready(function() {

    Markdown.local = Markdown.local || {};

    var locale = $('body').attr('id');
    if(locale === 'fr') {
        fr();
    } else if(locale === 'ar') {
        ar();
    }

    var help = function() {
        alert("Do you need help?");
    };

    var options = {
        helpButton: {handler: help},
        strings: Markdown.local.value
    };

    var converter = Markdown.getSanitizingConverter();
    var editor = new Markdown.Editor(converter, null, options);
    editor.run();
    
   // $('.wmd-input:not(.processed)').TextAreaResizer();    
});