const main = document.querySelector('main.full-scale');
main.style.height = '90vh';
const nav = document.querySelector('nav#navbar');
nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-info");
nav.style.height = '10vh';
nav.innerHTML = `
<div class="container-fluid">
<a href="#" class="navbar-brand">Bootstrap</a>
<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse5">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse5">
    <div class="navbar-nav">
        <a href="#" class="nav-item nav-link active">Home</a>
        <a href="#" class="nav-item nav-link">About</a>
        <a href="#" class="nav-item nav-link">Examples</a>
    </div>
    <form class="d-flex ms-auto">
        <input type="text" class="form-control me-sm-2" placeholder="Search">
        <button type="submit" class="btn btn-outline-light">Search</button>
    </form>
</div>
</div>    
`;