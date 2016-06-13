var React = require("react");
var NewsItem = require("./NewsItem.jsx")

var data = [{"id" : 1, "title": "WeWork Is Cutting About 7% of Staff", "subtitle": "The $16 billion startup has also instituted a pause on hiring.", "text":"WeWork Cos., the world’s largest shared-workspace startup, plans to cut about 7 percent of its staff and has instituted a temporary pause on hiring, according to e-mails obtained by Bloomberg. The cutbacks come just three months after the New York company said it raised a round of $430 million led by Chinese investors. Managers were instructed to begin dismissals this week, said one of the e-mails. The startup, which lets members rent desks in an open office, ballooned from about 230 employees early last year to more than 1,000 today, according to research firm Mattermark.", "profile": "http://atheerair.com/wp-content/uploads/2015/11/Bloomberg-Logo-transparent.png", "thumb": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i9knOUdblp54/v0/190x-1.jpg"}]

var News = React.createClass({
    render: function() {
        
         var newsItems = data.map(function(item) {
             return <NewsItem key={item.id} title={item.title} subtitle={item.subtitle} text={item.text} profile={item.profile} thumb={item.thumbnail} />
             
         })
        
        return (
            <ul>{newsItems}</ul>
            
        );
    }
    
   
});

module.exports = News;