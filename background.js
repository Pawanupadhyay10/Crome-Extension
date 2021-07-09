function reddenPage(){
    let re = /(H|h)mani (U|u)padhyay/g;
    let element=document.querySelectorAll("p,li,h1,h2,h3,h4,h5,h6,span,div");
    for(let i=0;i<element.length;i++){
        
 element[i].innerHTML = element[i].innerHTML.replace(re,"🎉🌹🌹🎉🌹🌹🎉")
    }
}
chrome.action.onClicked.addListener( (tab) => {
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function: reddenPage
    });
});
