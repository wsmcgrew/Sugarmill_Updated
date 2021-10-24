<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <router-link to="/" class="no-underline">
        <h5>
          <font-awesome-icon icon="ribbon" />
          Randy's Sugarmill
        </h5>
        <strong> sugar </strong></router-link
      >
    </div>

    <!--<ul class="list-unstyled components" id="sideMenuList">
      <li v-for="item in items" :key="item.message" class="side-link">
        <router-link :to="item.route">
          <b-icon :icon="item.icon" class="mr-2"></b-icon>
          <span> {{ item.label }} </span>
        </router-link>
      </li>
    </ul>-->
  </nav>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    items: Array
  }
};
</script>
