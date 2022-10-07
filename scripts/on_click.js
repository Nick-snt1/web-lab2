function onlyOne(checkbox) {
    document.getElementsByName('r').forEach(item => { if (item !== checkbox) item.checked = false })
}