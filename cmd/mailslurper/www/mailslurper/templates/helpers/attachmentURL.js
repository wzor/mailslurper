// Copyright 2013-2016 Adam Presley. All rights reserved
// Use of this source code is governed by the MIT license
// that can be found in the LICENSE file.
"use strict";

Handlebars.registerHelper("attachmentURL", function (attachment) {
	return window.SettingsService.getServiceURLNow() + "/mail/" + attachment.mailId + "/attachment/" + attachment.id;
});
