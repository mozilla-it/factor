<template>
  <form class="search-bar" @submit="handleSubmit" method="GET">
    <fieldset>
      <legend class="visually-hidden">search</legend>
      <div class="search-bar__fields">
        <label for="search-query" class="visually-hidden">search-input</label>
        <!-- TODO: fix placeholder fluent. search 'searchFormLabel' and replace with fluent in all code -->
        <input
          type="text"
          id="search-query"
          name="query"
          v-model="searchQuery"
          class="search-bar__input"
          ref="searchQueryField"
          :placeholder="searchFormLabel"
        />
        <button
          type="button"
          v-if="searchQuery && searchQuery.length > 0"
          @click="clearQuery"
          class="search-bar__clear-button"
        >
          <Icon id="x" :width="20" :height="20" />
          <span class="visually-hidden">clear search</span>
        </button>
        <button type="submit" class="search-bar__submit">
          <Icon id="search" :width="18" :height="18" />
          <span class="visually-hidden">search</span>
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'SearchBar',
  props: {
    searchFormLabel: String,
    searchFormHandler: Function,
  },
  components: {
    Icon,
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (!this.searchQuery.length > 0) {
        this.$refs.searchQueryField.focus();
      } else {
        this.$emit('close-search-bar');
      }
      this.searchFormHandler(this.searchQuery);
    },
    clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('clear-query');
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  mounted() {
    this.$refs.searchQueryField.focus();
  },
};
</script>

<style>
.search-bar {
  margin-right: auto;
  width: 100%;
  max-width: 31em;
}
.search-bar fieldset {
  border: 0;
  padding: 0;
}
.search-bar__fields {
  display: flex;
  flex-direction: row;
  position: relative;
}
.search-bar__fields:focus .search-bar__input,
.search-bar__fields:hover .search-bar__input {
  border: 1px solid var(--blue-60);
}
.search-bar__fields:focus button[type='submit'],
.search-bar__fields:hover button[type='submit'] {
  border-right: 1px solid var(--blue-60);
}
.search-bar__fields input,
.search-bar__fields button[type='submit'] {
  font-size: 1.15em;
}
.search-bar__input {
  border: 1px solid var(--gray-30);
  width: 100%;
  background-color: var(--white);
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  padding: 0.5em 1.75em 0.5em 3em;
}
.search-bar__input::placeholder {
  text-align: center;
}

.search-bar__submit {
  border: 0;
  border-right: 1px solid var(--gray-30);
  appearance: none;
  background-color: var(--white);
  width: 2.5em;
  padding: 0.5em;
  margin-right: -1px;
  position: absolute;
  left: 1px;
  top: 1px;
  bottom: 1px;
  transition: background-color 0.2s ease-in-out;
}
.search-bar__submit:hover {
  background-color: var(--gray-20);
}
.search-bar__submit img {
  vertical-align: middle;
  width: 1.15em;
}
.search-bar__clear-button {
  background-color: var(--white);
  position: absolute;
  border: 0;
  top: 3px;
  right: 1px;
  bottom: 1px;
  width: 2em;
  padding: 0;
  line-height: 1;
}

@media (min-width: 57.5em) {
  .search-bar__clear-button {
    width: 3em;
  }
}
.search-bar__clear-button:hover {
  color: var(--blue-60);
}

.search-bar--small {
  padding: 1em;
  max-width: none;
  background: var(--white);
  margin-bottom: 1em;
  position: fixed;
  left: 0;
  right: 0;
  top: 5em;
  z-index: var(--layerTopBar);
  box-shadow: var(--shadowCard);
}
</style>
