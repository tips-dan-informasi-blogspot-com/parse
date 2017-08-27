//<![CDATA[ //hakcipta: www.tips-berbagiifo.blogspot.com
function tipsdaninformasi(){
var re=/[<>]/g
for (i=0; i<arguments.length; i++) //hakcipta: www.tips-berbagiifo.blogspot.com
arguments[i].value=arguments[i].value.replace(re, function(m){return replacechar(m)})
} //hakcipta: www.tips-berbagiifo.blogspot.com
function replacechar(match){
if (match=="<") //hakcipta: www.tips-berbagiifo.blogspot.com
return "&lt;" //hakcipta: www.tips-berbagiifo.blogspot.com
else if (match==">")
return "&gt;"
} //hakcipta: www.tips-berbagiifo.blogspot.com
//]]>
