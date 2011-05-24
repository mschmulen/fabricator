APP.SERVICES.GITHUB = (function() {
	
	//http://develop.github.com/p/issues.html
	
	var API = {};
	
	//Google Books
	API.mIssueSearchData =[];
	API.GITHUB.ISSUESEARCH_DATA_EVENT = "API.GITHUB.ISSUESEARCH_DATA_EVENT";
	API.issuesSearch = function()
	{
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","https://github.com/api/v2/json/issues/search/defunkt/github-issues/open/test");
		
		xhr.onload = function()
		{
			try
			{
				API.mIssueSearchData = eval('('+this.responseText+')');
				Ti.App.fireEvent(API.API.GITHUB.ISSUESEARCH_DATA_EVENT);
			}//end try
			catch(E){
				alert(E);
			}//end catch
		};//end xhr.onload
		
		// Get the data
		xhr.send();
	};//end getTweetsFromUser
		
	return API;
})(); //end APP.SERVICES