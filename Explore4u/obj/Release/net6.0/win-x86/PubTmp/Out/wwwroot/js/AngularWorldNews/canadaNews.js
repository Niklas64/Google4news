// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("canadaController", function ($scope) {

    var canadatopnews = [
        { news: "http://www.cbc.ca/", name: "CBC" },
        { news: "https://www.theglobeandmail.com/", name: "The Globe and Mail" },
        { news: "https://www.thestar.com/", name: "The Toronto Star" },
        { news: "http://en.canoe.com/", name: "Canoe" },
        { news: "http://vancouversun.com/", name: "Vancouver Sun" },
        { news: "http://www.tsn.ca/", name: "TSN Sport" },
        { news: "http://www.lapresse.ca/", name: "La Presse" },
        { news: "http://www.torontosun.com/", name: "Toronto Sun" },
        { news: "http://www.ctvnews.ca/", name: "CTV News" },
        { news: "http://www.rds.ca/", name: "RDS Sport" },
        { news: "http://www.tvanouvelles.ca/", name: "TVA Nouvelles" },
        { news: "http://thechronicleherald.ca/", name: "Chronicle Herald" },
        { news: "http://www.winnipegfreepress.com/", name: "Winnipeg Free Press" },
        { news: "https://www.meteomedia.com/", name: "Météo Média" },
        { news: "http://www.timescolonist.com/", name: "Times Colonist" },
        { news: "http://www.vanpeople.com/", name: "Van People (ch)" },
        { news: "http://www.edmontonsun.com/", name: "Edmonton Sun" },
        { news: "http://www.calgarysun.com/", name: "Calgary Sun" },
        { news: "http://www.winnipegsun.com/", name: "Winnipeg Sun" },
        { news: "http://www.winnipegsun.com/", name: "Winnipeg Sun" }
    ];

    var novascotia = [
        { news: "https://halifax.craigslist.org/", name: "Craigslist Nova Scotia" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/ns/", name: "CBC" },
        { news: "http://thechronicleherald.ca/", name: "Chronicle-Herald" },
        { news: "http://www.capebretonpost.com/", name: "Cape Breton Post" },
        { news: "http://www.ngnews.ca/", name: "The News" },
        { news: "https://www.ctvnews.ca/", name: "CTV" },
        { news: "https://halifax.citynews.ca/", name: "Halifax City News" },
        { news: "https://globalnews.ca/tag/metro-halifax/", name: "Global News Halifax" },
        { news: "http://southshorenow.ca/", name: "Lighthouse Log" },
        { news: "http://thecoast.ca/", name: "The Coast" },
        { news: "http://www.trurodaily.com/", name: "Truro Daily News" }
    ];

    var brunswick = [
        { news: "https://newbrunswick.craigslist.org/", name: "Craigslist New Brunswick" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/nb/", name: "CBC" },
        { news: "http://www.capacadie.com/", name: "L’Acadie Nouvelle" },
        { news: "http://www.canadaeast.com/", name: "Canada East" },
        { news: "https://www.saltwire.com/atlantic-canada/", name: "Atlantic Canada" },
        { news: "http://www.theguardian.pe.ca/", name: "The Guardian" },
        { news: "http://www.journalpioneer.com/", name: "Journal Pioneer" }
    ];

    var newfoundland = [
        { news: "https://newfoundland.craigslist.org/", name: "Craigslist New Foundland" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/nl/", name: "CBC" },
        { news: "http://www.saltwire.com/", name: "The Telegram" },
        { news: "http://vocm.com/", name: "VOCM" },
        //{ news: "http://ntv.ca/", name: "NTV" },
        { news: "http://www.theaurora.ca/", name: "The Aurora" },
        { news: "http://theindependent.ca/", name: "The Independent" },
        { news: "https://www1.cbn.com/movie/the-golden-compass", name: "The Compass" }
    ];

    var quebec = [
        { news: "https://quebec.craigslist.org/", name: "Craigslist Québec" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.lapresse.ca/", name: "La Presse" },
        { news: "http://www.journaldemontreal.com/", name: "Le Journal de Montréal" },
        { news: "https://canoe.com/", name: "Canoe" },
        { news: "https://montreal.citynews.ca/", name: "Montreal City News" },
        { news: "http://www.montrealgazette.com/", name: "The Montréal Gazette (eng)" },
        { news: "http://www.ledevoir.com/", name: "Le Devoir" },
        { news: "http://ici.radio-canada.ca/", name: "Radio Canada" },
        { news: "http://www.journaldequebec.com/", name: "Le Journal de Québec" },
        { news: "http://tvanouvelles.ca/", name: "TVA Nouvelles" },
        { news: "http://www.lesaffaires.com/", name: "Les Affaires" },
        { news: "http://www.rds.ca/", name: "RDS" },
        { news: "http://www.lapresse.ca/le-soleil/", name: "Le Soleil" },
        { news: "http://tvasports.ca/", name: "TVA Sports" },
        { news: "https://www.envedette.ca", name: "Envedette" },
        { news: "http://www.journaldequebec.com/", name: "Journal de Quebec" }
    ];

    var ontario = [
        { news: "https://toronto.craigslist.org/", name: "Craigslist Ontario" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/toronto/", name: "CBC Toronto" },
        { news: "http://www.thestar.com/", name: "Toronto Star" },
        { news: "http://www.torontosun.com/", name: "Toronto Sun" },
        { news: "https://toronto.citynews.ca/", name: "Toronto City News" },
        { news: "https://ottawa.citynews.ca/", name: "Ottawa City News" },
        { news: "http://www.theglobeandmail.com/", name: "The Globe and Mail" },
        { news: "http://www.nationalpost.com/", name: "National Post" },
        { news: "https://kitchener.citynews.ca/", name: "Kitchener City News" },
        { news: "http://www.ottawacitizen.com/", name: "Ottawa Citizen" },
        { news: "http://o.canada.com/", name: "Canada.com" },
        { news: "http://www.lfpress.com/", name: "London Free Press" },
        { news: "http://www.thespec.com/hamilton/", name: "Hamilton Spectator" },
        { news: "http://www.windsorstar.com/", name: "Windsor Star" },
        { news: "http://www.cp24.com/", name: "CP24" },
        { news: "http://www.financialpost.com/", name: "Financial Post" },
        { news: "http://www.nowtoronto.com/", name: "Now Toronto" },
        { news: "http://toronto.ctvnews.ca/", name: "CTV Toronto" }
    ];

    var nunavut = [
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/north/", name: "CBC North" },
        { news: "http://www.nunatsiaqonline.ca/", name: "Nunatsiaq News" },
        { news: "https://www.nnsl.com/tag/kivalliq-news/", name: "Kivalliq News" },
        { news: "https://www.nnsl.com/tag/nunavut-news/ ", name: "Nunavut Online" }
    ];

    var manitoba = [
        { news: "https://winnipeg.craigslist.org/", name: "Craigslist Manitoba" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/manitoba/", name: "CBC Manitoba" },
        { news: "https://winnipeg.citynews.ca/", name: "Winnipeg City News" },
        { news: "http://www.winnipegfreepress.com/", name: "Winnipeg Free Press" },
        { news: "http://www.winnipegsun.com/", name: "Winnipeg Sun" },
        { news: "https://winnipeg.ctvnews.ca/video", name: "CTV Winnipeg" },
        { news: "http://www.brandonsun.com/", name: "Brandon Sun" },
        { news: "http://www.thompsoncitizen.net/", name: "Thompson Citizen" },
        { news: "https://www.thegraphicleader.com/category/news/local-news/", name: "The Graphic" }
    ];

    var saskatchewan = [
        { news: "https://saskatoon.craigslist.org/", name: "Craigslist Saskatchewan" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.leaderpost.com/", name: "The Leader-Post" },
        { news: "http://www.thestarphoenix.com/", name: "The Star Phoenix" },
        { news: "http://www.cbc.ca/saskatoon/", name: "CBC" },
        { news: "https://www.moosejawtoday.com/", name: "Moose Jaw Times-Herald" },
        { news: "http://www.paherald.sk.ca/", name: "Prince Albert Daily Herald" },
        { news: "https://regina.ctvnews.ca/local-news", name: "CTV Regina" },
        { news: "http://www.yorktonnews.com/", name: "Yorkton News" },
        { news: "http://panow.com/", name: "PA Now" }
    ];

    var northwest = [
        { news: "https://yellowknife.craigslist.org/", name: "Craigslist NW Territories" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.cbc.ca/north/", name: "CBC North" },
        { news: "http://nnsl.com/yellowknifer/", name: "Yellowknifer" },
        { news: "http://www.nnsl.com/", name: "Northern News Services" },
        { news: "http://www.hayriverhub.com/", name: "The Hub" },
        { news: "http://www.northernminer.com/", name: "The Northern Miner" }
    ];

    var alberta = [
        { news: "https://edmonton.craigslist.org/", name: "Craigslist Calgary" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.calgaryherald.com/", name: "Calgary Herald" },
        { news: "http://www.cbc.ca/calgary/", name: "CBC" },
        { news: "http://www.edmontonjournal.com/", name: "Edmonton Journal" },
        { news: "http://www.edmontonsun.com/", name: "Edmonton Sun" },
        { news: "https://edmonton.citynews.ca/", name: "Edmonton City News" },
        { news: "https://calgary.citynews.ca/", name: "Calgary City News" },
        { news: "https://edmonton.ctvnews.ca/video", name: "CTV Edmonton" },
        { news: "https://calgary.ctvnews.ca/more-news", name: "CTV Calgary" },
        { news: "http://www.calgarysun.com/", name: "Calgary Sun" },
        { news: "http://www.reddeeradvocate.com/", name: "Red Deer Advocate" },
        { news: "http://globalnews.ca/edmonton/", name: "Global Edmonton" },
        { news: "http://medicinehatnews.com/", name: "Medicine News" },
        { news: "http://globalnews.ca/calgary/", name: "Global Calgary" },
        { news: "http://lethbridgeherald.com/", name: "Lethbridge Herald" }
    ];

    var britishc = [
        { news: "https://vancouver.craigslist.org/", name: "Craigslist Vancouver" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "http://www.vancouversun.com/", name: "Vancouver Sun" },
        { news: "http://www.theprovince.com/", name: "The Province" },
        { news: "http://www.cbc.ca/bc/", name: "CBC" },
        { news: "http://globalnews.ca/bc/", name: "Global BC" },
        { news: "http://www.timescolonist.com/", name: "Times Colonist" },
        { news: "http://www.kelownadailycourier.ca/", name: "Kelowna Daily Courier" },
        { news: "http://www.princegeorgecitizen.com/", name: "Prince George Citizen" },
        { news: "http://www.straight.com/", name: "Straight.com" },
        { news: "https://vancouver.citynews.ca/", name: "Vancouver City News" },
        { news: "http://www.kamloopsnews.ca/", name: "Kamloops Daily News" },
        { news: "https://www.ctvnews.ca/", name: "CTV" },
        { news: "http://www.bcbusiness.ca/", name: "BC Business" },
        { news: "http://www.vancitybuzz.com/", name: "Vancity Buzz" },
        { news: "https://twitter.com/24hoursvan/", name: "24 Hours" },
        { news: "http://www.abbynews.com/", name: "The Abbotsford News" },
        { news: "https://www.singtao.ca/vancouver/", name: "Sing Tao" }
    ];

    var yukon = [
        { news: "http://whitehorse.en.craigslist.ca/", name: "Craigslist Yukon" },
        { news: "http://www.ebay.ca/", name: "eBay" },
        { news: "http://www.amazon.ca/", name: "Amazon" },
        { news: "https://www.yellowpages.ca/", name: "Yellow Pages" },
        { news: "http://www.whitehorsestar.com/", name: "Whitehorse Star" },
        { news: "http://www.yukon-news.com/", name: "The Yukon News" },
        { news: "http://klondikesun.com/", name: "Klondike Sun" },
        { news: "http://www.cbc.ca/north/", name: "CBC North" },
        { news: "http://www.gov.yk.ca/news/", name: "Government of Yukon" }
    ];

    $scope.canadatopnews = canadatopnews;
    $scope.novascotia = novascotia;
    $scope.brunswick = brunswick;
    $scope.newfoundland = newfoundland;
    $scope.quebec = quebec;
    $scope.ontario = ontario;
    $scope.nunavut = nunavut;
    $scope.manitoba = manitoba;
    $scope.saskatchewan = saskatchewan;
    $scope.northwest = northwest;
    $scope.alberta = alberta;
    $scope.britishc = britishc;
    $scope.yukon = yukon;

});