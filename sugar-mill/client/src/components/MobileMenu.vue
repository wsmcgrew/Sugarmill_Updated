<template>
  <b-navbar class="d-md-none" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">
      <font-awesome-icon icon="ribbon" />

      Sugar mill
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collaps"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mb-3">
        <b-nav-item
          v-for="item in items"
          :key="item.message"
          class="mt-3 mobile-link"
          exact-active-class="active"
          :to="item.route"
        >
          <b-icon :icon="item.icon" class="mr-2 ml-2"></b-icon>
          {{ item.label }} </b-nav-item
        >>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    items: Array
  }
};
</script>
