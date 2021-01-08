const header = document.querySelector('.mdl-layout__header');
const markup = `
<div class="mdl-layout__header-row">
  <!-- Title -->
  <a href="/" class="mdl-navigation__link mdl-layout-title">Learning MDL</a>
  <!-- Add spacer, to align navigation to the right -->
  <div class="mdl-layout-spacer"></div>
  <!-- Navigation -->
  <nav class="mdl-navigation">
    <a class="mdl-navigation__link" href="badges.html">Badges</a>
    <a class="mdl-navigation__link" href="buttons.html">Buttons</a>
    <a class="mdl-navigation__link" href="cards.html">Cards</a>
    <a class="mdl-navigation__link" href="">Link</a>
  </nav>
</div>
`;

header.insertAdjacentHTML('beforeend', markup);
