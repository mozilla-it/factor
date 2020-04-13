<template>
  <header class="f-header">
    <div class="f-header__column">
      <img src="../assets/mozilla-logo.png" class="f-header__logo" />
    </div>
    <div class="f-header__column">
      <SearchBar class="f-header__search" />
    </div>
    <div class="f-header__column">
      <nav class="f-nav">
        <ul class="f-nav__items nav-list">
          <li class="nav-list__item" v-for="(item, idx) in navList" :key="idx">
            {{ item }}
          </li>
        </ul>
      </nav>
      <div class="f-profile">
        <img src="../assets/default-profile.png" class="f-profile__image" />
      </div>
    </div>
  </header>
</template>
<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Header',
  components: { SearchBar },
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
@import '../shared/styles/examples';

.f-header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5em;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-30);

  & #{&}__column {
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

  & #{&}__logo {
    display: block;
    height: calc(100% - 2em);
    margin: 1em;
    max-width: 100%;
  }
}

.f-nav {
  flex: 1;
}

.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & #{&}__item {
    margin: 0 1em;
  }
}
</style>
