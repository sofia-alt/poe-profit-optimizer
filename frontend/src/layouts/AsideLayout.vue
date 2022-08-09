<template>
  <aside class="aside">
    <nav class="aside__nav">
      <a href="#" class="aside__logo">
        <img alt="Logo" class="aside__img" src="../assets/img/logo.png" />
      </a>
      <ul class="aside__list">
        <li class="aside__item">
          <router-link :to="{ name: 'pricing' }" class="aside__link">
            Pricing
          </router-link>
        </li>
        <li class="aside__item">
          <router-link :to="{ name: 'statistics' }" class="aside__link">
            Statistics
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script>
export default {
  name: "AsideLayout",
};
</script>
