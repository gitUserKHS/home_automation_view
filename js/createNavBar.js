const navOption = {
    MAIN: 1
}

const navMain = `
<div class="container-fluid">
<!-- <a href="#" class="navbar-brand">Bootstrap</a> -->
<div class="navbar-brand">홈 오토메이션</div>
<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse5">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse5">
    <div class="navbar-nav">
        <a href="./register/device.html" class="nav-item nav-link active">가전제품확인</a>
        <a href="./device_control.html" class="nav-item nav-link active">가전제품등록</a>
    </div>
    <!-- <form class="d-flex ms-auto">
        <input type="text" class="form-control me-sm-2" placeholder="Search">
        <button type="submit" class="btn btn-outline-light">Search</button>
    </form> -->
</div>
</div>    
`;

/**@param {Number} option */
function appendNav(option){
    const main = document.querySelector('main.full-scale');
    main.style.height = '90vh';
    const nav = document.querySelector('nav#navbar');
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-info");
    nav.style.height = '10vh';
    switch(option){
        case navOption.MAIN: 
            nav.innerHTML = navMain;
            break;
    }
}