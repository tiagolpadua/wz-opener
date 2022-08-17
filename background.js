chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Iniciar conversa no WhatsApp com "%s"',
        "contexts": ["selection"],
        "id": "menu-wz-opener"
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let phoneNumber = info.selectionText.replace(/\D/g,'');

    if (phoneNumber.indexOf("55") !== 0) {
        phoneNumber = "55" + phoneNumber;
    }

    if (phoneNumber.length > 0) {
        chrome.tabs.create({  
            url: "https://api.whatsapp.com/send?phone=55" + phoneNumber
        });
    }
})