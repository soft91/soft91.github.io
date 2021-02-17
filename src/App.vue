<template>
  <div id="app">
    <header class="header">
      <a href="/" class="logo router-link-active">
        <span class="logoTag">&lt;</span>
        <span class="name">Whatever App's</span>
        <span class="logoTag">/&gt;</span>
      </a>
      <nav class="nav">
        <router-link to="/about">.about()</router-link>
        <router-link to="/projects">.projects()</router-link>
        <router-link to="/interest">.interests()</router-link>
        <!-- <router-link to="/admin">Admin</router-link> -->
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
body {
  padding: 0px;
  margin: 0px;
  background-color: #252525;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  font-family: sans-serif;
  margin: 0 auto;
  padding: 15px;
  width: 100%;
  justify-content: space-between;
}

.header > a:first-child {
  font-size: 20pt;
  font-weight: bold;
  padding: 20px;
  text-decoration: none;
  color: #ffffff;
}

.header span:nth-child(odd) {
  color: #4758fc;
}

.nav {
  display: flex;
  padding: 5px;
}

.nav a {
  font-weight: bold;
  color: #ffffff;
  padding: 20px;
  font-size: 15pt;
  text-decoration: none;
}

.header a.router-link-exact-active {
  color: #42b983;
}
</style>
