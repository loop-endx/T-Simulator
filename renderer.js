document.getElementById('toggle-dark-mode').addEventListener('click', async() => {
	const isDarkMode = await window.darkMode.toggle()
	document.getElementById('theme-source').innerHTML = isDarkMode ? 'dark' : 'light'
})

document.getElementById('reset-to-system').addEventListener('click', async() => {
	await window.darkMode.system()
	document.getElementById('theme-source').innerHTML = 'System'

})