// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("centralamController", function ($scope) {

    var trinidad = [
        { news: "http://www.trinidadtimes.com/", name: "Trinidad Times" },
        { news: "http://www.trinidadexpress.com/", name: "Trinidad Express" },
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "https://www.findyello.com/trinidad/", name: "Yellow Pages" },
        { news: "http://www.guardian.co.tt/", name: "Trinidad Guardian" },
        { news: "http://www.newsday.co.tt/", name: "Newsday" }
    ];

    var caribbean = [
        { news: "http://www.nationnews.com/", name: "Daily Nation Barbados" },
        { news: "https://stluciastar.com/", name: "St. Lucia Star" },
        { news: "http://www.tribune242.com/", name: "The Tribune " },
        { news: "http://virginislandsdailynews.com/", name: "Virgin Islands Daily News (US)" },
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "https://www.findyello.com/bahamas/", name: "Yellow Pages" },
        { news: "http://www.bvibeacon.com/", name: "BVI Beacon (Virgin Isl. UK)" },
        { news: "http://www.thestkittsnevisobserver.com/", name: "The St. Kitts Nevis Observer" },
        { news: "http://cananewsonline.com/", name: "CANA News" },
        { news: "https://antiguaobserver.com/", name: "The Antigua Observer" },
        { news: "http://www.themontserratreporter.com/", name: "The Montserrat News" },
        { news: "http://dominicanewsonline.com/news/", name: "Dominica News" },
        { news: "http://www.martinique.franceantilles.fr/", name: "Martinique France-Antilles" },
        { news: "http://thevincentian.com/", name: "The Vincentian" },
        { news: "https://thebarnaclenews.com/", name: "Barnacle Grenada" },
        { news: "http://www.barbadostoday.bb/", name: "Barbados Today" },
        { news: "https://thenassauguardian.com/", name: "The Nassau Guardian" },
        { news: "http://thebahamasweekly.com/", name: "The Bahamas Weekly" },
        { news: "http://www.antigua-barbuda.org/index.htm", name: "Antigua Barbuda" },
        { news: "https://www.searchlight.vc/", name: "St. Vincent Searchlight" },
        { news: "https://znsbahamas.com/", name: "ZNS TV Bahamas" },
        { news: "https://www.htsstlucia.org/", name: "HTS St. Lucia" },
        { news: "https://thevoiceslu.com/", name: "The Voice St. Lucia" },
        { news: "https://www.virginislandsnewsonline.com/en", name: "Virgin Islands News Online" },
        { news: "http://bviplatinum.com/", name: "Vigin Island Platinum News" },
        { news: "https://bvinews.com/", name: "BVI News" },
        { news: "https://stthomassource.com/", name: "St. Thomas Source" },
        { news: "https://www.thestkittsnevisobserver.com/", name: "The St. Kitts Nevis Observer" },
        { news: "https://zizonline.com/", name: "ZIZ Online" },
        { news: "https://stcroixsource.com/", name: "St. Croix Source" }
    ];

    var aruba = [
        { news: "http://www.diario.aw/", name: "Diario Aruba" },
        { news: "http://www.nostisia.com/", name: "Nostisia (ned)" },
        { news: "http://www.amigoe.com/", name: "Amigoe Curaçao" },
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://arubayp.com/", name: "Yellow Pages" },
        { news: "https://antilliaansdagblad.com/", name: "Antilliaans Dagblad (ned)" },
        { news: "https://24ora.com/", name: "24ora" },
        { news: "https://masnoticia.com/", name: "Mas Noticia" },
        { news: "http://www.bondia.com/", name: "Bon Dia" },
        { news: "https://www.awe24.com/", name: "AWE 24" },
        { news: "https://www.arubatoday.com/", name: "Aruba Today (eng)" },
        { news: "http://www.boletinextra.com/", name: "Boletin Extra" },
        { news: "https://extra.cw/aruba/", name: "Extra Aruba" },
        { news: "https://www.visitaruba.com/", name: "Visit Aruba" }
    ];

    var cayman = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.caymanyp.com/", name: "Yellow Pages" },
        { news: "https://www.caymancompass.com/", name: "Caymanian Compass" },
        { news: "https://www.caymaniantimes.ky/", name: "Caymanian Times" },
        { news: "http://www.ieyenews.com/", name: "Cayman iNews" },
        { news: "https://www.ecayonline.com/", name: "eCay Business" },
        { news: "https://caymannewsservice.com/", name: "Cayman News Service" }

    ];

    var dominican = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "https://paginasamarillas.com.do/es/home", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.hoy.com.do/", name: "Hoy" },
        { news: "http://www.diariolibre.com/", name: "Diário Libre" },
        { news: "http://www.elnacional.com.do/", name: "El Nacional" },
        { news: "http://www.elcaribe.com.do/", name: "El Caribe" },
        { news: "http://www.listindiario.com/", name: "Listín Diário" },
        { news: "http://www.elnuevodiario.com.do/", name: "El Neuvo Diário" },
        { news: "http://www.dominicantoday.com/", name: "Dominican Today (eng)" },
        { news: "http://www.eljaya.com/", name: "El Jaya" },
        { news: "http://lainformacion.com.do/", name: "La Información" },
        { news: "http://periodicoelfaro.com.do/", name: "El Faro" },
        { news: "http://www.costaverdedr.com/", name: "Costa Verde DR" }
    ];

    var jamaica = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://jamaicayp.com/", name: "Yellow Pages" },
        { news: "http://www.jamaicantimes.com/", name: "Jamaican Times" },
        { news: "http://www.jamaicaobserver.com/", name: "Jamaican Observer" },
        { news: "http://jamaica-gleaner.com/", name: "The Jamaican Gleaner" },
        { news: "http://jamaica-star.com/", name: "The Jamaican Star" },
        { news: "http://www.westernmirror.com/", name: "Western Mirror" },
        { news: "http://www.jamaicanewsbulletin.com/", name: "Jamaica News Bulletin" },
        { news: "https://jis.gov.jm/", name: "Jamaica Information Service" },
        { news: "http://radiojamaicanewsonline.com/", name: "RJR News" }
    ];

    var haiti = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.lenouvelliste.com/", name: "Le Nouvelliste" },
        { news: "http://www.haitisun.com/", name: "Haiti Sun (eng)" },
        { news: "http://haitiglobe.com/#/news/", name: "Haiti Globe (eng)" },
        { news: "http://www.lematinhaiti.com/", name: "Le Matin" },
        { news: "https://www.haitilibre.com/", name: "Haiti Libre" },
        { news: "http://www.haitienmarche.com/", name: "Haiti En Marche" },
        { news: "https://www.alterpresse.org/", name: "Alter Presse" }
    ];

    var puertorico = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://puertorico.en.craigslist.org/", name: "Craigslist Puerto Rico" },
        { news: "https://superpagespr.com/", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.caribbeanbusinesspr.com/", name: "Caribbean Business" },
        { news: "http://www.elnuevodia.com/", name: "El Nuevodia" },
        { news: "http://www.vocero.com/", name: "Vocero" },
        { news: "https://www.elnuevodia.com/", name: "El Nuevo Dia" },
        { news: "http://www.primerahora.com/", name: "Primera Hora" },
        { news: "https://www.puertoricoreport.com/", name: "Puertorico Report" },
        { news: "https://www.metro.pr/", name: "Metro" },
        { news: "https://www.noticel.com/", name: "NotiCel" }
    ];

    var cuba = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.vanguardia.cu/", name: "Vanguardia" },
        { news: "http://www.granma.cu/", name: "Granma Internacional (eng, fr, de)" },
        { news: "http://www.sierramaestra.cu/", name: "Sierra Maestra (eng)" },
        { news: "http://www.juventudrebelde.cu/", name: "Juventud Rebelde" },
        { news: "http://www.trabajadores.cu/", name: "Trabajadores" },
        { news: "http://www.escambray.cu/", name: "Escambray" },
        { news: "http://www.periodico26.cu/", name: "Periódico 26" },
        { news: "http://www.ahora.cu/", name: "Ahora" },
        { news: "http://www.venceremos.cu/", name: "Venceremos" },
        { news: "http://www.guerrillero.cu/", name: "Guerrillero" },
        { news: "http://www.cubadebate.cu/", name: "Cuba Debate" },
        { news: "https://www.elnuevoherald.com/", name: "el Nuevo Herald" },
        { news: "https://www.radiotelevisionmarti.com/", name: "Marti" },
        { news: "https://www.cubanet.org/", name: "CubaNet" },
        { news: "http://www.cubaweb.cu/", name: "Cuba Web" },
        { news: "https://oncubanews.com/", name: "OnCuba News" },
        { news: "https://www.prensa-latina.cu/", name: "Prensa latina" },
        { news: "https://cubasi.cu/", name: "CubaSi" },
        { news: "https://diariodecuba.com/", name: "Diario de Cuba" },
        { news: "https://caribbeannewsdigital.com/", name: "Caribbean News Digital" },
        { news: "https://www.cubaencuentro.com/", name: "Cuba Encuentro" },
        { news: "https://havanatimes.org/", name: "Havana Times" },
        { news: "https://www.cafefuerte.com/", name: "Cafe Fuerte" }
    ];

    var bahamas = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://freeport.nassauguardian.net/", name: "The Freeport News" },
        { news: "http://jonesbahamas.com/", name: "The Bahamas Journal" },
        { news: "http://www.tribune242.com/", name: "Tribune 242" },
        { news: "https://www.bahamaspress.com/", name: "Bahamas Press" },
        { news: "http://www.whatsonbahamas.com/", name: "What’s On" },
        { news: "http://suntci.com/", name: "Turks and Caicos Sun" },
        { news: "http://tcweeklynews.com/", name: "Turks and Caicos Weekly News" },
        { news: "http://thebahamasweekly.com/", name: "The Bahamas Weekly" },
        { news: "http://www.thenassauguardian.com/", name: "The Nassau Guardian" }
    ];

    var panama = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.paginasamarillas.com.pa/", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.prensa.com/", name: "La Prensa" },
        { news: "http://www.elsiglo.com/", name: "El Siglo" },
        { news: "http://www.critica.com.pa/", name: "El Crítica" },
        { news: "https://www.laestrella.com.pa/", name: "La Estrella de Panama" },
        { news: "http://www.panamaamerica.com.pa/", name: "El Panamá América" },
        { news: "http://www.newsroompanama.com/", name: "Newsroom Panama (eng)" },
        { news: "http://www.diaadia.com.pa/", name: "Día a Día" },
        { news: "http://www.midiario.com/", name: "Mi Diário" },
        { news: "https://elcapitalfinanciero.com/", name: "El Capital Financiero" },
        { news: "http://www.thebocasbreeze.com/", name: "a Bocas Breeze" },
        { news: "https://www.telemetro.com/", name: "Telemetro Panama" },
        { news: "https://www.tvn-2.com/", name: "TVN 2 Panama" },
        { news: "https://www.rpctv.com/", name: "RPC TV Panama" }
    ];

    var costarica = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.nacion.com/", name: "La Nación" },
        { news: "http://www.ticotimes.net/", name: "Tico Times" },
        { news: "https://www.crhoy.com/", name: "CRHoy.com" },
        { news: "http://www.diarioextra.com/", name: "Diário Extra" },
        { news: "http://www.aldia.cr/", name: "Al Día" },
        { news: "http://www.larepublica.net/", name: "La República" },
        { news: "http://www.elfinancierocr.com/", name: "El Financiero" },
        { news: "http://thecostaricanews.com/", name: "The Costa Rica News (eng)" },
        { news: "https://www.elpais.cr/", name: "El Pais" },
        { news: "https://news.co.cr/", name: "Costa Rica Star" }
    ];

    var nicaragua = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.paginasamarillas.com.ni/", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.laprensa.com.ni/", name: "La Prensa" },
        { news: "http://www.bolsadenoticias.com.ni/", name: "Bolsa de Noticias" },
        { news: "https://www.confidencial.digital/", name: "Confidencial" },
        { news: "http://www.ticotimes.net/Region/Nicaragua/", name: "The Nica Times (eng)" },
        { news: "https://www.el19digital.com/", name: "El 19" },
        { news: "https://www.noticiacristiana.com/", name: "Noticia Cristiana" },
        { news: "https://www.bacanalnica.com/", name: "Bacanalnica" }
    ];

    var honduras = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.laprensa.hn/", name: "La Prensa" },
        { news: "http://www.elheraldo.hn/", name: "El Heraldo" },
        { news: "http://www.tiempo.hn/", name: "Diário Tiempo" },
        { news: "http://www.latribuna.hn/", name: "La Tribuna" },
        { news: "http://www.diez.hn/", name: "Diário Diez" },
        { news: "http://www.ellibertador.hn/", name: "El Libertador" },
        { news: "http://www.elprogreseno.hn/", name: "El Progreseno" },
        { news: "http://www.hondurasnews.com/", name: "Honduras News (eng)" },
        { news: "http://www.puertocortesnews.com/", name: "Puerto Cortés News" },
        { news: "https://proceso.hn/", name: "Proceso Digital" },
        { news: "https://www.diez.hn/", name: "Diez " }
    ];

    var elsalvador = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.paginasamarillas.com.sv/", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.elsalvador.com/", name: "El Diário de Hoy" },
        { news: "http://www.laprensagrafica.com", name: "La Prensa Gráfica" },
        { news: "https://diario.elmundo.sv/", name: "El Mundo" },
        { news: "https://lahora.gt/", name: "La Hora" },
        { news: "http://www.elfaro.net/", name: "El Faro" },
        { news: "http://www.diariocolatino.com/", name: "Diário Co Latino" },
        { news: "http://www.elgrafico.com/", name: "El Grafico" },
        { news: "http://elpais.com.sv/", name: "El País" },
        { news: "https://diariolatino.net/", name: "Diario Latino" },
        { news: "http://www.contrapunto.com.sv/", name: "Contra Punto" },
        { news: "http://www.lapagina.com.sv/", name: "la Página" }
    ];

    var guatemala = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.paginasamarillas.com.gt/", name: "Páginas Amarillas (yellow pages)" },
        { news: "http://www.prensalibre.com/", name: "Prensa Libre" },
        { news: "http://www.elperiodico.com.gt/", name: "El Periodico" },
        { news: "http://www.lahora.com.gt/", name: "La Hora" },
        { news: "http://www.elmetropolitano.com.gt/", name: "El Metropolitano" },
        { news: "https://www.publinews.gt/gt/", name: "Publinews" },
        { news: "https://www.soy502.com/", name: "Soy502" },
        { news: "https://dca.gob.gt/", name: "Diario de Centro America" },
        { news: "https://plazapublica.com.gt/", name: "Plaza Publica" },
        { news: "https://www.guatevision.com/", name: "Guatevision Canal 25" },
        { news: "https://guatefutbol.com/", name: "Guatefutbol" },
        { news: "https://www.lared1061.com/", name: "La Red" },
        { news: "https://emisorasunidas.com/", name: "Radio Emisoras Unidas" }
    ];

    var belize = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://amandala.com.bz/news/", name: "Amandala" },
        { news: "http://www.belizetimes.bz/", name: "The Belize Times" },
        { news: "http://www.reporter.bz/", name: "The Reporter" },
        { news: "http://www.guardian.bz/", name: "The Guardian" },
        { news: "http://ambergristoday.com/", name: "Ambergris Today" },
        { news: "http://www.sanpedrosun.com/", name: "The San Pedro Sun" },
        { news: "http://belizenews.com/", name: "Belize News" },
        { news: "https://edition.channel5belize.com/", name: "News 5" }
    ];

    var mexicoDF = [
        { news: "http://www.ebay.es/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.eluniversal.com.mx/", name: "El Universal" },
        { news: "http://www.reforma.com/", name: "Reforma" },
        { news: "https://www.thenews.mx/", name: "The News (eng)" },
        { news: "http://www.milenio.com/", name: "Milenio" },
        { news: "http://www.jornada.unam.mx/", name: "Jornada" },
        { news: "http://www.excelsior.com.mx/", name: "Excelsior" },
        { news: "http://eleconomista.com.mx/", name: "El Economista" },
        { news: "http://www.cronica.com.mx/", name: "La Crónica de Hoy" },
        { news: "http://www.proceso.com.mx/", name: "Proceso" },
        { news: "http://www.elfinanciero.com.mx/", name: "El Financiero" },
        { news: "http://www.laaficion.com/", name: "La Aficion" },
        { news: "http://www.estadiodeportes.mx/", name: "Estadio" },
        { news: "http://www.oem.com.mx/", name: "OEM" },
        { news: "http://www.mercadolibre.com.mx/", name: "Mercado Libre" },
        { news: "http://segundamano.com.mx/", name: "Segundamano" },
        { news: "http://tiempo.com.mx/", name: "Tiempo" }
    ]; 

    var mexico = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://www.alibaba.com/", name: "Alibaba" },
        { news: "https://www.lightinthebox.com/", name: "LightInTheBox" },
        { news: "http://www.amazon.com/", name: "Amazon" },
        { news: "http://www.eluniversal.com.mx/", name: "El Universal" },
        { news: "http://www.vanguardia.com.mx/", name: "El Vanguardia" },
        { news: "http://www.debate.com.mx/", name: "El Debate" },
        { news: "https://www.thenews.mx/", name: "The News (eng)" },
        { news: "http://www.elsiglodetorreon.com.mx/", name: "El Siglo de Torreon" },
        { news: "http://www.vertigopolitico.com/", name: "Vértigo" },
        { news: "http://diario.mx/", name: "El Diário" },
        { news: "https://mundoejecutivo.com.mx/", name: "Mundo Ejecutivo" },
        { news: "http://televisadeportes.esmas.com/", name: "Televisa Deportes" },
        { news: "http://www.reforma.com/", name: "Reforma" },
        { news: "http://www.informador.com.mx/", name: "El Informador" },
        { news: "https://aristeguinoticias.com/", name: "Aristegui" },
        { news: "http://www.elnorte.com/", name: "El Norte" },
        { news: "http://yucatan.com.mx/", name: "El Diário de Yucatan" },
        { news: "http://www.elfinanciero.com.mx/", name: "El Financiero" },
        { news: "http://www.zocalo.com.mx/", name: "Zocalo" },
        { news: "http://www.elimparcial.com/", name: "El Imparcial" },
        { news: "https://www.sinembargo.mx/", name: "Sin Embargo" },
        { news: "https://planoinformativo.com/", name: "Plano Informativo" },
        { news: "http://www.lajornadadeoriente.com.mx/", name: "La Jornada de Oriente" },
        { news: "http://www.lacronica.com/", name: "La Crónica" },
        { news: "https://www.ntv.com.mx/", name: "NTV" },
        { news: "http://www2.esmas.com/", name: "Es Mas" },
        { news: "https://www.sopitas.com/", name: "Sopitas" },
        { news: "https://sipse.com/", name: "Sipse.com" },
        { news: "https://www.publimetro.com.mx/", name: "Publimetro" },
        { news: "https://www.sdpnoticias.com/", name: "SDPnoticias" },
        { news: "https://eldeforma.com/", name: "El Deforma" },
        { news: "https://www.radioformula.com.mx/", name: "Radio Formula" },
        { news: "https://www.24-horas.mx/", name: "24 Horas" },
        { news: "https://www.animalpolitico.com/", name: "Animal Politico" },
        { news: "https://www.am.com.mx/", name: "Periodico AM" },
        { news: "http://www.mercadolibre.com.mx/", name: "Mercado Libre" },
        { news: "http://www.mural.com/", name: "Mural" },
        { news: "https://www.televisa.com/", name: "Televisa" }
    ];


    $scope.trinidad = trinidad;
    $scope.caribbean = caribbean;
    $scope.aruba = aruba;
    $scope.cayman = cayman;
    $scope.dominican = dominican;
    $scope.jamaica = jamaica;
    $scope.haiti = haiti;
    $scope.puertorico = puertorico;
    $scope.cuba = cuba;
    $scope.bahamas = bahamas;
    $scope.panama = panama;
    $scope.costarica = costarica;
    $scope.nicaragua = nicaragua;
    $scope.honduras = honduras;
    $scope.elsalvador = elsalvador;
    $scope.guatemala = guatemala;
    $scope.belize = belize;
    $scope.mexicoDF = mexicoDF;
    $scope.mexico = mexico;

});