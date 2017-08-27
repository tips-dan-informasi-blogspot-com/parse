//<![CDATA[
function tipsdaninformasi(){
var textareas=/[<>]/g
for (i=0; i<arguments.length; i++)
arguments[i].value=arguments[i].value.replace(textareas, function(m){return replacechar(m)})
}
function replacechar(match){
if (match=="<")
return "&lt;"
else if (match==">")
return "&gt;"
}
//]]>
