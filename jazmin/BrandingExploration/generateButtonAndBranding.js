(function() {
	// This would be replaced by custom branding JSON from Rest Endpoint
	var CHANNEL_BRANDING_DATA = {
		branding1: {
			cssTagType: "background-color",
			cssValue: "#FF5733"
		},
		branding2: {
			cssTagType: "background-color",
			cssValue: "#FFBD33"
		},
		 branding3: {
			cssTagType: "color",
			cssValue: "#33FFBD"
		},
		branding4: {
			cssTagType: "font-size",
			cssValue: "1.2em"
		},
		branding5: {
			cssTagType: "font-family",
			cssValue: "Arial"
		}
	};
	function ChannelMenuBrandingDemo() {

		this.displayBrandedHelpButton();
	}

	ChannelMenuBrandingDemo.prototype.generateButton = function(callback) {
		var channelMenuButton = document.createElement("div");
		channelMenuButton.className = 'channelMenuButton';
		// This Channel Menu markup was generated by Tiffany, thanks for making this look nice!	
   		channelMenuButton.innerHTML =
			'<div class="top">'+
			  '<div class="fab branding5">?</div>'+
			  '<input id="esw-fab" class="fab-toggle branding1" type="checkbox"/>'+

			  '<div class="channelmenu">'+
			    '<div class="channelmenu-header branding2 branding5">'+
			      '<h2>Hi, there!</h2>'+
			      '<span>Getting in touch has never been easier</span>'+
			    '</div>'+
			    '<div class="channelmenu-options">'+
			      '<ul class="options">'+
			       '<li class="option">'+
				  '<a href="#" class="option__link branding3">'+
				    'WeChat'+
				  '</a>'+
				'</li>'+
				'<li class="option">'+
				  '<a href="#" class="option__link branding3">'+
				    'Call'+
				  '</a>'+
				'</li>'+
				'<li class="option">'+
				  '<a href="#" class="option__link branding3">'+
				    'SMS'+
				  '</a>'+
			       '</li>'+
				'<li class="option">'+
				  '<a href="#" class="option__link branding3">'+
				    'Chat with an Expert'+
				  '</a>'+
				'</li>'+
			      '</ul>'+
			    '</div>'+
			  '</div>'+
			'</div>';

		// Don't display the button until you generate the CSS.
		channelMenuButton.style.display = "none";

		// Now that we have created the button append it to the page
		document.body.appendChild(channelMenuButton);

		// Callback after we have completed generating the help button and putting it on the page
		if(callback) {
			callback()
		}
	};

	ChannelMenuBrandingDemo.prototype.generateCss = function() {
		var stylesToApply = "";
		var channelMenuButton = document.getElementsByClassName("channelMenuButton");
		var channelMenuBranding = document.createElement("style");
		var brandingData = CHANNEL_BRANDING_DATA;

		channelMenuBranding.type = "text/css";

		// Generate css based on Branding JSON
		Object.keys(brandingData).forEach(function(key) {
			if(brandingData) {
				stylesToApply += "." + key + " { " + brandingData[key].cssTagType + ": " + brandingData[key].cssValue + " } \n";
			}
		});
		channelMenuBranding.innerHTML = stylesToApply;

		if(channelMenuButton) {
			if(channelMenuButton[0]) {
				channelMenuButton[0].append(channelMenuBranding);

				// Display button now that we have applyed the Branding
				channelMenuButton[0].style.display = "";
			}
		}
	};

	ChannelMenuBrandingDemo.prototype.displayBrandedHelpButton = function() {
		this.generateButton(this.generateCss)
	}

	document.channelMenuBrandingDemo = new ChannelMenuBrandingDemo();
})(document.channelMenuBrandingDemo || {});
