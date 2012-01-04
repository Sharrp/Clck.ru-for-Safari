window.addEventListener("keydown", fireOnKeypress, false);

function fireOnKeypress()
{
	const e = event;

	if (event.target.nodeName.toLowerCase() !== 'input')
	{         
		if (e.ctrlKey && e.keyCode == "83") // 83 = s, 90 = z
		{
			safari.self.tab.dispatchMessage("hotkey");
		}
	}
}