window.onload = function () {
    var signin = document.getElementById('signin');
    var img = signin.getElementsByTagName('img');
    var signout = document.getElementById('signout');
    var tcbj=document.getElementById('tcbj');

    img[0].onclick = function () {
        fn()
        tcbj.style.display = 'block';
    };
    tcbj.onclick = function () {
        signout.style.display = 'none';
        tcbj.style.display = 'none';
    };

    function fn() {
        if (signout.style.display == 'none') {
            signout.style.display = 'block';
        } else {
            signout.style.display = 'none';
        }
    }
};