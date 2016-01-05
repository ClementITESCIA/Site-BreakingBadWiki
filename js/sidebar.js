
// Selecteurs
var side = $('#sidebar-container');
var rail = $('#rail');
var nav  = $('nav');

// SideBar margin
var margin = nav.height();

// Nombre d'item
var max_item = 0;

// Elément actif courant
var current = '#item-0';

// Tableau des éléments
var contents = [];
var items    = [];
var subitems = [];

// Position du rail de la sidebar
var p_rail = rail.offset().top;

$(document).ready(function()
{
	// Determine le nombre d'élément
	while ($('#content-' + max_item).height() !== null)
	{
		max_item++;
	}

	// Récupération des éléments
	for (var i = 0; i < max_item; i++)
	{
		contents[i] = Math.round($('#content-' + i).offset().top);
		items[i]    = '#item-' + i;
		subitems[i] = '#subitem-' + i;
	}
});

// Evénement click
$('.items').click(function()
{
	var i = this.id.charAt(this.id.length - 1);
	$(window).scrollTop(contents[i] - 100);
});

var sidebar_timer = setInterval(function()
{
	var p_nav = nav.offset().top + nav.height();
	var p_sid = Math.round(side.offset().top);

	if (p_nav + 65 > p_sid)
	{
		margin += Math.round((p_nav - p_sid + 65) / 10);
	}
	if (p_nav + 65 < p_sid && p_sid > p_rail)
	{
		margin -= Math.round((p_sid + 65 - p_nav) / 10);
	}
	if (margin < 0)
	{
		margin = 0;
	}

	for (var i = 0; i < max_item; i++)
	{
		if (p_sid > contents[i])
		{
			// Ancien élément actif
			$(current  + ' .active-container').removeClass('active-title');
			$(current  + ' .active-subitem').removeClass('active-subitem');
			$(current  + ' .subitems').addClass('hide');

			// Nouveau élément actif
			$(items[i] + ' ' + subitems[i]).addClass('active-subitem');
			$(items[i] +' .active-container').addClass('active-title');
			$(items[i] + ' .subitems').removeClass('hide');

			current = items[i];
		}
	}

	// Application de la nouvelle marge
	side.css('margin-top',margin+'px');

}, 1);
