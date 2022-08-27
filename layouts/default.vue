<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <v-list>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon color="pink">mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title> 和合本聖經 讀經 </v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        prepend-icon="mdi-book-open-page-variant-outline"
      >
        <template v-slot:activator>
          <v-list-item-title> 舊約 </v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 摩西五經 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in admins"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="purple" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 歷史書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in history"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="success" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 詩歌書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in psalm"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="red lighten-1" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 大先知書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in prophit1"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="orange" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 小先知書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in prophit2"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="light-blue lighten-1" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

      </v-list-group>
    </v-list>

    <v-divider />

    <v-list>
      <v-list-group
        :value="true"
        prepend-icon="mdi-book-open-page-variant"
      >
        <template v-slot:activator>
          <v-list-item-title> 新約 </v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 福音書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in gospel"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="green accent-4" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 歷史書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in history1"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="red" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 保羅書信 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in paul"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="lime" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 普通書信 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in average"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="purple accent-3" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> 預言書 </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, book], i) in reveal"
            :key="i"
            link
            nuxt
            @click="goto(title, book)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon color="cyan" v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

      </v-list-group>
    </v-list>


    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <!-- <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: '和合本聖經 朗讀',
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      admins: [
        ['創世紀（創）', 'mdi-bookmark-plus', 
          {vid: 'eq1PYzmKQh4', chapter: 50, time: 
          ['00:00:01', '00:04:53', '00:08:32', '00:13:11', '00:17:44',
          '00:20:59', '00:24:40', '00:28:25', '00:31:37', '00:35:43',
          '00:39:47', '00:44:00', '00:47:29', '00:50:32', '00:54:50',
          '00:58:31', '01:01:45', '01:06:16', '01:12:52', '01:20:07',
          '01:23:38', '01:29:19', '01:34:03', '01:37:24', '01:49:32',
          '01:54:59', '02:01:21', '02:10:03', '02:14:09', '02:20:03',
          '02:27:41', '02:37:43', '02:43:29', '02:47:12', '02:52:36',
          '02:57:40', '03:03:57', '03:10:14', '03:15:35', '03:19:46',
          '03:23:03', '03:32:04', '03:39:16', '03:45:54', '03:51:56',
          '03:57:17', '04:02:42', '04:09:04', '04:13:42', '04:19:18']}],
        ['出埃及記（出）', 'mdi-bookmark-plus',
          {vid: 'XMe80Wu0GFU', chapter: 40, time: 
          ['00:00:01', '00:03:03', '00:07:08', '00:12:13', '00:17:59',
          '00:21:51', '00:26:41', '00:30:55', '00:36:53', '00:42:58',
          '00:48:49', '00:50:52', '00:59:38', '01:03:49', '01:09:23',
          '01:14:19', '01:20:46', '01:24:08', '01:28:48', '01:33:25',
          '01:37:02', '01:42:06', '01:47:02', '01:52:17', '01:55:27',
          '02:00:29', '02:05:50', '02:09:21', '02:16:18', '02:24:04',
          '02:30:12', '02:32:49', '02:39:16', '02:43:47', '02:50:07',
          '02:55:05', '03:00:22', '03:04:09', '03:09:12', '03:15:30']}],
        ['利未記（利）', 'mdi-bookmark-plus',
          {vid: 'W5Aa_28EBS8', chapter: 27, time: 
          ['00:00:01', '00:02:45', '00:05:19', '00:08:07', '00:13:25',
          '00:17:28', '00:22:40', '00:28:18', '00:33:56', '00:37:47',
          '00:42:02', '00:48:10', '00:49:39', '00:59:53', '01:08:43',
          '01:13:12', '01:19:06', '01:21:59', '01:26:13', '01:32:04',
          '01:36:44', '01:40:03', '01:45:12', '01:52:14', '01:55:46',
          '02:04:05', '02:12:08']}],
        ['民數記（民）', 'mdi-bookmark-plus',
          {vid: 'tQZ-NWMcmW0', chapter: 36, time: 
          ['00:00:01', '00:06:11', '00:10:29', '00:17:57', '00:25:09',
          '00:30:06', '00:34:35', '00:47:08', '00:51:30', '00:55:50',
          '01:01:17', '01:07:47', '01:10:21', '01:14:53', '01:22:24',
          '01:28:25', '01:37:15', '01:39:29', '01:45:53', '01:49:40',
          '01:54:47', '02:01:06', '02:08:14', '02:13:24', '02:17:37',
          '02:20:36', '02:29:58', '02:33:49', '02:38:21', '02:44:48',
          '02:47:41', '02:55:05', '03:02:03', '03:07:34', '03:10:35', '03:15:45']}],
        ['申命記（申）', 'mdi-bookmark-plus',
          {vid: 'ja6SvGnTrAc', chapter: 34, time: 
          ['00:00:01', '00:08:00', '00:14:17', '00:19:43', '00:28:57',
          '00:34:21', '00:38:25', '00:43:48', '00:47:19', '00:53:15',
          '00:57:02', '01:02:23', '01:08:23', '01:11:59', '01:16:00',
          '01:19:59', '01:23:47', '01:27:20', '01:30:55', '01:34:19',
          '01:37:35', '01:41:30', '01:46:04', '01:49:49', '01:53:24',
          '01:56:12', '02:00:01', '02:03:54', '02:15:04', '02:19:46',
          '02:23:32', '02:29:33', '02:38:23', '02:43:47']}],
      ],
      history: [
        ['約書亞記（書）', 'mdi-bookshelf',
          {vid: 'cSvn6VfH_90', chapter: 24, time: 
          ['00:00:01', '00:03:32', '00:08:02', '00:11:18', '00:15:21',
          '00:18:43', '00:23:49', '00:30:03', '00:37:25', '00:42:28',
          '00:51:17', '00:56:01', '00:59:07', '01:04:52', '01:07:49',
          '01:14:55', '01:16:32', '01:20:26', '01:24:44', '01:30:50',
          '01:32:41', '01:39:38', '01:47:09', '01:50:17']}],
        ['士師記（士）', 'mdi-bookshelf',
          {vid: 'JEavZgpbnvk', chapter: 21, time: 
          ['00:00:01', '00:05:55', '00:09:54', '00:14:38', '00:19:12',
          '00:24:29', '00:31:59', '00:37:14', '00:43:16', '00:52:44',
          '00:55:31', '01:02:55', '01:05:34', '01:10:13', '01:14:21',
          '01:18:14', '01:25:17', '01:27:35', '01:33:15', '01:38:46', '1:46:44']}],
        ['路得記（得）', 'mdi-bookshelf',
          {vid: 'ct5tiJGm4x0', chapter: 4, time: 
          ['00:00:01', '00:04:00', '00:08:29', '00:11:46']}],
        ['撒母耳記上（撒上）', 'mdi-bookshelf',
          {vid: 'z-B_TqctnF8', chapter: 31, time: 
          ['00:00:01', '00:04:43', '00:11:42', '00:15:26', '00:20:01',
          '00:22:32', '00:26:51', '00:30:06', '00:33:11', '00:38:43',
          '00:43:36', '00:46:27', '00:51:13', '00:55:20', '01:05:01',
          '01:11:35', '01:16:21', '01:26:42', '01:31:37', '01:36:00',
          '01:43:29', '01:46:26', '01:51:10', '01:56:41', '02:00:36',
          '02:08:51', '02:14:10', '02:16:28', '02:21:19', '02:23:50', '02:28:59']}],
        ['撒母耳記下（撒下）', 'mdi-bookshelf',
          {vid: 'VuSDCuQiKvA', chapter: 24, time: 
          ['00:00:01', '00:04:15', '00:09:40', '00:16:58', '00:19:36',
          '00:23:39', '00:27:54', '00:33:25', '00:36:13', '00:38:43',
          '00:42:09', '00:47:19', '00:53:24', '01:00:11', '01:06:39',
          '01:13:24', '01:17:53', '01:23:28', '01:30:09', '01:38:19',
          '01:43:24', '01:48:07', '01:54:45', '02:00:27']}],
        ['列王紀上（王上）', 'mdi-bookshelf',
          {vid: '9RNkKszzDmE', chapter: 22, time: 
          ['00:00:01', '00:09:08', '00:18:36', '00:23:49', '00:28:15',
          '00:31:24', '00:36:23', '00:43:36', '00:55:23', '01:00:09',
          '01:05:13', '01:12:44', '01:18:55', '01:25:10', '01:30:39',
          '01:36:16', '01:42:10', '01:45:58', '01:54:32', '01:58:47',
          '02:06:54', '02:12:02']}],
        ['列王紀下（王下）', 'mdi-bookshelf',
          {vid: 'epX8mG0s-xo', chapter: 25, time: 
          ['00:00:01', '00:03:48', '00:09:00', '00:13:55', '00:22:04',
          '00:27:52', '00:33:57', '00:38:23', '00:43:59', '00:51:15',
          '00:58:26', '01:02:11', '01:05:56', '01:10:44', '01:16:04',
          '01:22:19', '01:25:51', '01:33:00', '01:40:19', '01:47:23',
          '01:51:38', '01:55:44', '01:59:50', '02:07:57', '02:11:28']}],
        ['歷代志上（代上）', 'mdi-bookshelf',
          {vid: 'vSTzj65RUH0', chapter: 29, time: 
          ['00:00:01', '00:06:10', '00:12:44', '00:16:06', '00:22:22',
          '00:26:45', '00:36:53', '00:43:01', '00:46:57', '00:53:33',
          '00:55:52', '01:02:09', '01:08:02', '01:10:22', '01:12:38',
          '01:17:13', '01:23:07', '01:28:00', '01:30:45', '01:34:10',
          '01:35:58', '01:41:25', '01:45:11', '01:49:10', '01:52:54',
          '01:56:52', '02:01:41', '02:06:47', '02:11:07']}],
        ['歷代志下（代下）', 'mdi-bookshelf',
          {vid: 'NktP6lnm7ho', chapter: 36, time: 
          ['00:00:01', '00:03:12', '00:07:03', '00:09:45', '00:12:40',
          '00:15:16', '00:23:22', '00:27:40', '00:30:51', '00:36:15',
          '00:39:50', '00:43:13', '00:46:14', '00:50:27', '00:53:19',
          '00:56:28', '00:59:01', '01:01:47', '01:08:07', '01:10:24',
          '01:17:34', '01:20:55', '01:23:36', '01:27:51', '01:33:17',
          '01:39:03', '01:43:13', '01:44:35', '01:49:46', '01:56:28',
          '02:01:39', '02:05:56', '02:12:19', '02:16:40', '02:23:15', '02:29:05']}],
        ['以斯拉記（拉）', 'mdi-bookshelf',
          {vid: '-ozOsxv9ifw', chapter: 10, time: 
          ['00:00:01', '00:02:03', '00:08:03', '00:11:06', '00:15:13',
          '00:18:19', '00:22:36', '00:27:36', '00:33:51', '00:37:57']}],
        ['尼希米記（尼）', 'mdi-bookshelf',
          {vid: 'pPr0RuB6obA', chapter: 13, time: 
          ['00:00:01', '00:02:15', '00:06:14', '00:11:31', '00:15:28',
          '00:19:23', '00:22:40', '00:29:59', '00:34:13', '00:43:06',
          '00:47:44', '00:53:42', '01:00:51']}],
        ['以斯帖記（斯）', 'mdi-bookshelf',
            {vid: '9qslGbs3I5Q', chapter: 10, time: 
          ['00:00:01', '00:03:51', '00:08:03', '00:10:58', '00:13:53',
          '00:16:32', '00:19:12', '00:21:19', '00:24:45', '00:29:49']}],
      ],
      psalm: [
        ['約伯記（伯）', 'mdi-bookmark-music-outline',
          {vid: 'jN8efJtzUXQ', chapter: 42, time: 
          ['00:00:10', '00:03:47', '00:06:09', '00:08:59', '00:11:27',
          '00:14:30', '00:17:48', '00:20:31', '00:22:43', '00:26:16',
          '00:29:01', '00:31:18', '00:34:04', '00:37:02', '00:39:43',
          '00:43:33', '00:46:07', '00:48:05', '00:50:24', '00:53:34',
          '00:56:50', '01:00:22', '01:03:25', '01:05:14', '01:08:14',
          '01:08:53', '01:10:17', '01:12:47', '01:15:37', '01:18:05',
          '01:21:34', '01:25:56', '01:28:20', '01:31:41', '01:35:33',
          '01:37:17', '01:40:51', '01:43:28', '01:47:52', '01:51:11',
          '01:53:40', '01:57:09']}],
        ['詩篇（詩 1-50）', 'mdi-bookmark-music-outline',
          {vid: 'nkacE_31eGw', chapter: 50, time: 
          ['00:00:10', '00:00:51', '00:02:22', '00:03:32', '00:04:58',
          '00:07:02', '00:08:32', '00:11:01', '00:12:19', '00:15:10',
          '00:18:00', '00:19:02', '00:20:21', '00:21:23', '00:22:30',
          '00:23:15', '00:24:55', '00:27:26', '00:34:11', '00:36:20',
          '00:37:34', '00:39:22', '00:43:34', '00:44:39', '00:45:59',
          '00:48:46', '00:50:18', '00:52:49', '00:54:24', '00:55:56',
          '00:57:51', '01:01:38', '01:03:21', '01:05:50', '01:08:27',
          '01:12:29', '01:14:08', '01:19:04', '01:21:43', '01:24:00',
          '01:26:54', '01:28:47', '01:30:59', '01:32:04', '01:35:40',
          '01:38:16', '01:40:07', '01:41:19', '01:43:11', '01:45:53']}],
        ['詩篇（詩 51-100）', 'mdi-bookmark-music-outline',
          {vid: 'bXSqhL5yfeM', chapter: 50, offset: 50, time: 
          ['00:00:01', '00:02:45', '00:04:11', '00:05:22', '00:06:31',
          '00:09:46', '00:11:47', '00:13:50', '00:15:31', '00:18:21',
          '00:20:22', '00:21:33', '00:23:34', '00:25:05', '00:26:35',
          '00:28:37', '00:31:02', '00:32:04', '00:37:09', '00:42:09',
          '00:43:08', '00:46:22', '00:48:59', '00:52:28', '00:55:54',
          '00:57:23', '00:59:04', '01:01:38', '01:09:40', '01:11:42',
          '01:14:27', '01:16:30', '01:17:38', '01:19:54', '01:22:00',
          '01:23:43', '01:26:19', '01:27:21', '01:30:03', '01:36:38',
          '01:39:24', '01:41:25', '01:43:14', '01:44:02', '01:46:53',
          '01:48:15', '01:50:05', '01:51:38', '01:52:54', '01:54:15']}],
        ['詩篇（詩 101-150）', 'mdi-bookmark-music-outline',
          {vid: 'hh3tpqusesY', chapter: 50, offset: 100, time: 
          ['00:00:01', '00:01:12', '00:04:26', '00:07:09', '00:11:05',
          '00:15:37', '00:20:53', '00:25:17', '00:26:59', '00:30:40',
          '00:31:43', '00:32:58', '00:34:18', '00:35:20', '00:36:15',
          '00:38:16', '00:40:25', '00:40:48', '00:43:57', '01:02:15',
          '01:02:58', '01:03:52', '01:04:50', '01:05:35', '01:06:28',
          '01:07:15', '01:08:02', '01:08:55', '01:09:43', '01:10:39',
          '01:11:38', '01:12:17', '01:14:22', '01:14:59', '01:15:25',
          '01:17:57', '01:20:57', '01:22:16', '01:23:33', '01:26:47',
          '01:28:35', '01:30:16', '01:31:40', '01:33:42', '01:36:09',
          '01:38:42', '01:40:09', '01:42:23', '01:44:11', '01:45:22']}],
        ['箴言（箴）', 'mdi-bookmark-music-outline',
          {vid: 'viTqMRsKook', chapter: 31, time: 
          ['00:00:01', '00:03:19', '00:05:15', '00:08:44', '00:11:32',
          '00:13:57', '00:17:34', '00:20:25', '00:24:10', '00:26:01',
          '00:29:32', '00:33:01', '00:36:08', '00:38:46', '00:42:30',
          '00:46:03', '00:49:44', '00:52:52', '00:55:36', '00:59:05',
          '01:02:39', '01:06:07', '01:09:18', '01:13:14', '01:17:12',
          '01:20:33', '01:23:50', '01:27:10', '01:30:33', '01:33:39', '01:37:39']}],
        ['傳道書（傳）', 'mdi-bookmark-music-outline',
          {vid: 'PgLbefwFWtA', chapter: 12, time: 
          ['00:00:01', '00:02:13', '00:06:30', '00:09:33', '00:12:01',
          '00:15:11', '00:17:02', '00:20:59', '00:23:56', '00:27:43',
          '00:30:28', '00:32:18']}],
        ['雅歌（歌）', 'mdi-bookmark-music-outline',
          {vid: '-AhBfI5ZMWc', chapter: 8, time: 
          ['00:00:01', '00:02:23', '00:05:01', '00:06:56', '00:09:52',
          '00:12:53', '00:15:06', '00:17:11']}],
      ],
      prophit1: [
        ['以賽亞書（賽）', 'mdi-book-account',
          {vid: 'VVsPXTSkpxU', chapter: 66, time: 
          ['00:00:01', '00:05:13', '00:08:22', '00:11:57', '00:13:08',
          '00:18:26', '00:20:48', '00:24:42', '00:28:26', '00:32:18',
          '00:38:10', '00:41:01', '00:42:03', '00:45:27', '00:50:50',
          '00:52:42', '00:55:38', '00:58:28', '01:00:10', '01:04:34',
          '01:05:50', '01:08:52', '01:13:03', '01:16:23', '01:20:12',
          '01:22:39', '01:26:14', '01:34:13', '01:34:13', '01:38:52',
          '01:45:19', '01:47:29', '01:50:32', '01:54:42', '01:57:49',
          '01:59:37', '02:04:00', '02:11:10', '02:15:11', '02:16:57',
          '02:22:16', '02:27:39', '02:32:19', '02:37:24', '02:42:55',
          '02:48:00', '02:50:19', '02:53:17', '02:57:22', '03:02:54',
          '03:05:23', '03:10:30', '03:13:24', '03:16:14', '03:19:20',
          '03:21:56', '03:24:18', '03:28:07', '03:31:37', '03:35:37',
          '03:39:58', '03:42:23', '03:44:40', '03:48:36', '03:50:37', '03:55:29']}],
        ['耶利米書（耶）', 'mdi-book-account',
          {vid: '2VBZ0McS_3A', chapter: 52, time: 
          ['00:00:02', '00:03:10', '00:10:30'，'00:15:10'，'00:20:49',
           '00:26:32'，'00:32:14'，'00:38:12'，'00:42:51'，'00:47:48',
           '00:52:20'，'00:57:06'，'01:00:44'，'01:05:35'，'01:10:27',
           '01:15:09'，'01:19:26'，'01:24:46'，'01:29:08'，'01:32:31',
           '01:36:36'，'01:39:47'，'01:45:38'，'01:53:40'，'01:55:59',
           '02:02:53'，'02:07:44'，'02:12:29'，'02:15:49'，'02:22:08',
           '02:26:46'，'02:35:19'，'02:43:47'，'02:49:01'，'02:53:45',
           '02:57:47'，'03:04:14'，'03:08:04'，'03:14:03'，'03:17:03',
           '03:21:00'，'03:24:37'，'03:29:01'，'03:31:34'，'03:38:18',
           '03:39:21'，'03:44:32'，'03:45:56'，'03:53:46'，'04:01:50',
           '04:11:16'，'04:23:40']}],
        ['耶利米哀歌（哀）', 'mdi-book-account',
          {vid: 'Byj50QgerXw', chapter: 5, time: 
          ['0::', '0::', '0::', '0::', '0::']}],
        ['以西結書（結）', 'mdi-book-account',
          {vid: 'd3Ip43Dso5s', chapter: 48, time: 
          ['0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::']}],
        ['但以理書（但）', 'mdi-book-account',
          {vid: 'FxW_T4zEMYA', chapter: 12, time: 
          ['0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::']}],
      ],
      prophit2: [
        ['何西阿書（何）', 'mdi-book-account-outline',
          {vid: '0g833ZkL11M', chapter: 14, time: 
          ['0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::']}],
        ['約珥書（珥）', 'mdi-book-account-outline',
          {vid: 'g0GpjdMbNuI', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['阿摩司書（摩）', 'mdi-book-account-outline',
          {vid: 'iI9SRBgnsy4', chapter: 9, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::']}],
        ['俄巴底亞書（俄）', 'mdi-book-account-outline',
          {vid: '3J85mWUrW_o', chapter: 1, time: 
          ['00:00:02']}],
        ['約拿書（拿）', 'mdi-book-account-outline',
          {vid: 'p40QE9AMrME', chapter: 4, time: 
          ['0::', '0::', '0::', '0::']}],
        ['彌迦書（彌）', 'mdi-book-account-outline',
          {vid: 'WrQbd8B6E50', chapter: 7, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::']}],
        ['那鴻書（鴻）', 'mdi-book-account-outline',
          {vid: 'ZcCBE7qP-i0', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['哈巴谷書（哈）', 'mdi-book-account-outline',
          {vid: 'lAji-KyWG3s', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['西番雅書（番）', 'mdi-book-account-outline',
          {vid: 'crS6thEOdgM', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['哈該書（該）', 'mdi-book-account-outline',
          {vid: 'p-emZFg-tCk', chapter: 2, time: 
          [['0::', '0::']}],
        ['撒迦利亞書（亞）', 'mdi-book-account-outline',
          {vid: 'IP6c98aTdHg', chapter: 14, time: 
          ['0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::',
           '0::', '0::', '0::', '0::', '0::']}],
        ['瑪拉基書（瑪）', 'mdi-book-account-outline',
          {vid: 'fUJD4SRn8PM', chapter: 4, time: 
          ['0::', '0::', '0::', '0::']}],
      ],
      gospel: [
        ['馬太福音（太）', 'mdi-book-open-variant',
          {vid: 'jJlQSbyra8Y', chapter: 28, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::']}],
        ['馬可福音（可）', 'mdi-book-open-variant',
          {vid: 'nzUpXx5tL_I', chapter: 16, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['路加福音（路）', 'mdi-book-open-variant',
          {vid: 'XOxi5qJ5Ftc', chapter: 24, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::']}],
        ['約翰福音（約）', 'mdi-book-open-variant',
          {vid: 'yTxEVBQD25A', chapter: 21, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::']}],
      ],
      history1: [
        ['使徒行傳（徒）', 'mdi-book-open-outline',
          {vid: 'wunmKUVK73w', chapter: 28, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::']}],
      ],
      paul: [
        ['羅馬書（羅）', 'mdi-book-edit',
          {vid: 'EYjtLR_BJO0', chapter: 16, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['哥林多前書（林前）', 'mdi-book-edit',
          {vid: 'ckncJ11qNX4', chapter: 16, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['哥林多後書（林後）', 'mdi-book-edit',
          {vid: '2RLJIepD2jw', chapter: 13, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::']}],
        ['加拉太書（加）', 'mdi-book-edit',
          {vid: 'CGLhuQHcPVs', chapter: 6, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['以弗所書（弗）', 'mdi-book-edit',
          {vid: 'xg9ibjLeNss', chapter: 6, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['腓立比書（腓）', 'mdi-book-edit',
          {vid: 'aA1Knz4VdoA', chapter: 4, time: 
          ['0::', '0::', '0::', '0::']}],
        ['歌羅西書（西）', 'mdi-book-edit',
          {vid: 'z0m0KJqaN-g', chapter: 4, time: 
          ['0::', '0::', '0::', '0::']}],
        ['帖撒羅尼迦前書（帖前）', 'mdi-book-edit',
          {vid: 'eDSldlng_3g', chapter: 5, time: 
          ['0::', '0::', '0::', '0::', '0::',]}],
        ['帖撒羅尼迦後書（帖後）', 'mdi-book-edit',
          {vid: 'Ysms4IoHXQ4', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['提摩太前書（提前）', 'mdi-book-edit',
          {vid: '_ipaCWI-E2c', chapter: 6, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::']}],
        ['提摩太後書（提後）', 'mdi-book-edit',
          {vid: 'VA2WokWpKuU', chapter: 4, time: 
          ['0::', '0::', '0::', '0::']}],
        ['提多書（多）', 'mdi-book-edit',
          {vid: '2VZODGUk2sg', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['腓利門書（門）', 'mdi-book-edit',
          {vid: 'oedA4PXBuYw', chapter: 1, time: 
          ['00:00:01']}],
      ],
      average: [
        ['希伯來書（來）', 'mdi-book-edit-outline',
          {vid: '-d2GYrd6PDE', chapter: 13, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::']}],
        ['雅各書（雅）', 'mdi-book-edit-outline',
          {vid: 'Sx53lS7LaLQ', chapter: 5, time: 
          ['0::', '0::', '0::', '0::', '0::']}],
        ['彼得前書（彼前）', 'mdi-book-edit-outline',
          {vid: '8UTGLqMMy3A', chapter: 5, time: 
          ['0::', '0::', '0::', '0::', '0::']}],
        ['彼得後書（彼後）', 'mdi-book-edit-outline',
          {vid: 'o7gtpqkq-1I', chapter: 3, time: 
          ['0::', '0::', '0::']}],
        ['約翰一書（約壹）', 'mdi-book-edit-outline',
          {vid: 'v21I8n53CiI', chapter: 5, time: 
          ['0::', '0::', '0::', '0::', '0::']}],
        ['約翰二書（約貳）', 'mdi-book-edit-outline',
          {vid: '1rB3NYqMBDg', chapter: 1, time: 
          ['00:00:01']}],
        ['約翰三書（約叁）', 'mdi-book-edit-outline',
          {vid: 'xjlLwyfbkiw', chapter: 1, time: 
          ['00:00:01']}],
        ['猶大書（猶）', 'mdi-book-edit-outline',
          {vid: 'fmLnWsb165w', chapter: 1, time: 
          ['00:00:01']}],
      ],
      reveal: [
        ['啟示錄（啟）', 'mdi-book-lock',
          {vid: 'Sc-1NBMtR1A', chapter: 22, time: 
          ['0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::', '0::', '0::', '0::',
          '0::', '0::']}],
      ],
    }
  },
  methods: {
    goto(title, book) {
      let new_query = { ...book }
      new_query['title'] = title
      this.$router.replace({ name: 'ot', query: new_query })
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>
