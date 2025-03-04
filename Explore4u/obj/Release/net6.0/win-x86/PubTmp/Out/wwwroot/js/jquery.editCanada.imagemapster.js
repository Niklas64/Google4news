﻿$(document).ready(function ()
{

    var image = $('#canadamap');

image.mapster({
clickNavigate : true,
singleSelect : true,
render_highlight: { altImage: '../images/Canada-b.jpg' },
	fill : true, 
	fillOpacity : 2,
	stroke : true,
	strokeColor : '0000FF',
	strokeWidth : 2,

    mapKey: 'state',
    render_select: {
        altImage: '../images/Canada-b.jpg',
        stroke: true,
        strokeColor: '0000FF',
        strokeWidth: 2
    }

});

    $('.groupselect3').bind('click', function (e) {

    var groupId = $(this).attr('id'),
        isSelected = image.mapster('get', groupId);


    switch (groupId) {
        default:
            image.mapster('set', !isSelected, groupId);
            break;
    }
});
});