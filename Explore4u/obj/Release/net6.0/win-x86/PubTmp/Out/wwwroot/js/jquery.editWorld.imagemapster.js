$(document).ready(function ()
{
var image = $('#world');

image.mapster({
clickNavigate : true,
singleSelect : true,
	fill : true, 
	fillOpacity : .3,
	fillColor : '000099',
	stroke : true,
	strokeColor : '000099',
	strokeWidth : 2,

    mapKey: 'state',
    render_select: {
	fill : true, 
	fillOpacity : .6,
	fillColor : '000099',
        stroke: true,
        strokeColor: '000099',
        strokeWidth: 2
    }

});

$('.selectUSA').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectCanada').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectEurope').bind('click', function (e) {

var groupId = $(this).attr('id'),
    isSelected = image.mapster('get', groupId);

switch (groupId) {
    default:
        image.mapster('set', !isSelected, groupId);
        break;
}
});

$('.selectAustralia').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectAsia').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectAfrica').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectSoutAm').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

$('.selectCentralAm').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);

    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});

});

