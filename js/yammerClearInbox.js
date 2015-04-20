var clearYammerInbox = function (interval) {
	
	setTimeout(function () {
		pageCheck();
		console.log(' - ClearYammerInbox Timer Firing.');
	}, interval);
};

var pageCheck = function () {
	console.log('doc ready');
	if (window.location.href.indexOf("/#/inbox/index") > -1 && jQuery(".yj-inbox-list-item-preview.yj-clearfix.yj-unread-item").length < 1) {
		console.log('Inbox clear');
		return endTimer();
	}
	if (window.location.href.indexOf("/#/inbox/index") > -1) {
		console.log('Yammer Inbox Page Detected');
		if ( jQuery(".yj-inbox-list-item-preview.yj-clearfix.yj-unread-item").length > 0 ) {
			console.log('Unread item found, clicking to clear.');
			jQuery('.yj-inbox-list-item-preview').eq(0).trigger('click');
			history.back();
			clearYammerInbox(2000);
		}
	}
};

var endTimer = function () {
	console.log('Ending timer.');
	clearTimeout(clearYammerInbox);
	alert('Yammer Inbox cleared/no unread items.');
	return false;
};
 
clearYammerInbox(2000); 