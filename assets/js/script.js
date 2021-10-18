var sidenavInsts;
var modalInsts;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    sidenavInsts = M.Sidenav.init(elems);
    elems = document.querySelectorAll('.modal');
    modalInsts = M.Modal.init(elems);
});