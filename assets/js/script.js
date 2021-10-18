var sidenavInsts;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    sidenavInsts = M.Sidenav.init(elems, {'edge':'left'});
});