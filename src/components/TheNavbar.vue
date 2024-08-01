<template>
  <nav class="navbar position-sticky t-20 navbar-expand-lg fixed-top navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <h1>osonweb</h1>
      </a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/html" class="nav-link">HTML</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/css" class="nav-link">CSS</router-link>
          </li>
        </ul>
        <form class="d-flex input-group w-auto">
          <input type="search" class="form-control" placeholder="Qidirish" aria-label="Search" />
          <button class="btn btn-outline-primary" type="button">
            <i class="fas fa-search"></i>
          </button>
        </form>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>