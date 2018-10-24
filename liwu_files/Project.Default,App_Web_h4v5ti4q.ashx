if(typeof Project == "undefined") Project={};
if(typeof Project.Default == "undefined") Project.Default={};
Project.Default_class = function() {};
Object.extend(Project.Default_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	LogUserIdentity: function(ip, location, kw, identity1, identity2, wd) {
		return this.invoke("LogUserIdentity", {"ip":ip, "location":location, "kw":kw, "identity1":identity1, "identity2":identity2, "wd":wd}, this.LogUserIdentity.getArguments().slice(6));
	},
	GetNewProductsForMobile: function(pageNumber) {
		return this.invoke("GetNewProductsForMobile", {"pageNumber":pageNumber}, this.GetNewProductsForMobile.getArguments().slice(1));
	},
	url: '/ajaxpro/Project.Default,App_Web_h4v5ti4q.ashx'
}));
Project.Default = new Project.Default_class();

