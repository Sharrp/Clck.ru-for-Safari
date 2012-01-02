safari.application.addEventListener("validate", handleValidateEvent, false);

function handleValidateEvent(event)
{
	if (safari.extension.settings.url)
	{
		pasteLink(safari.extension.settings.url);
		safari.extension.settings.url = null;
	}
}

function pasteLink(link)
{
	var link_field = document.getElementById('link_text');
	link_field.value = link;
	link_field.focus();
	link_field.select();
}