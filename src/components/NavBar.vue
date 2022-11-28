<template>
  <v-card
    class="nav-bar overflow-hidden"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in navBarList" :key="item.id"
          @click="toPath(item)">
            <v-list-item-icon >
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    group: null,
    navBarList: [
      {
        id: 1,
        path: '/bubble',
        name: 'Bubble',
        title: 'Bubble'
      },
      {
        id: 2,
        path: '/loader-neon',
        name: 'LoaderNeon',
        title: 'LoaderNeon'
      },
      {
        id: 3,
        path: '/custom-checkbox',
        name: 'CustomCheckbox',
        title: 'CustomCheckbox'
      },
      {
        id: 4,
        path: '/button',
        name: 'Button',
        title: 'Button'
      },
      {
        id: 5,
        path: '/loader',
        name: 'Loader',
        title: 'Loader'
      },
      {
        id: 6,
        path: '/cup-of-tea',
        name: 'CupOfTea',
        title: 'CupOfTea'
      },
      {
        id: 7,
        path: '/spring-loader',
        name: 'SpringLoader',
        title: 'SpringLoader'
      },
      {
        id: 8,
        path: '/persent-loader',
        name: 'PersentLoader',
        title: 'PersentLoader'
      },
      {
        id: 9,
        path: '/foto-slider',
        name: 'FotoSlider',
        title: 'FotoSlider'
      }
      // {
      //   id: 9,
      //   path: '/orb-shape',
      //   name: 'OrbShape',
      //   title: 'OrbShape'
      // }
    ]
  }),
  methods: {
    toPath (item) {
      if (this.$router.currentRoute.name === item.name) return

      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-bar {
    height: 200px;
    width: 100%;
    margin-bottom: 260px;
  }
  ::v-deep .v-overlay__scrim {
    opacity: 0 !important;
  }
</style>
