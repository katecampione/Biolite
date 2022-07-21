var RoutingAndRedirects = (function () {

    rar = {}

	rar.routes = {
		'/blogs/team' 					: '/pages/team',
		// '/blogs/lab' 					: '/pages/lab',
		'/blogs/press' 					: '/pages/press-media',
		'/blogs/careers' 				: '/pages/careers',
		//'/blogs/faq' 					: '/pages/faq',
		'/blogs/international-stores' 	: '/pages/international-stores',
		'/collections/all-products' 	: '/collections',
		'/collections/all' 				: '/collections',
	},

	rar.init = function()
	{
		this.doRouting()
	},

	rar.doRouting = function()
	{
		var location = window.location.href;
		for(var index in rar.routes)
		{ 
			if( this.parseUri(location).path == index )
			{
				var redirect = rar.routes[index]
				window.location.replace( redirect );
			}
		}

	},

	// parseUri 1.2.2
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
    rar.parseUri = function(str)
    {
      var o   = rar.parseUriOptions,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

      while (i--) uri[o.key[i]] = m[i] || "";

      uri[o.q.name] = {};
      uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
      });

      return uri;
    }

    rar.parseUriOptions = {
      strictMode: false,
      key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
      q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
      },
      parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
      }
    };    

	return rar;
}());
