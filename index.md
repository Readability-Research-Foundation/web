---
layout: default
title: Home
description: The Readability Research Foundation advances the science of reading, readability, and digital text.
---

<nav class="navbar is-fixed-top rrf-navbar" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item rrf-wordmark" href="#home">
        Readability Research Foundation
      </a>

      <button
        class="navbar-burger"
        type="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="main-navigation"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="main-navigation" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="#mission">Our Mission</a>
        <a class="navbar-item" href="#impact">Our Impact</a>
        <a class="navbar-item" href="#people">Who We Are</a>
      </div>
    </div>
  </div>
</nav>

<header id="home" class="hero is-medium rrf-hero">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="hero-copy">
        <p class="eyebrow">Readability Research Foundation</p>
        <h1 class="title is-1">Advancing the science of reading, readability, and digital text.</h1>
        <p class="subtitle is-4">
          We support researchers whose discoveries can improve reading outcomes for everyone.
        </p>

        <div class="buttons is-centered hero-actions">
          <a class="button is-primary is-medium" href="#mission">Our Mission</a>
          <a class="button is-light is-medium" href="#people">Meet the Founders</a>
        </div>
      </div>
    </div>
  </div>
</header>

<main>
  <section id="mission" class="section section-light">
    <div class="container">
      <div class="columns is-variable is-8 is-vcentered">
        <div class="column is-6">
          <p class="section-kicker">Our Mission</p>
          <h2 class="title is-2">What do we want to do?</h2>
          <div class="content is-medium">
            <p>
              Someone you love has problems with reading, and so you know how very little is understood about why and how to help.
            </p>
            <p>
              The Readability Research Foundation funds the researchers who will help, fueling discoveries that improve reading outcomes for everyone.
            </p>
          </div>
        </div>

        <div class="column is-6">
          <div class="mission-panel">
            <p class="mission-panel-label">Why this matters</p>
            <p>
              Reading affects education, work, health, civic participation, and access to digital information. Better evidence can help people receive text that works for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="impact" class="section section-accent">
    <div class="container">
      <div class="has-text-centered section-heading">
        <p class="section-kicker">Research in Practice</p>
        <h2 class="title is-2">Our community’s work is already making a difference.</h2>
      </div>

      <div class="columns is-variable is-6">
        <div class="column">
          <article class="impact-card">
            <p class="impact-number">01</p>
            <h3 class="title is-4">Digital Reading</h3>
            <p>
              Research from our community helps Fortune 50 companies deliver text to billions of readers every day.
            </p>
          </article>
        </div>

        <div class="column">
          <article class="impact-card">
            <p class="impact-number">02</p>
            <h3 class="title is-4">Education</h3>
            <p>
              Our work is changing how educators help entire classrooms learn to read.
            </p>
          </article>
        </div>

        <div class="column">
          <article class="impact-card">
            <p class="impact-number">03</p>
            <h3 class="title is-4">Technology</h3>
            <p>
              Our research powers AI and other tools that make typography and digital text more accessible.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section id="people" class="section section-light">
    <div class="container">
      <div class="has-text-centered section-heading">
        <p class="section-kicker">Founding Researchers</p>
        <h2 class="title is-2">Who are we?</h2>
      </div>

      <div class="columns is-variable is-6">
        <div class="column">
          <article class="person-card">
            <div class="person-initials" aria-hidden="true">BW</div>
            <h3 class="title is-4">Dr. Benjamin Wolfe</h3>
            <p class="person-role">Assistant Professor</p>
            <p class="person-role">Psychological &amp; Brain Sciences</p>
            <p class="person-role">University of Toronto Mississauga</p>
            <p class="person-organization">Founder, Readability Research Foundation</p>
            <p class="person-organization">Chair, Scientific Council, RRF</p>
          </article>
        </div>

        <div class="column">
          <article class="person-card">
            <div class="person-initials" aria-hidden="true">BS</div>
            <h3 class="title is-4">Dr. Ben D. Sawyer</h3>
            <p class="person-role">Associate Professor</p>
            <p class="person-role">Industrial Engineering</p>
            <p class="person-role">University of Central Florida</p>
            <p class="person-organization">Co-Founder, Readability Research Foundation</p>
            <p class="person-organization">Chair, Executive Council</p>
          </article>
        </div>

        <div class="column">
          <article class="person-card">
            <div class="person-initials" aria-hidden="true">SW</div>
            <h3 class="title is-4">Dr. Shaun Wallace</h3>
            <p class="person-role">Assistant Professor</p>
            <p class="person-role">Computer Science</p>
            <p class="person-organization">University of Rhode Island</p>
            <p class="person-organization">Co-Founder, Readability Research Foundation</p>
          </article>
        </div>
      </div>

      <div class="joining-message has-text-centered">
        <p class="title is-5">More researchers and community members will be joining soon.</p>
      </div>
    </div>
  </section>

  <section class="section logo-section">
    <div class="container has-text-centered">
      <img
        class="rrf-logo"
        src="{{ '/rrf_logo.png' | relative_url }}"
        alt="Readability Research Foundation logo"
      >
    </div>
  </section>
</main>
