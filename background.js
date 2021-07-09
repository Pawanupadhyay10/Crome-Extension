function reddenPage(){
    var re = /^[a-zA-Z ]{2,30}$/g;
    var element=document.querySelectorAll("h1,p,h2,h3,h4,h5,h6");
    for(let i=0;i<element.length;i++){
        
 element[i].innerHTML = element[i].innerHTML.replace(re,"💩💩")
    }
}
chrome.action.onClicked.addListener( (tab) => {
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function: reddenPage
    });
});