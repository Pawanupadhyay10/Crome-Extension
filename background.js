function reddenPage(){
    document.body.style.backgroundColor='red';
    console.log("THis works")
    let h1=document.getElementsByTagName("h1");
    for(let i=0;i<h1.length;i++){
        console.log("this is h1")
        console.log(h1[i])
        let re=/Pawan Upadhyay/g;
        h1[i].innerHTML = h1[i].innerHTML.replace(re,"🎉🌹🌹🎉🌹🌹🎉")
    }
}
chrome.action.onClicked.addListener( (tab) => {
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function: reddenPage
    });
});
