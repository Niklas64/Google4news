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

    var madagascar = [
        { news: "http://www.ebay.fr/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/", name: "Bid or Buy" },
        { news: "http://www.madagascar-tribune.com/", name: "Madagascar Tribune" },
        { news: "http://www.lexpressmada.com/", name: "L’Express de Madagascar" },
        { news: "http://www.midi-madagasikara.mg/", name: "Midi Madagasikara" },
        { news: "http://www.moov.mg/", name: "Moov" },
        { news: "https://www.madamagazine.com/", name: "Madagascar Magazine" },
        { news: "http://newsmada.com/", name: "News Mada" },
        { news: "https://gasy.net/", name: "Gazy" },
        { news: "https://madagate.org/", name: "Madagate" },
        { news: "https://laverite.mg/", name: "La Verite" },
        { news: "https://matv.mg/", name: "Ma-TV" }
    ]

    var wsahara = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/", name: "Bid or Buy" },
        { news: "https://www.nytimes.com/topic/destination/western-sahara/", name: "NYT Western Sahara" },
        { news: "http://www.wsrw.org/", name: "Western Sahara Resource Watch" },
        { news: "http://www.spsrasd.info/news/en", name: "Sahara Press Service" },
        { news: "http://www.sahara-online.net/", name: "Sahara Online" },
        { news: "http://www.elconfidencialsaharaui.com/", name: "El Confidencial Saharaui" },
        { news: "http://www.corcas.com/", name: "CORCAS Saharan Affairs" }
    ]

    var mozambique = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/", name: "Bid or Buy" },
        { news: "http://www.paginasamarelas.co.mz/", name: "Páginas Amarelas (yellow pages)" },
        { news: "https://jornalnoticias.co.mz/", name: "Jornal Notícias" },
        { news: "http://www.thezambezian.com/", name: "The Zambezian (eng)" },
        { news: "http://rm.co.mz/", name: "Radio Mozambique" },
        { news: "http://www.clubofmozambique.com/", name: "Club of Mozambique (eng)" },
        { news: "https://verdade.co.mz/", name: "Verdade" }
    ]

    var zimbabwe = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/search/zimbabwe/", name: "Bid or Buy" },
        { news: "http://www.zimyellow.com/", name: "Yellow Pages" },
        { news: "http://www.herald.co.zw/", name: "The Herald" },
        { news: "http://www.newzimbabwe.com/", name: "New Zimbabwe" },
        { news: "http://www.thestandard.co.zw/", name: "The Standard" },
        { news: "https://www.businesslive.co.za/", name: "The Financial Gazette" },
        { news: "http://www.chronicle.co.zw/", name: "The Chronicle" },
        { news: "http://www.newsday.co.zw/", name: "Newsday" },
        { news: "http://www.sundaynews.co.zw/", name: "The Sunday News" },
        { news: "https://www.sundaymail.co.zw/", name: "Th Sunday Mail" },
        { news: "http://www.theindependent.co.zw/", name: "The Zimbabwe Independent" },
        { news: "https://www.zbc.co.zw/", name: "ZBC" },
        { news: "https://www.thezimbabwemail.com/", name: "The Zimbabwe Mail" },
        { news: "https://zimetro.co.zw/", name: "ZiMetro" },
        { news: "http://nehandaradio.com/", name: "Nehanda Radio" },
        { news: "http://bulawayo24.com/", name: "Bulawayo 24" },
        { news: "http://www.kwayedza.co.zw/", name: "Kwayedza" },
        { news: "https://www.voazimbabwe.com/", name: "VOA Zimbabwe" },
        { news: "https://www.thezimbabwean.co/", name: "The Zimbabwean" },
        { news: "https://www.manicapost.co.zw/", name: "The Manica Post" },
        { news: "https://www.zimeye.net/", name: "ZimEye" },
        { news: "https://www.pindula.co.zw/", name: "Pindula" },
        { news: "https://dailynews.co.zw/", name: "Daily News" },
        { news: "http://www.newsdzezimbabwe.co.uk/", name: "MNewsdzeZimbabwe" },
        { news: "https://www.myzimbabwe.co.zw/", name: "My Zimbabwe News" },
        { news: "https://www.hmetro.co.zw/", name: "H-Metro" },
        { news: "https://www.starfm.co.zw/", name: "Star FM" },
        { news: "https://www.thezimbabwenewslive.com/", name: "The Zimbabwen News Live" },
        { news: "https://www.newzimbabwe.com/", name: "New Zimbabwe" },
        { news: "https://www.zimbabwesituation.com/", name: "Zimbabwe Situation" }
    ]

    var botswana = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/search/botswana/", name: "Bid or Buy" },
        { news: "http://www.sundaystandard.info/", name: "Sunday Standard" },
        { news: "https://www.thegazette.news/", name: "The Botswana Gazette" },
        { news: "https://dailynews.gov.bw/", name: "Daily News" },
        { news: "https://guardiansun.co.bw/", name: "Botswana Guardian SUN" },
        { news: "https://www.thevoicebw.com/", name: "The Voice" },
        { news: "https://www.weekendpost.co.bw/", name: "Weekend Post" },
        { news: "http://www.mmegi.bw/", name: "The Monitor" },
        { news: "http://www.thezambezian.com/", name: "The Zambezian" },
        { news: "https://www.gabzfm.com/", name: "Gabz FM 96.2" },
        { news: "https://yaronafm.co.bw/", name: "Yarona FM" }
    ]

    var namibia = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.bidorbuy.co.za/", name: "Bid or Buy" },
        { news: "http://www.namibtimes.net/", name: "Namib Times" },
        { news: "https://namibiansun.com/", name: "Namibian Sun" },
        { news: "http://www.informante.web.na/", name: "Informanté" },
        { news: "http://www.namibian.com.na/", name: "The Namibian" },
        { news: "https://www.republikein.com.na/", name: "Republikein" },
        { news: "https://www.nbc.na/", name: "NBC" },
        { news: "https://freshfm.com.na/", name: "Fresh FM" },
        { news: "https://k7.com.na/", name: "K7" }
    ]

    var angola = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "https://www.jornaldeangola.ao/ao/", name: "Jornal de Angola" },
        { news: "https://www.newstimeafrica.com/", name: "Newstime Africa" },
        { news: "https://www.club-k.net/", name: "Club-K Angola" },
        { news: "https://www.angonoticias.com/", name: "Angonotícias" },
        { news: "https://opais.co.ao/", name: "O País" },
        { news: "https://www.sapo.pt/", name: "SAPO" },
        { news: "https://angola24horas.com/", name: "Angola24Horas" },
        { news: "https://liveonlineradio.net/radio-canal-angola", name: "Radio Canal Angola" },
        { news: "https://rna.ao/rna.ao/", name: "Radio Nacional de Angola" }
    ]

    var zambia = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "https://www.daily-mail.co.zm/", name: "Zambia Daily Mail" },
        { news: "https://www.times.co.zm/", name: "Times of Zambia" },
        { news: "https://zambiareports.news/", name: "Zambia Report" },
        { news: "http://www.thezambezian.com/", name: "The Zambezian" },
        { news: "http://www.lusakatimes.com/", name: "Lusaka Times" },
        { news: "https://thebestofzambia.com/", name: "Online Zambian business" },
        { news: "https://breezefmchipata.com/", name: "Breeze FM" },
        { news: "https://allafrica.com/", name: "All Africa" },
        { news: "https://www.zambiatourism.com/", name: "Zambia Tourism" }
    ]

    var malawi = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://mwnation.com/", name: "The Nation" },
        { news: "http://www.nyasatimes.com/", name: "Nyasa Times" },
        { news: "http://www.maravipost.com/", name: "The Maravi Post" },
        { news: "http://www.maraviexpress.com/", name: "Maravi Express" },
        { news: "https://malawi24.com/", name: "Malawi 24" },
        { news: "http://www.malawivoice.com/", name: "Malawi Voice" },
        { news: "https://zodiakmalawi.com/", name: "Zodiac Malawi" },
        { news: "https://www.malawitourism.com/", name: "Malawi Tourism" },
        { news: "https://visitmalawi.mw/", name: "Visit Malawi" }
    ]

    var tanzania = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.zoomtanzania.com/Steals-Deals-And-Classifieds/", name: "Zoom Tanzania" },
        { news: "http://www.thecitizen.co.tz/", name: "The Citizen (eng)" },
        { news: "https://www.mwananchi.co.tz/", name: "Mwananchi" },
        { news: "http://www.dailynews.co.tz/", name: "Daily News (eng)" },
        { news: "https://www.ippmedia.com/", name: "IPP Media" },
        { news: "http://www.kawowo.com/", name: "Kawowo" },
        { news: "http://www.24tanzania.com/", name: "24 Tanzania" },
        { news: "http://www.freemedia.co.tz/", name: "Tanzania Daima" },
        { news: "https://www.habarileo.co.tz/", name: "Habari Leo" },
        { news: "https://www.panapress.com/", name: "Panapress" },
        { news: "https://millardayo.com/", name: "Millard Ayo" },
        { news: "https://bongo5.com/", name: "Bongo 5" },
        { news: "https://www.tanzaniaparks.com/", name: "Tanzania National Parks" },
        { news: "https://www.expertafrica.com/", name: "Expert Africa" },
        { news: "https://www.mwanaspoti.co.tz/", name: "MwanaSpoti" },
        { news: "https://globalpublishers.co.tz/", name: "Global Publishers" },
        { news: "http://tzonline.org/", name: "TZ Online" },
        { news: "https://cloudsfm.co/", name: "Clouds FM" },
        { news: "https://www.radio1.co.tz/", name: "Radio One TV" },
    ]

    var next = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" }
    ]

    var next = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" }
    ]

    var next = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" },
        { news: "", name: "" }
    ]


    $scope.southafrica = southafrica;
    $scope.madagascar = madagascar;
    $scope.wsahara = wsahara;
    $scope.mozambique = mozambique;
    $scope.zimbabwe = zimbabwe;
    $scope.botswana = botswana;
    $scope.namibia = namibia;
    $scope.angola = angola;
    $scope.zambia = zambia;
    $scope.malawi = malawi;
    $scope.tanzania = tanzania;
    $scope.next = next;
    $scope.next = next;
    $scope.next = next;
    $scope.next = next;
    $scope.next = next;
    $scope.next = next;

});