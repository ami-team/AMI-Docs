<template>
  <header class="hero">
    <a><img src="https://ami.in2p3.fr/images/logo.png" alt="Logo of AMI"></a>
    <h1 id="main-title">ATLAS <span class="gradient">Metadata</span> Interface</h1>
    <p class="description">The official documentation for the AMI Web Framework</p>

    <div class="features">
      <div class="feature">
        <h2>Lightweight</h2>
        <p>AMI internally use Webpack to bundle the code.</p>
      </div>
      <div class="feature">
        <h2>Easy</h2>
        <p>The Python CLI automate all the boring tasks.</p>
      </div>
      <div class="feature">
        <h2>Concept</h2>
        <p>Framework for developing metadata-oriented applications.</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .gradient {
    background: #007BFF;
    background: -webkit-linear-gradient(to top left, #007BFF 0%, #9E4BCF 100%);
    background: -moz-linear-gradient(to top left, #007BFF 0%, #9E4BCF 100%);
    background: linear-gradient(to top left, #007BFF 0%, #9E4BCF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #main-title {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 4rem;
  }

  .description {
    font-family: 'Inter', sans-serif;
  }

  .feature h2, p {
    font-family: 'Inter', sans-serif;
  }
</style>