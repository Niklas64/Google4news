// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("usaController", function ($scope) {
    var ustopnews = [
        { news: "http://www.wsj.com/", name: "Wall Street Journal" },
        { news: "http://www.nytimes.com/", name: "New York Times" },
        { news: "http://www.washingtonpost.com/", name: "Washington Post" },
        { news: "http://www.usatoday.com/", name: "USA Today" },
        { news: "http://www.latimes.com/", name: "LA Times" },
        { news: "http://www.nypost.com/", name: "New York Post" },
        { news: "http://time.com/", name: "Time Magazine" },
        { news: "http://www.chicagotribune.com/", name: "Chicago Tribune" },
        { news: "http://www.boston.com/", name: "Boston Globe" },
        { news: "http://www.nydailynews.com/", name: "NY Daily News" },
        { news: "http://www.denverpost.com/", name: "Denver Post" },
        { news: "http://www.dallasnews.com/", name: "Dallas Morning News" },
        { news: "http://www.philly.com/", name: "Philadelphia Inquirer" },
        { news: "http://www.chron.com/", name: "Houston Chronicle" },
        { news: "http://www.laopinion.com/", name: "La Opinión" },
        { news: "http://www.ajc.com/", name: "Atlanta Journal-Constitution" },
        { news: "http://www.sfchronicle.com/", name: "SF Chronicle" },
        { news: "http://www.newsday.com/", name: "Long Island Newsday" },
        { news: "http://www.startribune.com/", name: "Minneapolis Star Tribune" }
    ];

    var puerto = [
        { news: "http://puertorico.en.craigslist.org/", name: "Craigslist Puerto Rico" },
        { news: "http://www.elnuevodia.com/", name: "El Nuevodia" },
        { news: "http://www.vocero.com/", name: "Vocero" },
        { news: "http://www.primerahora.com/", name: "Primera Hora" },
        { news: "http://wapa.tv/", name: "WAPA" },
        { news: "http://www.caribbeanbusinesspr.com/", name: "Caribbean Business" },
        { news: "http://www.elregionaldigital.com/", name: "El Regiona Digital" },
        { news: "http://noticel.com/", name: "NotiCel" },
        { news: "http://www.telemundopr.com/", name: "Telemundo" },
        { news: "http://cuarto.quenepon.org/", name: "Quenepon" },
        { news: "http://www.periodicolaperla.com/", name: "La Perla del Sur" },
        { news: "http://www.telemundopr.com/", name: "Telemundo TV" }

    ];

    var hawaii = [
        { news: "http://geo.craigslist.org/iso/us/hi/", name: "Craigslist Hawaii" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.hawaiinewsnow.com/", name: "Hawaii News Now" },
        { news: "http://www.staradvertiser.com/", name: "Star Advertiser" },
        { news: "http://mauinews.com/", name: "The Maui News" },
        { news: "http://thegardenisland.com/", name: "Kauai News" },
        { news: "http://hawaiitribune-herald.com/", name: "Tribune Herald" },
        { news: "http://westhawaiitoday.comg/", name: "West Hawaii Today" },
        { news: "http://www.hawaiireporter.com/", name: "Hawaii Reporter" },
        { news: "http://khon2.com/", name: "Khon2" },
        { news: "http://mauinow.com/", name: "Maui Now" },
        { news: "http://www.honolulumagazine.com/", name: "Honolulu Magazine" }
    ];

    var alaska = [
        { news: "http://geo.craigslist.org/iso/us/ak/", name: "Craigslist Alaska" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.adn.com/", name: "Anchorage Daily News" },
        { news: "http://www.newsminer.com/", name: "Fairbanks Daily News" },
        { news: "http://juneauempire.com/", name: "Juneau Empire" },
        { news: "http://www.ktuu.com/", name: "2KTUU" },
        { news: "http://www.frontiersman.com/", name: "Frontiersman" },
        { news: "http://peninsulaclarion.com/", name: "Peninsula Clarion" },
        { news: "http://www.alaskastar.com/", name: "Alaska Star" },
        { news: "http://www.alaskajournal.com/", name: "Alaska Journal" },
        { news: "http://www.ktva.com/", name: "KTVA Alaska" }
    ];

    var washingtondc = [
        { news: "http://washingtondc.craigslist.org/", name: "Craigslist Washington DC" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.washingtonpost.com", name: "Washington Post" },
        { news: "http://www.washingtontimes.com/", name: "Washington Times" },
        { news: "http://washingtonexaminer.com/", name: "Washington Examiner" },
        { news: "http://thehill.com/ ", name: "The Hill " },
        { news: "http://www.dcspotlight.com/", name: "The DC Spotlight" },
        { news: "http://www.washingtonian.com/", name: "Washingtonian" },
        { news: "http://www.wjla.com/", name: "ABC 7" },
        { news: "http://www.myfoxdc.com/", name: "FOX DC" },
        { news: "http://www.csnwashington.com/", name: "CSN Washington" },
        { news: "http://www.wtop.com/", name: "WTOP" },
        { news: "http://www.wusa9.com/", name: "WUSA 9" },
        { news: "http://www.nbcwashington.com/", name: "NBC Washington" },
        { news: "http://www.politico.com/", name: "Politico" },
        { news: "http://washingtoninformer.com/", name: "Washington Informer" },
        { news: "http://www.washingtonhispanic.com/", name: "Washington Hispanic" },
        { news: "http://eltiempolatino.com/", name: "El Tiempo Latino" },
        { news: "http://www.washingtoncitypaper.com/ ", name: "Washington City Paper " },
        { news: "http://www.rollcall.com/ ", name: "Roll Call " }
    ];

    var maryland = [
        { news: "http://geo.craigslist.org/iso/us/md/", name: "Craigslist Maryland" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.baltimoresun.com/", name: "Baltimore Sun" },
        { news: "http://www.herald-mail.com/", name: "Herald Mail" },
        { news: "http://www.nbcwashington.com/", name: "NBC Washington" },
        { news: "http://baltimore.cbslocal.com/", name: "CBS Baltimore" },
        { news: "http://www.wbaltv.com/", name: "WBAL 11" },
        { news: "http://www.fredericknewspost.com/", name: "Frederick News Post" },
        { news: "http://www.capitalgazette.com/", name: "Capital Gazette" },
        { news: "http://times-news.com/", name: "Cumberland Times-News" },
        { news: "http://thedailyrecord.com/", name: "The Daily Record" },
        { news: "http://wjla.com/", name: "ABC 7" },
        { news: "http://www.wboc.com/", name: "WBOC TV 7" },
        { news: "http://www.your4state.com/", name: "Your4state" },
        { news: "http://www.carrollcountytimes.com/ ", name: "Carroll County Times" },
        { news: "http://foxbaltimore.com/ ", name: "Fox Baltimore" },
        { news: "http://www.thebaynet.com/ ", name: "The BayNet" }
    ];

    var delaware = [
        { news: "http://geo.craigslist.org/iso/us/de/", name: "Craigslist Delaware" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.delawareonline.com/", name: "Delaware Online" },
        { news: "http://www.wboc.com/", name: "WBOC 16" },
        { news: "http://abclocal.go.com/wpvi/", name: "ABC 6 News" },
        { news: "http://www.doverpost.com/", name: "Dover Post" },
        { news: "http://www.wdel.com/", name: "WDEL 1150AM" },
        { news: "http://www.doverpost.com/", name: "Dover Post" },
        { news: "http://capegazette.villagesoup.com/", name: "Cape Gazette" },
        { news: "http://www.newarkpostonline.com/", name: "Newark Post" },
        { news: "http://www.coastalpoint.com/", name: "Coastal Point" },
        { news: "http://www.sussexcountian.com/", name: "Sussex Contain" },
        { news: "http://www.milfordbeacon.com/", name: "Milford Beacon" },
        { news: "http://www.wmdt.com/", name: "WMDT 47" }
    ];

    var nyc = [
        { news: "http://newyork.craigslist.org", name: "Craigslist New York City" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.wsj.com/", name: "Wall Street Journal" },
        { news: "http://www.nytimes.com/", name: "New York Times" },
        { news: "http://www.nydailynews.com/", name: "New York Daily News" },
        { news: "http://observer.com/", name: "New York Observer" },
        { news: "http://www.usatoday.com/", name: "USA Today" },
        { news: "http://newyork.cbslocal.com/", name: "CBS New York" },
        { news: "http://www.eldiariony.com/", name: "El Diario" },
        { news: "http://www.dwnews.com/", name: "Duo Wei Times" },
        { news: "http://m.thenation.com/", name: "The Nation" },
        { news: "http://www.nypost.com/", name: "New York Post" },
        { news: "https://www.newyorker.com/", name: "The New Yorker" },
        { news: "http://nypress.com/", name: "New York Press" },
        { news: "http://www.newsday.com/", name: "Newsday Long Island" },
        { news: "http://www.nysun.com/", name: "New York Sun" },
        { news: "http://www.timesunion.com/", name: "Times Union" },
        { news: "http://www.newyorkbeacon.net/", name: "New York Beacon" },
        { news: "http://prishtinapress.info/", name: "Prishtina Press" },
        { news: "http://www.crainsnewyork.com/", name: "Crain’s New York Business" },
        { news: "http://www.amny.com/", name: "AM New York" },
        { news: "https://therealdeal.com/", name: "The Real Deal " },
        { news: "http://wwd.com/", name: "Women’s Wear Daily" },
        { news: "http://www.villagevoice.com/", name: "Village Voice" },
        { news: "http://thechiefleader.com/", name: "Chief Leader" },
        { news: "http://www.irishcentral.com/", name: "Irish Voice" },
        { news: "http://www.gothamgazette.com/", name: "Gotham Gazette" },
        { news: "http://gothamist.com/", name: "Gothamist" },
        { news: "http://www.downtownexpress.com/", name: "Downtown Express" },
        { news: "http://www.longislandpress.com/", name: "Long Island Press" },
        { news: "https://www.rusrek.com/", name: "Russkaya Reklama" },
        { news: "http://www.vivelohoy.com/", name: "Hoy" }
    ];

    var newJersey = [
        { news: "http://geo.craigslist.org/iso/us/nj/", name: "Craigslist New Jersey" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.nj.com/", name: "NJ.com" },
        { news: "http://www.app.com/", name: "Asbury Park Press" },
        { news: "http://www.northjersey.com/", name: "NorthJersey.com" },
        { news: "http://www.nbcphiladelphia.com/", name: "NBC 10" },
        { news: "http://www.njherald.com/", name: "New Jersey Herald" },
        { news: "http://newjersey.news12.com/", name: "News 12 NJ" },
        { news: "http://www.pressofatlanticcity.com/", name: "Press of Atlantic City" },
        { news: "http://www.mycentraljersey.com/", name: "My Central Jersey" },
        { news: "http://www.courierpostonline.com/", name: "Courier Post" },
        { news: "http://www.dailyrecord.com/", name: "Daily Record" },
        { news: "http://nj1015.com/", name: "NJ 101.5" },
        { news: "http://www.newjerseyhills.com/", name: "New Jersey Hills" },
        { news: "http://www.njspotlight.com/ ", name: "NJ Spotlight" },
        { news: "http://www.trentonian.com/ ", name: "Trentonian " }
    ];

    var connecticut = [
        { news: "http://geo.craigslist.org/iso/us/ct/", name: "Craigslist Connecticut" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.ctpost.com/", name: "Connecticut Post" },
        { news: "http://www.courant.com/", name: "Hartford Courant" },
        { news: "http://www.newstimes.com/", name: "News Times Danbury" },
        { news: "http://wtnh.com/", name: "WTNH 8" },
        { news: "http://www.wfsb.com/", name: "WFSB 3" },
        { news: "http://www.nhregister.com/", name: "New Haven Register" },
        { news: "http://www.nbcconnecticut.com/", name: "NBC Connecticut" },
        { news: "http://www.stamfordadvocate.com/", name: "Stamford Advocate" },
        { news: "http://www.norwichbulletin.com/", name: "Norwich Bulletin" },
        { news: "http://connecticut.news12.com/", name: "News 12" },
        { news: "http://www.theday.com/", name: "The Day" },
        { news: "http://www.ctnow.com/", name: "CT Now" },
        { news: "http://dailyvoice.com/", name: "Daily Voice" },
        { news: "https://ctmirror.org/", name: "CT Mirror" },
        { news: "http://www.myrecordjournal.com/", name: "Meriden Record Journal" }
    ];

    var rhodeIsland = [
        { news: "http://geo.craigslist.org/iso/us/ri/", name: "Craigslist Rhode Island" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.providencejournal.com/", name: "Providence Journal" },
        { news: "http://www.turnto10.com/", name: "NBC 10" },
        { news: "http://woonsocketcall.com/", name: "The Woonsocket Call" },
        { news: "http://www.abc6.com/", name: "ABC 6" },
        { news: "http://wpri.com/", name: "WPRI 12 CBS" },
        { news: "http://www.pawtuckettimes.com/", name: "The Pawtucket Times" },
        { news: "http://www.thewesterlysun.com/", name: "The Westerly Sun" },
        { news: "http://www.newportri.com/", name: "Newport Daily News" },
        { news: "http://pbn.com/ ", name: "Providence Business News" },
        { news: "http://www.golocalprov.com/ ", name: "Go Local" },
        { news: "http://www.valleybreeze.com/ ", name: "Valley Breeze" }
    ];

    var maine = [
        { news: "http://geo.craigslist.org/iso/us/me/", name: "Craigslist Main" },
        { news: "http://www.ebay.com/", name: "ebay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://bangordailynews.com/", name: "Bangor Daily News" },
        { news: "http://www.pressherald.com/", name: "Portland Press Herald" },
        { news: "http://www.wcsh6.com/", name: "Channel 6 NBC" },
        { news: "http://wabi.tv/", name: "WABI 5" },
        { news: "http://knox.villagesoup.com/", name: "The Courier-Gazette" },
        { news: "http://www.sunjournal.com/", name: "Sun Journal" },
        { news: "http://www.wgme.com/", name: "WGME 13" },
        { news: "http://www.wmtw.com/", name: "WMTW 8" },
        { news: "http://www.onlinesentinel.com/", name: "Morning Sentinel" },
        { news: "http://www.seacoastonline.com/", name: "Seacoast Online" },
        { news: "http://www.centralmaine.com/", name: "Kennebec Journal" },
        { news: "http://www.fosters.com/", name: "Foster.com" },
        { news: "http://mainetoday.com/", name: "Maine Today" },
        { news: "http://www.mainebiz.biz/", name: "Mainebiz " }
    ];

    var massachusetts = [
        { news: "http://geo.craigslist.org/iso/us/ma/", name: "Craigslist Massachusetts" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://boston.com/", name: "Boston.com" },
        { news: "http://bostonherald.com/", name: "Boston Herald" },
        { news: "http://www.wcvb.com/", name: "MCVB 5" },
        { news: "http://bostonglobe.com/", name: "Boston Globe" },
        { news: "http://www.wickedlocal.com/", name: "Wicked Local" },
        { news: "http://www.whdh.com/", name: "NBC 7" },
        { news: "http://www.masslive.com/", name: "Mass Live" },
        { news: "http://www.telegram.com/", name: "Telegram.com" },
        { news: "http://wwlp.com/", name: "22 News WWLP" },
        { news: "http://www.eagletribune.com/", name: "Eagle-Tribune" },
        { news: "http://www.wbur.org/", name: "WBUR 90.9" },
        { news: "http://www.bostonmagazine.com/", name: "Boston Magazine" },
        { news: "http://www.heraldnews.com/", name: "The Herald News" },
        { news: "http://www.southcoasttoday.com/", name: "South Coast Today" },
        { news: "http://www.tauntongazette.com/", name: "Taunton Gazette" },
        { news: "http://www.milforddailynews.com/ ", name: "Milford Daily News" },
        { news: "http://turnto10.com/ ", name: "Turn to 10" },
        { news: "http://www.thesunchronicle.com/", name: "The Sun Chronicle" },
        { news: "http://www.braziliantimes.com/", name: "Brazilian Times" }
    ];

    var newHampshire = [
        { news: "http://geo.craigslist.org/iso/us/nh/", name: "Craigslist New Hampshire" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.wmur.com/", name: "WMUR 9" },
        { news: "http://www.unionleader.com/", name: "Union Leader" },
        { news: "http://fosters.com/", name: "Foster’s Daily Democrat" },
        { news: "http://www.concordmonitor.com/", name: "Concord Monitor" },
        { news: "http://www.nashuatelegraph.com/", name: "Nashua Telegraph" },
        { news: "http://www.whdh.com/", name: "NBC 7 News" },
        { news: "http://www.sentinelsource.com/", name: "Sentinel Source" },
        { news: "http://www.conwaydailysun.com/", name: "The Conway Daily Sun" },
        { news: "http://www.sentinelsource.com/", name: "Keene Sentinal" },
        { news: "http://nhpr.org/#stream/0", name: "NHPR Radio" },
        { news: "http://www.vnews.com/ ", name: "Valley News" },
        { news: "http://www.nhbr.com/ ", name: "NH Business Review" }
    ];

    var vermont = [
        { news: "http://geo.craigslist.org/iso/us/vt/", name: "Craigslist Vermont" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.burlingtonfreepress.com/", name: "Burlington Free Press" },
        { news: "http://www.wcax.com/", name: "WCAX" },
        { news: "http://rutlandherald.com/", name: "Rutland Herald" },
        { news: "http://www.wptz.com/", name: "VPTZ 5" },
        { news: "http://www.benningtonbanner.com/", name: "Bennington Banner" },
        { news: "http://timesargus.com/", name: "Times Argus" },
        { news: "http://www.vttoday.com/", name: "Vermont Today" },
        { news: "http://www.7dvt.com/", name: "Seven Days" },
        { news: "http://www.reformer.com/", name: "Brattleboro Reformer" },
        { news: "http://caledonianrecord.com/", name: "The Caledonian Record" },
        { news: "http://www.vnews.com/", name: "Valley News Hartford" },
        { news: "http://digital.vpr.net/#stream/0", name: "Vermont Public Radio" },
        { news: "https://vtdigger.org/", name: "VTDigger" }
    ];

    var newYork = [
        { news: "http://geo.craigslist.org/iso/us/ny/", name: "Craigslist New York" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.nytimes.com/", name: "The New York Times" },
        { news: "http://europe.wsj.com/home-page/", name: "The Wall Street Journal" },
        { news: "http://www.nydailynews.com/", name: "New York Daily News" },
        { news: "http://www.nypost.com/", name: "New York Post" },
        { news: "http://newyork.cbslocal.com/", name: "CBS New York" },
        { news: "http://www.newsday.com/", name: "Newsday" },
        { news: "http://www.timesunion.com/", name: "TimesUnion.com" },
        { news: "http://www.syracuse.com/", name: "Syracuse.com" },
        { news: "http://www.localsyr.com/home/", name: "ABC 9" },
        { news: "http://online.barrons.com/home-page/", name: "Barron’s" },
        { news: "http://nymag.com/", name: "New York Magazine" },
        { news: "http://www.buffalonews.com/", name: "The Buffalo News" },
        { news: "http://www.democratandchronicle.com/", name: "Democrat & Chronicle" },
        { news: "http://www.silive.com/", name: "Staten Island live" },
        { news: "http://www.ny1.com", name: "NY1 News" },
        { news: "http://www.whec.com/", name: "WHEC" },
        { news: "http://poststar.com/", name: "Post Star" },
        { news: "http://www.wkbw.com/", name: "WKBW 7 ABC" },
        { news: "http://northcountrynow.com/", name: "North Country Now" }
    ];

    var pennsylvania = [
        { news: "http://geo.craigslist.org/iso/us/pa/", name: "Craigslist Pennsylvania" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.philly.com/", name: "Philly Inquirer" },
        { news: "http://www.post-gazette.com/", name: "Pittsburgh Post-Gazette" },
        { news: "http://triblive.com/", name: "Pittsburgh Tribune-Review" },
        { news: "http://www.pennlive.com/", name: "The Patriot-News" },
        { news: "http://www.lehighvalleylive.com/", name: "Lehigh Valley Live" },
        { news: "http://readingeagle.com/", name: "Reading Eagle Newspaper" },
        { news: "http://www.mcall.com/", name: "The Morning Call" },
        { news: "http://lancasteronline.com/", name: "Lancaster Online" },
        { news: "http://www.timesonline.com/", name: "Times Online" },
        { news: "http://goerie.com/", name: "GoErie.com" },
        { news: "http://www.wpxi.com/", name: "WPXI" },
        { news: "http://www.phillymag.com/", name: "Philadelphia" },
        { news: "http://www.wfmz.com/", name: "WFMZ 69 News" },
        { news: "http://www.thederrick.com/", name: "The Derrick" },
        { news: "https://www.indianagazette.com/", name: "Indiana Gazette" }
    ];

    var michigan = [
        { news: "http://geo.craigslist.org/iso/us/mi/", name: "Craigslist Michigan" },
        { news: "http://www.ebay.com/", name: "ebay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.mlive.com/", name: "MLive.com" },
        { news: "http://www.freep.com/", name: "Detroit Free Press" },
        { news: "http://www.clickondetroit.com/", name: "WDIV Local 4" },
        { news: "http://www.detroitnews.com/", name: "The Detroit News" },
        { news: "http://annarbor.com/", name: "Ann Arbor News" },
        { news: "http://www.wxyz.com/", name: "WXYZ 7 ABC" },
        { news: "http://msn.foxsports.com/detroit/", name: "FOX Sports" },
        { news: "http://www.lansingstatejournal.com/", name: "Lansing State Journal" },
        { news: "http://www.wzzm13.com/", name: "WZZM 13 ABC" },
        { news: "http://woodtv.com/", name: "Wood 8" },
        { news: "http://www.myfoxdetroit.com/", name: "FOX 2 Detroit" },
        { news: "http://www.themorningsun.com/", name: "The Morning Sun" },
        { news: "http://www.wnem.com/", name: "5 WNEM" },
        { news: "http://www.macombdaily.com/", name: "The Macomb Daily" },
        { news: "http://theoaklandpress.com/", name: "The Oakland Press" },
        { news: "http://www.autonews.com/", name: "Automotive News" },
        { news: "http://fox17online.com/", name: "Fox 17" },
        { news: "http://www.thedailyreporter.com/", name: "Coldwater Daily" },
        { news: "http://www.hollandsentinel.com/", name: "Holland Sentinel" }
    ];

    var indiana = [
        { news: "http://geo.craigslist.org/iso/us/in/", name: "Craigslist Indiana" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.indystar.com/", name: "Indianapolis Star" },
        { news: "http://www.wthr.com/", name: "WTHR 13" },
        { news: "http://www.nwitimes.com/", name: " NWITimes" },
        { news: "http://www.courierpress.com/", name: "Evansville Courier & Press" },
        { news: "http://www.thestarpress.com/", name: "The Star Press" },
        { news: "http://www.theindychannel.com/", name: "RTV 6 ABC" },
        { news: "http://www.southbendtribune.com/", name: "South Bend Tribune" },
        { news: "http://ndnation.com/", name: "NDNation" },
        { news: "http://www.wsbt.com/", name: "WSBT 22" },
        { news: "http://wishtv.com/", name: "WISH TV 8" },
        { news: "http://notredame.rivals.com/", name: "Irich Illustrated" },
        { news: "http://www.jconline.com/", name: "Journal & Courier" },
        { news: "http://www.heraldtimesonline.com/", name: "Bloomington Herald Times" },
        { news: "http://www.pal-item.com/", name: "Palladium Item" },
        { news: "http://www.kokomotribune.com/", name: "Kokomo Tribune" },
        { news: "http://fox59.com/", name: "Fox 59" },
        { news: "http://www.wndu.com/", name: "WNDU 16 NBC" },
        { news: "http://wane.com/", name: "WANE" }
    ];

    var ohio = [
        { news: "http://geo.craigslist.org/iso/us/oh/", name: "Craigslist Ohio" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.dispatch.com/", name: "The Columbus Dispatch" },
        { news: "http://www.cleveland.com/", name: "Cleveland OH Local News" },
        { news: "http://news.cincinnati.com/", name: "Cincinnati.com" },
        { news: "http://www.daytondailynews.com/", name: "Daytona Daily News" },
        { news: "http://www.whio.com/", name: "WHIO" },
        { news: "http://www.newsnet5.com/", name: "WEWS 5 ABC" },
        { news: "http://fox8.com/", name: "FOX 8" },
        { news: "http://www.10tv.com/", name: "WBNS 10" },
        { news: "http://www.cantonrep.com/", name: "Canton Repository" },
        { news: "http://www.ohio.com/", name: "Akron Beacon Journal" },
        { news: "http://www.mansfieldnewsjournal.com/", name: "Mansfield News Journal" },
        { news: "http://www.newarkadvocate.com/", name: "Newark Advocate" },
        { news: "http://nbc4i.com/", name: "NBC 4" },
        { news: "http://www.wcpo.com/", name: "WCPO 9ABC" },
        { news: "http://www.wkyc.com/", name: "WKYC 3 NBC" },
        { news: "http://www.toledoblade.com/", name: "The Blade" },
        { news: "http://www.timesreporter.com/", name: "Times Report" },
        { news: "http://www.fox19.com/", name: "Fox 19" }
    ];

    var wVirginia = [
        { news: "http://geo.craigslist.org/iso/us/wv/", name: "Craigslist West Virginia" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.wvgazette.com/", name: "The Charleston Gazette" },
        { news: "http://www.herald-dispatch.com/", name: "The Herald-Dispatch" },
        { news: "http://www.dailymail.com/", name: "Charleston Daily Mail" },
        { news: "http://www.wsaz.com/", name: "WSAZ 3" },
        { news: "http://www.register-herald.com/", name: "The Register-Herald" },
        { news: "http://www.wchstv.com/", name: "WCHS 8 ABC" },
        { news: "http://bdtonline.com/", name: "Bluefield Daily Telegraph" },
        { news: "http://mariettatimes.com/", name: "Marietta Times" },
        { news: "http://westvirginia.rivals.com/", name: "WV Sports" },
        { news: "http://journal-news.net/", name: "The Journal News" },
        { news: "http://newsandsentinel.com/", name: "News and Sentinel" },
        { news: "http://crooksandliars.com/", name: "Crooks and Liars" },
        { news: "http://wvmetronews.com/", name: "WV Metro News" },
        { news: "http://www.thenewscenter.tv/", name: "The News Center" },
        { news: "http://www.wvva.com/", name: "WVVA NBC" },
        { news: "http://www.wdtv.com/", name: "WDTV CBS 5" }
    ];

    var virginia = [
        { news: "http://geo.craigslist.org/iso/us/va/", name: "Craigslist Virginia" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.timesdispatch.com/", name: "Richmond Times Dispatch" },
        { news: "http://hamptonroads.com/", name: "Hampton Roads" },
        { news: "http://www.roanoke.com/", name: "The Roanoke Times" },
        { news: "http://www.dailypress.com/", name: "Daily Press" },
        { news: "http://fredericksburg.com/", name: "Fredericksburg" },
        { news: "http://www.wdbj7.com/", name: "WDBJ 7" },
        { news: "http://pilotonline.com/", name: "The Virginia Pilot" },
        { news: "http://www.nbc12.com/", name: "NBC 12" },
        { news: "http://wavy.com/", name: "WAVY 10" },
        { news: "http://www.tricities.com/", name: "TriCity" },
        { news: "http://www.newsadvance.com/", name: "The News & Advance" },
        { news: "http://www.insidenova.com/", name: "Inside Nova" },
        { news: "http://www.richmond.com/", name: "Richmond Times" },
        { news: "http://wtvr.com/", name: "CBS 6" },
        { news: "http://www.dailyprogress.com/", name: "The Daily Progress" },
        { news: "http://www.heraldcourier.com/", name: "Bristol Herald Courier" },
        { news: "http://www.newsleader.com/", name: "News Leader Staunton" },
        { news: "https://www.theobjectivestandard.com/", name: "Objective Standard Glen Allen" }
    ];

    var nCarolina = [
        { news: "http://geo.craigslist.org/iso/us/nc/", name: "Craigslist North Carolina" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.wral.com/", name: "WRAL" },
        { news: "http://www.charlotteobserver.com/", name: "Charlotte Observer" },
        { news: "http://www.newsobserver.com/", name: "The News & Observer" },
        { news: "http://www.starnewsonline.com/", name: "Star News Online" },
        { news: "http://www.wsoctv.com/", name: "WSOC 9" },
        { news: "http://www.citizen-times.com/", name: "Ashville Citizen-Times" },
        { news: "http://myfox8.com/", name: "FOX 8 WGHP" },
        { news: "http://www.news-record.com/", name: "News-Record" },
        { news: "http://www.hickoryrecord.com/independent_tribune/", name: "Independent Tribune" },
        { news: "http://www.journalnow.com/", name: "Winston-Salem Journal" },
        { news: "http://fayobserver.com/", name: "Fay Observer" },
        { news: "http://northcarolina.scout.com/", name: "Inside Carolina" },
        { news: "http://www.wxii12.com/", name: "WXII 12 NBC" },
        { news: "http://www.thetimesnews.com/", name: "The Times News" },
        { news: "http://www.gastongazette.com/", name: "Gaston Gazette" },
        { news: "http://www.wbtv.com/", name: "WCTV 3 CBS" },
        { news: "http://www.the-dispatch.com/", name: "The Dispatch" },
        { news: "http://www.wcnc.com/", name: "WCNC" }
    ];

    var sCarolina = [
        { news: "http://geo.craigslist.org/iso/us/sc/", name: "Craigslist South Carolina" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.myrtlebeachonline.com/", name: "Sun News Myrtle Beach" },
        { news: "http://www.wistv.com/", name: "WISTV 10" },
        { news: "http://www.thestate.com/", name: "The State" },
        { news: "http://www.postandcourier.com/", name: "The Post and Courier" },
        { news: "http://www.wltx.com/", name: "WLTX 19" },
        { news: "http://www.goupstate.com/", name: "Spartanburg Herald Journal" },
        { news: "http://www.wyff4.com/", name: "WYFF 4 NBC" },
        { news: "http://www.heraldonline.com/", name: "The Herald Online" },
        { news: "http://www.greenvilleonline.com/", name: "The Greenville News" },
        { news: "http://southcarolina.rivals.com/", name: "Gamecock Central" },
        { news: "http://thetandd.com/", name: "The Times and Democrat" },
        { news: "http://www.scnow.com/", name: "SCNow.com" },
        { news: "http://www.wspa.com/", name: "WSPA 7 CBS" },
        { news: "http://abcnews4.com/", name: "ABC News 4" },
        { news: "http://www.foxcarolina.com/", name: "FOX Carolina 21" },
        { news: "http://www.live5news.com/", name: "WCSC 5 CBS" },
        { news: "http://www.indexjournal.com/", name: "Index Journal" },
        { news: "https://www.fitsnews.com/", name: "FITSNews" }
    ];

    var florida = [
        { news: "http://geo.craigslist.org/iso/us/fl/", name: "Craigslist Florida" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.sun-sentinel.com/", name: "South Florida Sun Sentinel" },
        { news: "http://www.miamiherald.com/", name: "The Miami Herald" },
        { news: "http://jacksonville.com/", name: "Jacksonville Florida Times" },
        { news: "http://www.news4jax.com/", name: "News 4 Jax" },
        { news: "http://www.baynews9.com/", name: "Bay News 9" },
        { news: "http://www.tampabay.com/", name: "Tampa Bay Times" },
        { news: "http://www.wftv.com/", name: "WFTV 9" },
        { news: "http://www.orlandosentinel.com/", name: "Orlando Sentinel" },
        { news: "http://www.pnj.com/", name: "Pensacola News Journal" },
        { news: "http://www.palmbeachpost.com/", name: "The Palm Beach Post" },
        { news: "http://tbo.com/", name: "Tampa Bay Tribune" },
        { news: "http://www.elnuevoherald.com/", name: "El Nuevo Herald" },
        { news: "http://www.miaminewtimes.com/", name: "Miami New Times" },
        { news: "http://www.heraldtribune.com/", name: "Sarasota Herald-Tribune" },
        { news: "http://wsvn.com/", name: "7 News Miami" },
        { news: "http://www.diariolasamericas.com/", name: "Diario Las Americas" },
        { news: "http://www.newsherald.com/", name: "Panama City News Herald" },
        { news: "http://www.nwfdailynews.com/", name: "NWF Daily News" }
    ];

    var georgia = [
        { news: "http://geo.craigslist.org/iso/us/ga/", name: "Craigslist Georgia" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.ajc.com/", name: "Atlanta Journal-Constitution" },
        { news: "http://www.macon.com/", name: "The Macon Telegraph" },
        { news: "http://onlineathens.com/", name: "Online Athens" },
        { news: "http://www.wsbtv.com/", name: "WSBTV 2" },
        { news: "http://chronicle.augusta.com/", name: "The Augusta Chronicle" },
        { news: "http://www.accessatlanta.com/", name: "Access Atlanta" },
        { news: "http://savannahnow.com/", name: "Savannah Morning News" },
        { news: "http://www.ledger-enquirer.com/", name: "Ledger Enquirer" },
        { news: "http://www.11alive.com/", name: "WXIA 11 Alive" },
        { news: "http://www.gainesvilletimes.com/", name: "Gainesville Times" },
        { news: "http://www.times-herald.com/", name: "Times Herald" },
        { news: "http://www.myfoxatlanta.com/", name: "Fox 5" },
        { news: "http://atlantablackstar.com/", name: "Atlanta Black Star" },
        { news: "https://mundohispanico.com/", name: "Mundo Hispanico" },
        { news: "http://sandrarose.com/", name: "Sandra Rose" },
        { news: "http://www.wsbradio.com/", name: "News 95.5" },
        { news: "http://www.13wmaz.com/", name: "13 WMAZ" },
        { news: "http://www.atlantamagazine.com/", name: "Atlanta Magazine" }
    ];

    var alabama = [
        { news: "http://geo.craigslist.org/iso/us/al/", name: "Craigslist Alabama" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.al.com/", name: "Alabama Local News" },
        { news: "http://www.montgomeryadvertiser.com/", name: "Montgomery Advertiser" },
        { news: "http://www.wsfa.com/", name: "WSFA 12 News" },
        { news: "http://www.tuscaloosanews.com/", name: "Tuscaloosa News" },
        { news: "http://timesdaily.com/", name: "Times Daily" },
        { news: "http://whnt.com/", name: "WHNT News 19" },
        { news: "http://www.gadsdentimes.com/", name: "The Gadsden Times" },
        { news: "http://www.myfoxal.com/", name: "FOX 6 WBRC" },
        { news: "http://www.dothaneagle.com/", name: "Dothan Eagle" },
        { news: "http://alabama.rivals.com/", name: "Tide Sports" },
        { news: "http://annistonstar.com/", name: "The Anniston Star" },
        { news: "http://www.al.com/birmingham/", name: "Birmingham News" },
        { news: "http://www.southernliving.com/", name: "Southern Living" },
        { news: "http://abc3340.com/", name: "ABC 33/40" },
        { news: "http://www.waff.com/", name: "48 WAFF" },
        { news: "http://wkrg.com/", name: "WKRG New 5" },
        { news: "http://www.oanow.com/", name: "Opelika Daily" },
        { news: "http://www.decaturdaily.com/", name: "Decatur Daily" }
    ];

    var mississippi = [
        { news: "http://geo.craigslist.org/iso/us/ms/", name: "Craigslist Mississippi" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.clarionledger.com/", name: "The Clarion Ledger" },
        { news: "http://www.sunherald.com/", name: "Sun Herald" },
        { news: "http://www.natchezdemocrat.com/", name: "Natchez Democrat" },
        { news: "http://djournal.com/", name: "Northeast Mississippi Daily Journal" },
        { news: "http://www.msnewsnow.com/", name: "MS News Now" },
        { news: "http://www.hattiesburgamerican.com/", name: "Hattiesburg American" },
        { news: "http://www.dnj.com/", name: "The Daily News Journal" },
        { news: "http://www.gulflive.com/", name: "Gulf Live" },
        { news: "http://www.wapt.com/", name: "WAPT 16" },
        { news: "http://www.wtva.com/", name: "WTVA" },
        { news: "http://meridianstar.com/", name: "The Meridian Star" },
        { news: "http://mississippistate.scout.com/", name: "Gene’s Page" },
        { news: "http://djournal.com/", name: "NM Daily Journal" },
        { news: "http://www.wdam.com/", name: "WDAM 7" },
        { news: "http://wjtv.com/", name: "WJTV 12" },
        { news: "http://www.oxfordeagle.com/", name: "The Oxford Eagle" },
        { news: "http://www.cdispatch.com/", name: "Columbus Dispatch" },
        { news: "http://www.jacksonfreepress.com/", name: "Jackson Free Press" }
    ];

    var tennessee = [
        { news: "http://geo.craigslist.org/iso/us/tn/", name: "Craigslist Tennessee" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.tennessean.com/", name: "Tennessean" },
        { news: "http://www.timesfreepress.com/", name: "Chattanooga News" },
        { news: "http://www.commercialappeal.com/", name: "The Commercial Appeal" },
        { news: "http://chattanoogan.com/Breaking-News/", name: "The Chattanoogan" },
        { news: "http://www.knoxnews.com/", name: "Knoxville News Sentinel" },
        { news: "http://www.wbir.com/", name: "WBIR 10 NBC" },
        { news: "http://www.newschannel5.com/", name: "News Channel 5" },
        { news: "http://www.dnj.com/", name: "The Daily News Journal" },
        { news: "http://www.wsmv.com/", name: "WSMV Channel 4" },
        { news: "http://www.theleafchronicle.com/", name: "The Leaf Chronicle" },
        { news: "http://www.govolsxtra.com/", name: "GoVolsXtra" },
        { news: "http://www.memphisflyer.com/", name: "Memphis Flyer" },
        { news: "http://www.tricities.com/", name: "TriCities" },
        { news: "http://www.wkrn.com/", name: "WKRN 2 ABC" },
        { news: "http://www.wate.com/", name: "WATE 6 ABC" },
        { news: "http://www.nashvillescene.com/", name: "Nashville Scene" },
        { news: "http://www.local8now.com/", name: "Local 8 Now" },
        { news: "http://www.oakridger.com/", name: "Oakridger" }
    ];

    var kentucky = [
        { news: "http://geo.craigslist.org/iso/us/ky/", name: "Craigslist Kentucky" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.courier-journal.com/", name: "Louisville CJ" },
        { news: "http://www.kentucky.com/", name: "Lexington Kentucky" },
        { news: "http://www.courierpress.com/", name: "Evansville Courier & Press" },
        { news: "http://paducahsun.com/", name: "The Paducah Sun" },
        { news: "http://www.lex18.com", name: "Lex 18 NBC" },
        { news: "http://www.centralkynews.com/", name: "Central Kentucky News" },
        { news: "http://www.bgdailynews.com/", name: "Bowling Green Daily News" },
        { news: "http://www.wkyt.com/", name: "WKYT CBS" },
        { news: "http://westkentuckystar.com/", name: "West Kentucky Star" },
        { news: "http://kentucky.rivals.com/", name: "Kentucky Wildcats" },
        { news: "http://www.whas11.com/", name: "WHAS 11" },
        { news: "http://www.wbko.com/", name: "WBKO" },
        { news: "http://www.wave3.com/", name: "WAVE 3 NBC" },
        { news: "http://www.wdrb.com/", name: "WDRB 41 Louisville" },
        { news: "http://www.fox19.com/", name: "FOX 19" },
        { news: "http://www.wsaz.com/", name: "WSAZ 3" },
        { news: "http://www.wlky.com/", name: "WLKY 32 CBS" },
        { news: "http://www.bgdailynews.com/", name: "Bowling Green News" }
    ];

    var illinois = [
        { news: "http://geo.craigslist.org/iso/us/il/", name: "Craigslist Illinois" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.chicagotribune.com/", name: "Chicago Tribune" },
        { news: "http://www.suntimes.com/", name: "Chicago Sun-Times" },
        { news: "http://www.nbcchicago.com/", name: "NBC Chicago" },
        { news: "http://www.sj-r.com/", name: "State Journal-Register" },
        { news: "http://qctimes.com/", name: "Quad-City Times" },
        { news: "http://wgntv.com/", name: "WGN TV" },
        { news: "http://www.bnd.com/", name: "Belleville News Democrat" },
        { news: "http://www.dailyherald.com/", name: "Chicago Daily Herald" },
        { news: "http://www.chicagonow.com/", name: "Chicago Now" },
        { news: "http://www.pantagraph.com/", name: "Pantagraph" },
        { news: "http://www.pjstar.com/", name: "Peoria Journal Star" },
        { news: "http://www.chicagobusiness.com/", name: "Crain’s Business" },
        { news: "http://www.rrstar.com/", name: "Rockford Register" },
        { news: "http://www.csnchicago.com/", name: "CSN Chicago" },
        { news: "http://abc7chicago.com/", name: "ABC 7 Chicago" },
        { news: "http://www.nwherald.com/ ", name: "NW Herald" },
        { news: "http://www.pantagraph.com/", name: "The Pantagraph" },
        { news: "http://chicagoist.com/ ", name: "Chicagoist" }
    ];

    var wisconsin = [
        { news: "http://geo.craigslist.org/iso/us/wi/", name: "Craigslist Wisconsin" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.jsonline.com/", name: "Milwaukee Wisconsin Journal" },
        { news: "http://host.madison.com/", name: "Madison" },
        { news: "http://www.greenbaypressgazette.com/", name: "Green Bay Press-Gazette" },
        { news: "http://lacrossetribune.com/", name: "La Cross Tribune" },
        { news: "http://www.riverfallsjournal.com/", name: "River Falls Journal" },
        { news: "http://www.channel3000.com/", name: "Channel 3000" },
        { news: "http://fox11online.com/", name: "FOX 11" },
        { news: "http://www.packersnews.com/", name: "Packers News" },
        { news: "http://host.madison.com/wsj/", name: "Wisconsin State Journal" },
        { news: "http://www.sheboyganpress.com/", name: "Sheboygan Press" },
        { news: "http://www.postcrescent.com/", name: "Post Crescent" },
        { news: "http://www.todaystmj4.com/", name: "TMJ 4 NBC" },
        { news: "http://fox6now.com/", name: "FOX 6 Now" },
        { news: "http://www.wisn.com/", name: "WISN 12 ABC" },
        { news: "http://www.wbay.com/", name: "WBAY 2 ABC" },
        { news: "http://www.nbc15.com/", name: "WMTV 15 NBC" },
        { news: "http://www.postcrescent.com/", name: "Appleton Post-Crescent" },
        { news: "http://www.news8000.com/", name: "News8000" }
    ];

    var minnesota = [
        { news: "http://geo.craigslist.org/iso/us/mn/", name: "Craigslist Minnesota" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.startribune.com/", name: "Star Tribune" },
        { news: "http://www.duluthnewstribune.com/", name: "Duluth News Tribune" },
        { news: "http://kstp.com/", name: "Eyewitness 5 News" },
        { news: "http://www.kare11.com/", name: "KARE 11 NBC" },
        { news: "http://www.twincities.com/", name: "Twin Cities Pioneer Press" },
        { news: "http://www.sctimes.com/", name: "St. Cloud Times" },
        { news: "http://www.myfoxtwincities.com/", name: "FOX 9 Twin City" },
        { news: "http://www.postbulletin.com/", name: "Post Bulletin" },
        { news: "http://www.kttc.com/", name: "KTTC" },
        { news: "http://www.winonadailynews.com/", name: "Winona Daily News" },
        { news: "http://www.citypages.com/", name: "City Pages" },
        { news: "http://brainerddispatch.com/", name: "Brainerd Dispatch" },
        { news: "http://www.southernminn.com/", name: "SouthernMinn" },
        { news: "http://www.zehabesha.com/", name: "Zehabesha" },
        { news: "http://www.wctrib.com/", name: "West Central Tribune" },
        { news: "http://www.mankatofreepress.com/", name: "Mankato Free Press" }
    ];

    var iowa = [
        { news: "http://geo.craigslist.org/iso/us/ia/", name: "Craigslist Iowa" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.desmoinesregister.com/", name: "Des Moines Register" },
        { news: "http://qctimes.com/", name: "Quad-City Times" },
        { news: "http://www.kcci.com/", name: "KCCI 8" },
        { news: "http://www.kcrg.com/", name: "KCRG 9 ABC" },
        { news: "http://thegazette.com/", name: "The Gazette" },
        { news: "http://siouxcityjournal.com/", name: "Sioux City Journal" },
        { news: "http://iowa.rivals.com/", name: "Iowa Hawkeyes" },
        { news: "http://www.press-citizen.com/", name: "Iowa City Press Citizen" },
        { news: "http://whotv.com/", name: "WHO 13 NBC" },
        { news: "http://wcfcourier.com/", name: "Waterloo Courier" },
        { news: "http://www.kwwl.com/", name: "KWWL" },
        { news: "http://globegazette.com/", name: "Globe Gazette" },
        { news: "http://www.ktiv.com/", name: "KTIV 4 NBC" },
        { news: "http://www.amestrib.com/", name: "Ames Tribune" },
        { news: "http://wqad.com/", name: "WCAD 8" },
        { news: "http://www.newtondailynews.com/", name: "Newton Daily News" },
        { news: "http://www.thehawkeye.com/", name: "The Hawk Eye" },
        { news: "http://www.ktiv.com/", name: "Siouxland’s News" }
    ];

    var missouri = [
        { news: "http://geo.craigslist.org/iso/us/mo/", name: "Craigslist Missouri" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.stltoday.com/", name: "St. Louis Post-Dispatch" },
        { news: "http://www.ksdk.com/", name: "KSDK 5" },
        { news: "http://www.news-leader.com/", name: "Springfield News Leader" },
        { news: "http://www.kmov.com/", name: "KMOV 4" },
        { news: "http://www.columbiatribune.com/", name: "Columbia Daily Tribune" },
        { news: "http://fox2now.com/", name: "FOX 2" },
        { news: "http://www.kansascity.com/", name: "Kansas City Star" },
        { news: "http://semissourian.com/", name: "Southeast Missourian" },
        { news: "http://www.ky3.com/", name: "KY3" },
        { news: "http://www.newspressnow.com/", name: "St. Joseph News-Press Now" },
        { news: "http://www.newstribune.com/", name: "News Tribune" },
        { news: "http://www.joplinglobe.com/", name: "The Joplin Globe" },
        { news: "http://fox4kc.com/", name: "FOX 4 News" },
        { news: "http://www.kshb.com/", name: "41 Action News" },
        { news: "http://www.riverfronttimes.com/", name: "River Front Times" },
        { news: "http://www.abc17news.com/", name: "ABC 17 News" },
        { news: "http://www.hannibal.net/", name: "Hannibal CP" }
    ];

    var arkansas = [
        { news: "http://geo.craigslist.org/iso/us/ar/", name: "Craigslist Arkansas" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.arkansasonline.com/", name: "Arkansas Online" },
        { news: "http://swtimes.com/", name: "The Times Record" },
        { news: "http://www.thv11.com/", name: "THV 11" },
        { news: "http://www.nwaonline.com/", name: "Northwest Arkansas Times" },
        { news: "http://www.baxterbulletin.com/", name: "Baxter Bulletin" },
        { news: "http://5newsonline.com/", name: "CBS 5 News" },
        { news: "http://jonesborosun.com/", name: "Jonesboro Sun" },
        { news: "http://www.katv.com/", name: "KATV 7 ABC" },
        { news: "http://harrisondaily.com/", name: "Harrison Daily" },
        { news: "http://www.fox16.com/", name: "FOX 16" },
        { news: "http://www.arkansasbusiness.com/", name: "Arkansas Business" },
        { news: "http://www.arkansasmatters.com/", name: "Arkansas Matters" },
        { news: "http://www.kait8.com/", name: "KAIT 8 ABC" },
        { news: "http://www.4029tv.com/", name: "NW Arkansas 40/29 News" },
        { news: "https://www.arktimes.com/", name: "Arkansas Times" },
        { news: "http://www.swtimes.com/", name: "Fort Smith Times Record" },
        { news: "http://www.pbcommercial.com/", name: "Pine Bluff Commercial" },
        { news: "http://www.whitehalljournal.com/", name: "White Hall Journal" }
    ];

    var louisiana = [
        { news: "http://geo.craigslist.org/iso/us/la/", name: "Craigslist Louisiana" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.nola.com/", name: "Picayune Time" },
        { news: "http://theadvocate.com/", name: "The Advocate" },
        { news: "http://www.wafb.com/", name: "WAFB 9" },
        { news: "http://www.houmatoday.com/", name: "Houma Today" },
        { news: "http://www.wwltv.com/", name: "4 WWLTV" },
        { news: "http://www.thenewsstar.com/", name: "The News Star" },
        { news: "http://www.katc.com/", name: "KATC 3" },
        { news: "http://www.thetowntalk.com/", name: "The Town Talk" },
        { news: "http://www.wdsu.com/", name: "WDSU 6 NBC" },
        { news: "http://www.shreveporttimes.com/", name: "Shreveport Times" },
        { news: "http://www.fox8live.com/", name: "FOX 8" },
        { news: "http://www.theadvertiser.com/", name: "The Advertiser" },
        { news: "http://www.tigerdroppings.com/", name: "Tiger Droppings" },
        { news: "https://www.businessreport.com/", name: "Business Report Baton Rouge" },
        { news: "http://www.rigzone.com/", name: "Rigzone" },
        { news: "http://www.ksla.com/ ", name: "KSLA 12 News" },
        { news: "http://www.dailycomet.com/ ", name: "Thibodaux Daily" }
    ];

    var texas = [
        { news: "http://geo.craigslist.org/iso/us/tx/", name: "Craigslist Texas" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.chron.com/", name: "Huston Chronicle" },
        { news: "http://www.dallasnews.com/", name: "The Dallas Morning News" },
        { news: "http://www.mysanantonio.com/", name: "San Antonio Express-News" },
        { news: "http://www.khou.com/", name: "KHOU" },
        { news: "http://www.statesman.com/", name: "Austin American-Statesman" },
        { news: "http://www.click2houston.com/", name: "Click2Houston" },
        { news: "http://www.star-telegram.com/", name: "Star-Telegram" },
        { news: "http://www.wfaa.com/", name: "WFAA" },
        { news: "http://lubbockonline.com/", name: "Lubbock Avalanche-Journal" },
        { news: "http://www.caller.com/", name: "Corpus Christi Caller-Times" },
        { news: "http://elhispanonews.com/", name: "El Hispano News" },
        { news: "http://www.nbcdfw.com/", name: "NBC 5 DFW" },
        { news: "http://www.elpasotimes.com/", name: "El Paso Times" },
        { news: "http://amarillo.com/", name: "Amarillo Globe-News" },
        { news: "http://www.kvue.com/", name: "KVUE ABC" },
        { news: "http://abc13.com/", name: "Huston ABC 13" },
        { news: "http://www.wfaa.com/", name: "Dallas ABC 8" },
        { news: "http://kxan.com/", name: "Austin KXAN" },
        { news: "http://www.yourstephenvilletx.com/", name: "Stephenville Empire-Tribune" },
        { news: "http://www.lmtonline.com/", name: "Laredo Morning Time" }
    ];

    var oklahoma = [
        { news: "http://geo.craigslist.org/iso/us/ok/", name: "Craigslist Oklahoma" },
        { news: "http://www.ebayclassifieds.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.tulsaworld.com/", name: "Tulsa World" },
        { news: "http://enidnews.com/", name: "Enid News and Eagle" },
        { news: "http://normantranscript.com/", name: "The Norman Transcript" },
        { news: "http://newsok.com/", name: "NewsOK" },
        { news: "http://www.swoknews.com/", name: "The Lawton Constitution" },
        { news: "http://www.news9.com/", name: "News 9" },
        { news: "http://www.ktul.com/", name: "Tulsa 8 ABC" },
        { news: "http://www.ardmoreite.com/", name: "Daily Ardmoreite" },
        { news: "http://www.koco.com/", name: " KOCO News 5" },
        { news: "http://kfor.com/", name: "NewsChannel4" },
        { news: "http://www.fox23.com/", name: "FOX 23" },
        { news: "http://www.news-star.com/", name: "The Shawnee News" },
        { news: "http://www.kxii.com/", name: "Texoma News FOX 12" },
        { news: "http://www.kjrh.com/", name: "Tulsa KJRH" },
        { news: "http://www.kswo.com/", name: "Lawton 7 ABC" },
        { news: "http://www.examiner-enterprise.com/", name: "Bartlesville Examiner" },
        { news: "http://www.stwnewspress.com/", name: "Stillwater News Press" },
        { news: "http://www.normantranscript.com/ ", name: "Norman Transcript" }
    ];

    var kansas = [
        { news: "http://geo.craigslist.org/iso/us/ks/", name: "Craigslist Kansas" },
        { news: "http://www.ebay.com/", name: "ebay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.kansascity.com/", name: "The Kansas City Star" },
        { news: "http://cjonline.com/", name: "The Topeka CJ" },
        { news: "http://www.kansas.com/", name: "The Wichita Eagle" },
        { news: "http://www2.ljworld.com/", name: "Lawrence Journal World" },
        { news: "http://www.morningsun.net/", name: "Morning Sun" },
        { news: "http://www.kake.com/", name: "KAKE" },
        { news: "http://www.salina.com/", name: "Salina Journal" },
        { news: "http://www.hutchnews.com/", name: "Hutchinson News" },
        { news: "http://ksn.com/", name: "KSN TV" },
        { news: "http://kansasstate.rivals.com/", name: "Go Powercat" },
        { news: "http://www.kwch.com/", name: "Eyewitness News 1" },
        { news: "http://www.kmbc.com/", name: "KMBC 9" },
        { news: "http://www.kctv5.com/", name: "KCTV 5 News" },
        { news: "http://www.morningsun.net/", name: "Morning Sun Pittsburg" },
        { news: "http://www.thekansan.com/", name: "KANSAN Newton" },
        { news: "http://www.koamtv.com/", name: "KOAM TV Joplin" },
        { news: "http://www.ottawaherald.com/", name: "Ottawa Herald" },
        { news: "http://www.wellingtondailynews.com/", name: "Wellington Daily" }
    ];

    var nDakota = [
        { news: "http://geo.craigslist.org/iso/us/nd/", name: "Craigslist North Dakota" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.inforum.com/", name: "Inforum" },
        { news: "http://www.startribune.com/", name: "Star Tribune" },
        { news: "http://www.valleynewslive.com/", name: "Valley News" },
        { news: "http://bismarcktribune.com/", name: "The Bismarck Tribune" },
        { news: "http://www.duluthnewstribune.com/", name: "Duluth News" },
        { news: "http://www.grandforksherald.com/", name: "Grand Forks Herald" },
        { news: "http://www.thedickinsonpress.com/", name: "The Dickinson Press" },
        { news: "http://www.jamestownsun.com/", name: "The Jamestown Sun" },
        { news: "http://www.wday.com/", name: "WDAY 6 ABC" },
        { news: "http://www.valleynewslive.com/", name: "Red River Valley News" },
        { news: "http://www.kfyrtv.com/", name: "KFYR Bismarck" },
        { news: "http://www.willistonherald.com/", name: "Williston Herald" },
        { news: "http://kfgo.com/ ", name: "KFGO 790 AM" },
        { news: "http://www.devilslakejournal.com/ ", name: "Devils Lake Journal" },
        { news: "http://www.jamestownsun.com/ ", name: "Jamestown Sun" }
    ];

    var sDakota = [
        { news: "http://geo.craigslist.org/iso/us/sd/", name: "Craigslist South Dakota" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://rapidcityjournal.com/", name: "Rapid City Journal" },
        { news: "http://www.argusleader.com/", name: "Argus Leader" },
        { news: "http://www.keloland.com/", name: "Keloland" },
        { news: "http://www.ksfy.com/", name: "KSFY ABC" },
        { news: "http://www.aberdeennews.com/", name: "Aberdeen News" },
        { news: "http://www.mitchellrepublic.com/", name: "The Daily Republic" },
        { news: "http://thepublicopinion.com/", name: "Watertown Public Opinion" },
        { news: "http://www.capjournal.com/", name: "Capital Journal" },
        { news: "http://www.yankton.net/", name: "Yankton Daily" },
        { news: "http://www.kotatv.com/", name: "KOTA TV" },
        { news: "http://www.kdlt.com/", name: "KDLT Sioux Falls" },
        { news: "http://www.bhpioneer.com/", name: "Black hill Pioneer" }
    ];

    var nebraska = [
        { news: "http://geo.craigslist.org/iso/us/ne/", name: "Craigslist Nebraska" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.omaha.com/", name: "Omaha World-Herald" },
        { news: "http://journalstar.com/", name: "Lincoln Journal Star" },
        { news: "http://www.theindependent.com/", name: "The Grand Island Independent" },
        { news: "http://www.ketv.com/", name: "KETV 7 ABC" },
        { news: "http://www.yorknewstimes.com/", name: "York News-Times" },
        { news: "http://www.wowt.com/", name: "WOWT 6 Omaha" },
        { news: "http://nebraska.rivals.com/", name: "Husker Online" },
        { news: "http://www.norfolkdailynews.com/", name: "Norfolk Daily News" },
        { news: "http://www.1011now.com/", name: "Lincoln 1011 News" },
        { news: "http://fremonttribune.com/", name: "Fremont Tribune" },
        { news: "http://www.kearneyhub.com/", name: "Kearney Hub" },
        { news: "http://www.nptelegraph.com/", name: "NP Telegraph" },
        { news: "http://www.krvn.com/", name: "KRVN 880 AM" },
        { news: "http://www.hastingstribune.com/", name: "Hasting Tribune" },
        { news: "http://beatricedailysun.com/", name: "Beatrice Daily Sun" }
    ];

    var colorado = [
        { news: "http://geo.craigslist.org/iso/us/co/", name: "Craigslist Colorado" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.denverpost.com/", name: "Denver Post" },
        { news: "http://www.gazette.com/", name: "The Gazette" },
        { news: "http://www.coloradoan.com/", name: "Coloradoan" },
        { news: "http://www.9news.com/", name: "NBC 9 News" },
        { news: "http://www.dailycamera.com/", name: "Daily Camera" },
        { news: "http://www.kktv.com/", name: "KKTV 11 News" },
        { news: "http://www.thedenverchannel.com/ ", name: "ABC 7 News" },
        { news: "http://kdvr.com/", name: "FOX 31 Denver" },
        { news: "http://www.rockymountainnews.com/", name: "Rocky Mountain News" },
        { news: "http://www.krdo.com/", name: "News 13 ABC" },
        { news: "http://www.aspentimes.com/", name: "Aspen Times" },
        { news: "http://www.koaa.com/", name: "KOAA News 5" },
        { news: "http://www.westword.com/", name: "Westword Denver" },
        { news: "https://durangoherald.com/", name: "The Durango Herald" },
        { news: "http://www.postindependent.com/", name: "Glenwood Springs News" },
        { news: "http://www.chieftain.com/", name: "The Pueblo Chieftain" },
        { news: "http://www.kjct8.com/", name: "KJCT 8 ABC" },
        { news: "https://www.csindy.com/", name: "Colorado Springs Independent" }
    ];

    var newMexico = [
        { news: "http://geo.craigslist.org/iso/us/nm/", name: "Craigslist New Mexico" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.abqjournal.com/main", name: "Albuquerque Journal" },
        { news: "http://www.kob.com/", name: "KOB 4 Albuquerque" },
        { news: "http://www.elpasotimes.com/", name: "El Paso Times" },
        { news: "http://krqe.com/", name: "KRQE News 13" },
        { news: "http://www.santafenewmexican.com/", name: "Santa Fe New Mexican" },
        { news: "http://www.koat.com/", name: " KOAT 7" },
        { news: "http://www.lcsun-news.com/", name: "Las Cruces Sun News" },
        { news: "http://www.daily-times.com/", name: "Farmington Daily Times" },
        { news: "http://www.rdrnews.com/", name: "Roswell Daily Record" },
        { news: "http://www.ruidosonews.com/", name: "Ruidoso News" },
        { news: "http://www.taosnews.com/", name: "The Taos News" },
        { news: "http://www.currentargus.com/", name: "Carlsbad Current-Argus" }
    ];

    var arizona = [
        { news: "http://geo.craigslist.org/iso/us/az/", name: "Craigslist Arizona" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.azcentral.com/", name: "AZ Central" },
        { news: "http://azstarnet.com/", name: "Arizona Daily Star" },
        { news: "http://azdailysun.com/", name: "Arizona Daily Sun" },
        { news: "http://www.azfamily.com/", name: "AZ Family 3" },
        { news: "http://eastvalleytribune.com/", name: "East Valley Tribune" },
        { news: "http://www.phoenixnewtimes.com/", name: "Phoenix New Times" },
        { news: "http://www.abc15.com/", name: " ABC 15" },
        { news: "http://dcourier.com/", name: "The Daily Courier" },
        { news: "http://www.myfoxphoenix.com/", name: "FOX 10 News" },
        { news: "http://www.tucsonnewsnow.com/", name: "Tucson News" },
        { news: "http://msn.foxsports.com/arizona/", name: "FOX Sports" },
        { news: "http://www.lavozarizona.com/", name: "La Voz AZ" },
        { news: "http://www.ktar.com/", name: " KTAR News" },
        { news: "http://www.kgun9.com/", name: "KGUN 9 ABC" },
        { news: "https://kdminer.com/", name: "Kingman Daily Miner" },
        { news: "http://www.svherald.com/", name: "Sierra Vista Herald" },
        { news: "http://www.jewishaz.com/", name: "Jewish News AZ" }
    ];

    var utah = [
        { news: "http://geo.craigslist.org/iso/us/ut/", name: "Craigslist Utah" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.deseretnews.com/home/", name: "Desert News" },
        { news: "http://www.ksl.com/", name: "KSL" },
        { news: "http://www.sltrib.com/", name: "The Salt Lake Tribune" },
        { news: "http://fox13now.com/", name: "FOX 13" },
        { news: "http://www.heraldextra.com/", name: "Daily Herald" },
        { news: "http://www.kutv.com/", name: "2 KUTV" },
        { news: "http://standard.net/", name: "Standard Examiner" },
        { news: "http://www.good4utah.com/", name: "ABC 4" },
        { news: "http://www.thespectrum.com/", name: "The Spectrum" },
        { news: "http://news.hjnews.com/", name: "Herald Journal" },
        { news: "http://www.cougarfan.com/", name: "Cougar Fan" },
        { news: "http://www.parkrecord.com/", name: "Park Record" }
    ];

    var wyoming = [
        { news: "http://geo.craigslist.org/iso/us/wy/", name: "Craigslist Wyoming" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://trib.com/", name: "Casper Star-Tribune" },
        { news: "http://county10.com/", name: "County 10" },
        { news: "http://wyomingnews.com/", name: "Wyoming News" },
        { news: "http://laramieboomerang.com/", name: "Laramie Boomerang" },
        { news: "http://www.casperjournal.com/", name: "Casper Journal" },
        { news: "http://www.kgwn.tv/", name: "CBS 5" },
        { news: "http://www.sheridanmedia.com/", name: "Sheridan Media" },
        { news: "http://gillettenewsrecord.com/", name: "Gillette News Record" },
        { news: "http://www.thesheridanpress.com/", name: "The Sheridan Press" },
        { news: "https://torringtontelegram.com/", name: "Torrington Telegram" },
        { news: "http://www.codyenterprise.com/", name: "Cody Enterprise" },
        { news: "http://k2radio.com/ ", name: "K2 Radio" }
    ];

    var montana = [
        { news: "http://geo.craigslist.org/iso/us/mt/", name: "Craigslist Montana" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://billingsgazette.com/", name: "Billings Gazette" },
        { news: "http://missoulian.com/", name: "Missoulian" },
        { news: "http://www.krtv.com/", name: "KRTV 3" },
        { news: "http://www.greatfallstribune.com/", name: "Great Falls Tribune" },
        { news: "http://www.kpax.com/", name: "KPAX 8 Missoula" },
        { news: "http://helenair.com/", name: "Helena Independent Record" },
        { news: "http://mtstandard.com/", name: "The Montana Standard" },
        { news: "http://www.bozemandailychronicle.com/", name: "Bozeman Daily" },
        { news: "http://www.nbcmontana.com/", name: "NBC Montana" },
        { news: "http://www.ktvq.com/", name: "Q2 KTVQ" },
        { news: "http://www.dailyinterlake.com/", name: "Daily Inter Lake" },
        { news: "http://www.livingstonenterprise.com/ ", name: "Livingston Enterprise" },
        { news: "http://ravallirepublic.com/ ", name: "Ravalli Republic" },
        { news: "http://www.kbzk.com/ ", name: "7 KBZK" }
    ];

    var idaho = [
        { news: "http://geo.craigslist.org/iso/us/id/", name: "Craigslist Idaho" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.idahostatesman.com/", name: "Idaho Statesman" },
        { news: "http://www.ktvb.com/", name: "KTVB" },
        { news: "http://magicvalley.com/", name: "Magic Valley" },
        { news: "http://www.localnews8.com/", name: "Local News 8" },
        { news: "http://www.idahostatejournal.com/", name: "Idaho State Journal" },
        { news: "http://www.idahopress.com/", name: "Idaho Press-Tribune" },
        { news: "http://www.kmvt.com/", name: "KMVT 11" },
        { news: "http://www.postregister.com/", name: "Post Register" },
        { news: "http://lmtribune.com/", name: "The Lewiston Tribune" },
        { news: "http://www.boiseweekly.com/ ", name: "Boise Weekly " },
        { news: "http://www.khq.com/ ", name: "KHQ Q6" },
        { news: "http://www.kivitv.com/ ", name: "KIVI TV 6ABC" },
        { news: "http://www.kxly.com/ ", name: "KXLY" },
        { news: "http://www.cdapress.com/ ", name: "CDA Press" },
        { news: "http://www.bonnercountydailybee.com/ ", name: "Bonner County Daily" },
        { news: "http://dnews.com/ ", name: "Moscow-Pullman Daily" }
    ];

    var washingtonState = [
        { news: "http://seattle.craigslist.org/", name: "Craigslist Washington" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://seattletimes.com/html/home/", name: "The Seattle Times" },
        { news: "http://www.seattlepi.com/", name: "Seattle PI" },
        { news: "http://www.thenewstribune.com/", name: "The News Tribune" },
        { news: "http://www.king5.com/", name: "King 5" },
        { news: "http://www.bellinghamherald.com/", name: "The Bellingham Herald" },
        { news: "http://www.kirotv.com/", name: "KIRO 7 CBS" },
        { news: "http://www.komonews.com/", name: "KOMO News" },
        { news: "http://mynorthwest.com/", name: "My North West" },
        { news: "http://heraldnet.com/", name: "Herald Net" },
        { news: "http://www.elmundous.com/", name: "El Mundo" },
        { news: "http://www.spokesman.com/", name: "The Spokesman-Review" },
        { news: "http://www.theolympian.com/", name: "The Olympian" },
        { news: "http://www.krem.com/", name: "2 KREM" },
        { news: "http://www.thestranger.com/", name: "The Stranger" },
        { news: "http://q13fox.com/", name: "Q 13 FOX" },
        { news: "http://www.tri-cityherald.com/", name: "Tri-City Herald" },
        { news: "http://www.krem.com/", name: "KREM 2 TV" },
        { news: "http://www.columbian.com/", name: "The Columbian" },
        { news: "http://www.khq.com/", name: "KHQ Q6" }
    ];

    var oregon = [
        { news: "http://portland.craigslist.org/", name: "Craigslist Oregon" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.oregonlive.com/", name: "The Oregonian" },
        { news: "http://www.statesmanjournal.com/", name: "Statesman Journal" },
        { news: "http://www.kgw.com/", name: "KGW 8" },
        { news: "http://registerguard.com/rg/news/", name: "The Register-Guard" },
        { news: "http://www.katu.com/", name: "KATU" },
        { news: "http://www.mailtribune.com/", name: "Mail Tribune" },
        { news: "http://www.kptv.com/", name: "FOX 12" },
        { news: "http://www.elhispanicnews.com/es/", name: "El Hispanic News" },
        { news: "http://www.ktvz.com/", name: "KTVZ 21" },
        { news: "http://koin.com/", name: "KOIN" },
        { news: "http://www.opb.org/", name: "OBP FM" },
        { news: "http://www.wweek.com/", name: "Willamette Week" },
        { news: "http://www.bendbulletin.com/ ", name: "The Bulletin Oregon" },
        { news: "http://www.portlandmercury.com/ ", name: "Portland Mercury" },
        { news: "http://www.kezi.com/ ", name: "KEZI 9 ABC" },
        { news: "http://www.dailyastorian.com/ ", name: "Daily Astorian" },
        { news: "http://www.dailytidings.com/", name: "Ashland Daily" },
        { news: "http://www.eastoregonian.com/", name: "East Oregonian" }
    ];

    var california = [
        { news: "https://losangeles.craigslist.org/", name: "Craigslist California" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "https://www.latimes.com/", name: "LA Times" },
        { news: "http://www.sfgate.com/", name: "SF Gate" },
        { news: "http://www.utsandiego.com/", name: "Union-Tribune San Diego" },
        { news: "http://www.sacbee.com/", name: "Sacramento Bee" },
        { news: "http://www.investors.com/", name: "Investor’s Business Daily" },
        { news: "http://www.sfchronicle.com/", name: "SF Chronical" },
        { news: "http://www.mercurynews.com/", name: "San Jose Mercury News" },
        { news: "http://www.hollywoodreporter.com/", name: "The Hollywood Reporter" },
        { news: "http://www.dailynews.com/", name: "LA Daily News" },
        { news: "http://www.ocregister.com/", name: "Orange County Register" },
        { news: "http://www.csnbayarea.com/", name: "CSN Bay Area" },
        { news: "http://ktla.com/", name: "KTLA Los Angeles" },
        { news: "http://www.nbclosangeles.com/", name: "NBC 4 South CA" },
        { news: "http://www.contracostatimes.com/", name: "Contra Costa Times" },
        { news: "http://www.laopinion.com/", name: "La Opinión" },
        { news: "http://www.pressdemocrat.com/", name: "The Press Democrat" },
        { news: "http://www.fresnobee.com/", name: "Fresno Bee" },
        { news: "http://www.presstelegram.com/", name: "Long Beach Press Telegram" },
        { news: "http://www.montereyherald.com/", name: "The Monterey County Herald" },
        { news: "http://www.independent.com/", name: "The Santa Barbara Independent" },
        { news: "http://www.kcra.com/", name: "KCRA 3" },
        { news: "http://www.pe.com/", name: "LA Press Enterprise" },
        { news: "http://www.alternet.org/", name: "Alternet" },
        { news: "http://www.motherjones.com/", name: "Mother Jones" },
        { news: "http://abc7.com/", name: "LA 7 ABC" },
        { news: "http://www.kqed.org/", name: "KQED" }
    ];

    var nevada = [
        { news: "http://lasvegas.craigslist.org/", name: "Craigslist Nevada" },
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "https://www.amazon.com/", name: "Amazon" },
        { news: "http://www.lvrj.com/", name: "Las Vegas Review-Journal" },
        { news: "http://www.rgj.com/", name: "Reno Gazette-Journal" },
        { news: "http://www.lasvegassun.com/", name: "Las Vegas Sun" },
        { news: "http://www.nevadaappeal.com/", name: "Nevada Appeal" },
        { news: "http://www.8newsnow.com/", name: "CBS 8 News" },
        { news: "http://www.eltiempolv.com/", name: "El Tiempo" },
        { news: "http://www.reviewjournal.com/view/", name: "View" },
        { news: "http://www.vegasinc.com/", name: "Vegas Inc" },
        { news: "http://www.fox5vegas.com/", name: "FOX 5 Vegas" },
        { news: "http://lasvegascitylife.com/", name: "Las Vegas City Life" },
        { news: "http://www.mynews3.com/", name: "News 3 NBC" },
        { news: "http://www.ktnv.com/", name: "KTNV 13 ABC" },
        { news: "http://www.ktvn.com/", name: "KTVN 2 News" },
        { news: "https://lasvegasweekly.com/", name: "Las Vegas Weekly" },
        { news: "http://www.carsonnow.org/", name: "Carson Now" },
        { news: "https://lasvegasmagazine.com/ ", name: "Las Vegas Magazine" }
    ];

    $scope.nevada = nevada;
    $scope.california = california;
    $scope.oregon = oregon;
    $scope.washingtonState = washingtonState;
    $scope.idaho = idaho;
    $scope.montana = montana;
    $scope.wyoming = wyoming;
    $scope.utah = utah;
    $scope.arizona = arizona;
    $scope.newMexico = newMexico;
    $scope.colorado = colorado;
    $scope.nebraska = nebraska;
    $scope.sDakota = sDakota;
    $scope.nDakota = nDakota;
    $scope.kansas = kansas;
    $scope.oklahoma = oklahoma;
    $scope.texas = texas;
    $scope.louisiana = louisiana;
    $scope.arkansas = arkansas;
    $scope.missouri = missouri;
    $scope.iowa = iowa;
    $scope.minnesota = minnesota;
    $scope.wisconsin = wisconsin;
    $scope.illinois = illinois;
    $scope.kentucky = kentucky;
    $scope.tennessee = tennessee;
    $scope.mississippi = mississippi;
    $scope.alabama = alabama;
    $scope.georgia = georgia;
    $scope.florida = florida;
    $scope.sCarolina = sCarolina;
    $scope.nCarolina = nCarolina;
    $scope.virginia = virginia;
    $scope.wVirginia = wVirginia;
    $scope.ohio = ohio;
    $scope.indiana = indiana;
    $scope.michigan = michigan;
    $scope.pennsylvania = pennsylvania;
    $scope.newYork = newYork;
    $scope.vermont = vermont;
    $scope.newHampshire = newHampshire;
    $scope.ustopnews = ustopnews;
    $scope.puerto = puerto;
    $scope.hawaii = hawaii;
    $scope.alaska = alaska;
    $scope.washingtondc = washingtondc;
    $scope.maryland = maryland;
    $scope.delaware = delaware;
    $scope.nyc = nyc;
    $scope.newJersey = newJersey;
    $scope.connecticut = connecticut;
    $scope.rhodeIsland = rhodeIsland;
    $scope.maine = maine;
    $scope.massachusetts = massachusetts;

});