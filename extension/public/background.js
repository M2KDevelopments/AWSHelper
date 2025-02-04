
    const INSTALL_URL = "https://aws.m2kdevelopments.com";
    const UNINSTALL_URL = "https://aws.m2kdevelopments.com";
    chrome.runtime.onInstalled.addListener(function (details) {

        const INSTALL = "install", UPDATE = "update", CHROME_UPDATE = "chrome_update", SHARED_UPDATE = "shared_module_update";
    
        if (details.reason === INSTALL) {
            chrome.tabs.create({ url: INSTALL_URL });
        }
    
        if (details.reason === UPDATE || details.reason === CHROME_UPDATE || details.reason === SHARED_UPDATE) {
            
        }
        // When extension is uninstalled redirect to page
        chrome.runtime.setUninstallURL(UNINSTALL_URL);
        
        // load background info
        loadInfo();
   
    });
    
    // On chrome extension startup
    chrome.runtime.onStartup.addListener(loadInfo);

    function loadInfo(){
        // Todo Code: Load background info.
    }
    