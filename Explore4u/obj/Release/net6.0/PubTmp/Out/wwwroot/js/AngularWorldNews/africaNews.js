// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("africaController", function ($scope) {

    var southafrica = [
        { news: "https://www.takealot.com/", name: "Takealot" },
        { news: "http://www.loot.co.za/", name: "Loot" },
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.yellowpages.co.za/", name: "Yellow Pages" },
        { news: "http://www.iol.co.za/", name: "Independent Online" },
        { news: "https://mg.co.za/", name: "Mail & Guardian" },
        { news: "http://www.thenewage.co.za/", name: "The New Age" },
        { news: "https://www.businesslive.co.za/", name: "Business Live" },
        { news: "http://www.news24.com/", name: "News 24" },
        { news: "http://www.sport24.co.za/", name: "Sport24" },
        { news: "https://www.timeslive.co.za/", name: "Times Live" },
        { news: "http://www.netwerk24.com/", name: "Netwerk 24" },
        { news: "http://www.dispatchlive.co.za/", name: "Dispatch Live" },
        { news: "https://www.supersport.com/", name: "SuperSport" },
        { news: "http://polity.org.za/", name: "Polity" },
        { news: "http://www.sowetanlive.co.za/", name: "Sowetan Live" },
        { news: "http://www.iol.co.za/capetimes", name: "Cape Times" },
        { news: "http://www.msn.com/en-za/news", name: "MSN News" },
        { news: "http://www.fin24.com/", name: "Fin24" },
        { news: "http://www.iol.co.za/pretoria-news", name: "Pretoria News" },
        { news: "https://www.businesslive.co.za/fm/", name: "Finacial Mail" },
        { news: "http://www.sundayworld.co.za/", name: "Sunday World" },
        { news: "http://allafrica.com/", name: "allAfrica" },
        { news: "http://www.enca.com/", name: "eNCA" },
        { news: "http://citizen.co.za/", name: "The Citizen" },
        { news: "http://ewn.co.za/", name: "Eyewitness News" },
        { news: "https://www.dailymaverick.co.za/", name: "Daily Maverick" },
        { news: "http://www.capetownmagazine.com/", name: "Capetown Magazine" },
        { news: "http://afkinsider.com/", name: "AFK Insider" }
    ]



    $scope.southafrica = southafrica;

});