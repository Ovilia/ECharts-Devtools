// custom panel
chrome.devtools.panels.create('My Panel', '', 'panel.html', function (panel) {
    console.log('My panel created', panel);
});
