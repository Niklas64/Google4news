// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("australiaController", function ($scope) {

    var caledonia = [
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.searchyellowdirectory.com/", name: "Yellow and White Pages" },
        { news: "http://www.lnc.nc/", name: "Les Nouvelles Calédoniennes" },
        { news: "http://nouvellecaledonie.la1ere.fr/", name: "Nouvelle Caledonie" },
        { news: "http://www.dnc.nc/", name: "Demain en Nouvelle" },
        { news: "https://www.facebook.com/CaledonianPost/", name: "Caledonian Post" },
        { news: "https://www.islandsbusiness.com/", name: "Island Business" }
    ];

    var solomon = [
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.yellowpagesb.com/", name: "Yellow and White Pages" },
        { news: "http://www.solomonstarnews.com/", name: "Solomon Star" },
        { news: "http://www.sibconline.com.sb/", name: "SIBC" },
        { news: "http://www.solomontimes.com/", name: "Solomon Times" },
        { news: "http://www.islandsbusiness.com/topics/solomon-islands/", name: "Islands Business" },
        { news: "https://theislandsun.com.sb/", name: "The Island Sun" }
    ];

    var fiji = [
        { news: "https://www.privateislandsonline.com/region/fiji", name: "Private Island For Sale" },
        { news: "https://fijivillage.com/", name: "Fiji Village" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.yellowpages.com.fj/", name: "Yellow and White Pages" },
        { news: "http://www.fbc.com.fj/", name: "FBC News" },
        { news: "http://rf1.fbc.com.fj", name: "Radio Fiji One" },
        { news: "http://www.fijitimes.com/", name: "The Fiji Times" },
        { news: "http://www.fijisun.com.fj/", name: "Fiji Sun" },
        { news: "http://www.islandsbusiness.com/topics/fiji/", name: "Islands Business" },
        { news: "https://fijionenews.com.fj/", name: "Fiji 1 News" },
        { news: "http://fijilive.com/", name: "Fiji Live News" },
        { news: "http://thejetnewspaper.com/", name: "The Jet Newspaper" }
    ];

    var papuang = [
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.yellowpages.com.pg/", name: "Yellow and White Pages" },
        { news: "http://www.thenational.com.pg/", name: "The National" },
        { news: "http://www.postcourier.com.pg/", name: "Post-Courier" },
        { news: "http://www.islandsbusiness.com/topics/papua-new-guinea/", name: "Islands Business" },
        { news: "http://www.pngfacts.com/", name: "Papua New Guinea" }
    ];

    var newzealand = [
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://yellow.co.nz/", name: "Yellow and White Pages" },
        { news: "http://www.nzherald.co.nz/", name: "The New Zealand Herald" },
        { news: "http://www.nbr.co.nz/", name: "The National Business Review" },
        { news: "http://www.stuff.co.nz/", name: "Stuff.co.nz" },
        { news: "http://www.nznewsuk.co.uk/", name: "New Zealand News" },
        { news: "http://www.odt.co.nz/", name: "Otago Daily Times" },
        { news: "http://www.theaucklander.co.nz", name: "The Aucklander" },
        { news: "http://news.msn.co.nz/", name: "MSN NZ News" },
        { news: "http://www.stuff.co.nz/the-press/", name: "The Press Christchurch" },
        { news: "https://www.threenow.co.nz", name: "3 News" },
        { news: "https://nzdaisuki.com/", name: "NZ Daisuki (Japanese)" },
        { news: "http://www.dompost.co.nz/", name: "The Dominion Post" },
        { news: "http://www.radionz.co.nz/", name: "Radio NZ" },
        { news: "http://www.radiosport.co.nz/", name: "Radio Sport" },
        { news: "http://www.skykiwi.com/", name: "Sky Kiwi (Chinese)" },
        { news: "https://sunlive.co.nz/", name: "Sun Live" },
        { news: "http://www.bayofplentytimes.co.nz/", name: "Bay of Plenty Times" },
        { news: "http://www.nelsonmail.co.nz/", name: "Nelson Mail" },
        { news: "http://www.northernadvocate.co.nz/", name: "The Northern Advocate" },
        { news: "http://www.times-age.co.nz/", name: "Wairarapa Time-age" }
    ];

    var tasmania = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/tas/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.themercury.com.au/", name: "The Merury" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.news.com.au/", name: "News.com.au" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "https://www.examiner.com.au/", name: "The Examiner" },
        { news: "http://www.theadvocate.com.au/", name: "The Advocate" },
        { news: "https://www.examiner.com.au/community/", name: "The Examiner Community" }
    ];

    var victoria = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/vic/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.theage.com.au/", name: "The Saturday Age" },
        { news: "http://www.heraldsun.com.au/", name: "Herald Sun Melbourne" },
        { news: "https://www.theguardian.com/australia-news/melbourne/", name: "The Guardian Melbourne" },
        { news: "http://www.geelongadvertiser.com.au/", name: "The Geelong Advertiser" },
        { news: "http://www.thecourier.com.au/", name: "The Courier Ballarat" },
        { news: "http://www.bendigoadvertiser.com.au/", name: "Bendigo Advertiser" },
        { news: "https://www.sheppnews.com.au/", name: "Shepparton News" },
        { news: "https://issuu.com/theweeklyreview.com.au/docs/twr-stonnington-20180627-iss", name: "The Weekly Review Stonnington" },
        { news: "http://www.standard.net.au/", name: "The Standard Warrnambool" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" },
        { news: "http://www.news.com.au/", name: "News.com.au" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" }
    ];

    var newsouthwales = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/nsw/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.smh.com.au/", name: "The Sydney Morning Herald" },
        { news: "http://www.dailytelegraph.com.au/newslocal/", name: "  News Local Sydney" },
        { news: "http://www.theherald.com.au/", name: "Herald Sydney" },
        { news: "http://www.illawarramercury.com.au/", name: "Illawarra Mercury" },
        { news: "http://www.dailytelegraph.com.au/newslocal/central-coast/", name: "Central Cost NSW" },
        { news: "http://www.dailyadvertiser.com.au/", name: "The Daily Advertiser Wagga Wagga" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.news.com.au/", name: "New.com.au" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "http://www.dailytelegraph.com.au/", name: "The Daily Telegraph" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" }
    ];

    var queensland = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/qld/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "https://www.couriermail.com.au/", name: "The Courier-Mail Brisbane" },
        { news: "http://www.brisbanetimes.com.au/", name: "Brisbane Times" },
        { news: "https://www.couriermail.com.au/questnews/southeast", name: "The Courier-Mail South East" },
        { news: "http://www.townsvillebulletin.com.au/", name: "Townswille Bulletin" },
        { news: "http://www.cairns.com.au/", name: "Cairns" },
        { news: "http://www.sunshinecoastdaily.com.au/", name: "Sunshine Cost Daily" },
        { news: "https://thenewdaily.com.au/news/state/qld/", name: "The New Daily" },
        { news: "http://www.news-mail.com.au/", name: "News Mail Bundaberg" },
        { news: "http://www.themorningbulletin.com.au/", name: "The Bulletin Rockhampton" },
        { news: "http://www.thechronicle.com.au/", name: "The Chronicle" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "https://www.weeklytimesnow.com.au/", name: "Weekly Times Now" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.news.com.au/", name: "New.com.au" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "http://www.dailytelegraph.com.au/", name: "The Daily Telegraph" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" }
    ];

    var northterri = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/nt/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.ntnews.com.au/", name: "Norther Territory News" },
        { news: "https://www.ntnews.com.au/news/alice-springs", name: "NT News Alice Spring Now" },
        { news: "http://www.alicespringsnews.com.au/", name: "Alice Spring News" },
        { news: "http://www.katherinetimes.com.au/", name: "Katherine Times" },
        { news: "https://www.weeklytimesnow.com.au/", name: "Weekly Times Now" },
        { news: "http://www.thechronicle.com.au/", name: "The Chronicle" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.news.com.au/", name: "New.com.au" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "http://www.dailytelegraph.com.au/", name: "The Daily Telegraph" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" }
    ];

    var southaustralia = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/sa/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.adelaidenow.com.au/", name: "Adelaide Now" },
        { news: "http://indaily.com.au/", name: "InDaily Adelaide" },
        { news: "http://www.borderwatch.com.au/", name: "The Border Watch Limestone" },
        { news: "http://www.whyallanewsonline.com.au/", name: "Whyalla News" },
        { news: "http://www.bunyippress.com.au/", name: "The Bunyip Press" },
        { news: "http://www.murrayvalleystandard.com.au/", name: "The Murray Vally Standard" },
        { news: "http://www.portlincolntimes.com.au/", name: "Port Lincoln Times" },
        { news: "http://www.coastalleader.com.au/", name: "Costal Leader" },
        { news: "https://www.weeklytimesnow.com.au/", name: "Weekly Times Now" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.news.com.au/", name: "New.com.au" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "http://www.dailytelegraph.com.au/", name: "The Daily Telegraph" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" }
    ];

    var westaustralia = [
        { news: "https://www.bunnings.com.au/", name: "Bunnings" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.ebay.com.au/", name: "eBay" },
        { news: "http://www.amazon.com.au/", name: "Amazon" },
        { news: "https://www.yellowpages.com.au/wa/localities.html", name: "Yellow Pages" },
        { news: "http://news.ninemsn.com.au/", name: "9 News" },
        { news: "http://www.perthnow.com.au/", name: "The Sunday Times Perth" },
        { news: "http://www.businessnews.com.au/", name: "WA Business News" },
        { news: "http://au.news.yahoo.com/thewest/", name: "Yahoo West Australian" },
        { news: "http://www.murraymail.com.au/", name: "Murray Mail" },
        { news: "http://www.esperanceexpress.com.au/", name: "The Esperance Express" },
        { news: "http://www.trurodaily.com/", name: "Truro Daily News" },
        { news: "http://www.avonadvocate.com.au/", name: "The Avon Vally Advocate" },
        { news: "http://www.merredinmercury.com.au/", name: "Merredin-Wheatbelt Mercury" },
        { news: "http://www.waginargus.com.au/", name: "The Wagin Argus" },
        { news: "http://www.viet-times.com.au/", name: "Viet Times" },
        { news: "https://www.weeklytimesnow.com.au/", name: "Weekly Times Now" },
        { news: "http://au.yahoo.com/", name: "Yahoo! 7" },
        { news: "http://www.theaustralian.com.au/", name: "The Australian" },
        { news: "http://www.afr.com/", name: "The Financial Review" },
        { news: "https://www.ibtimes.com.au/", name: "International Business Times" },
        { news: "http://www.news.com.au/", name: "New.com.au" },
        { news: "http://www.australianherald.com/", name: "Australian Herald" },
        { news: "http://www.dailytelegraph.com.au/", name: "The Daily Telegraph" },
        { news: "http://www.canberratimes.com.au/", name: "The Canberra Times" }
    ];


    $scope.caledonia = caledonia;
    $scope.solomon = solomon;
    $scope.fiji = fiji;
    $scope.papuang = papuang;
    $scope.newzealand = newzealand;
    $scope.tasmania = tasmania;
    $scope.victoria = victoria;
    $scope.queensland = queensland;
    $scope.newsouthwales = newsouthwales;
    $scope.northterri = northterri;
    $scope.southaustralia = southaustralia;
    $scope.westaustralia = westaustralia;

});