function Analyser() 
{
    var url=document.getElementById("url").value;
    var resultat = document.getElementById("resultat");
    var msg=[];

    var domain=url.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split('/')[0];
    if (phishlist.includes(domain))
        msg.push(`This URL contains a malicious domain: ${domain}`);


    phishmots.forEach(mot=>{
    if (url.includes(mot))
        msg.push(`Suspicious word found: "${mot}"`);
    });

    if (msg.length > 0) 
        resultat.innerHTML=`${msg.join("<br>")}`;
    else
        resultat.innerHTML="The URL seems safe";
}
