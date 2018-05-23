var selTag = document.getElementsByClassName('selected');
// console.log(selTag);
for(let i = 0, len = selTag.length; i<len; i++) {
    selTag[i].addEventListener('click', function() {
        selTag[i].style.backgroundColor = 'grey';
    },true)
}
