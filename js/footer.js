
var footer_timer, footer_height;

$('.footer').mouseenter(function()
{
	footer_height = $('.footer').height();
	clearInterval(footer_timer);
	footer_timer = setInterval('up()', 10);
});

$('.footer').mouseleave(function()
{
	footer_height = $('.footer').height();
	clearInterval(footer_timer);
	footer_timer = setInterval('down()', 10);
});

function up()
{
	if (footer_height < 60)
	{
		$('.footer').css('height', footer_height + 'px');
		footer_height++;
	}
	else
	{
		clearInterval(footer_timer);
	}
}

function down()
{
	if (footer_height > 30)
	{
		$('.footer').css('height', footer_height + 'px');
		footer_height--;
	}
	else
	{
		clearInterval(footer_timer);
	}
}