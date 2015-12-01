
var is_active = '';

$('.items').click(function()
{
	var id = '#sub' + this.id;

	if (is_active != id)
	{
		descroll(is_active);
		is_active = id;
		scroll(id);
	}
	else
	{
		descroll(id);
		is_active = '';
	}
});

function scroll(id)
{
	var height = 0;
	var timer;

	$(id).css('display','block');

	timer = setInterval(function()
	{
		if (height <= 100)
		{
			$(id).height(height);
			height++;
		}
		else
		{
			clearInterval(timer);
		}
	},1);
}

function descroll(id)
{
	var height = 100;
	var timer;

	timer = setInterval(function()
	{
		if (height >= 0)
		{
			$(id).height(height);
			height--;
		}
		else
		{
			$(id).css('display','none');
			clearInterval(timer);
		}
	},1);
}