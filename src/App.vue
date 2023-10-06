<template>
  <div>
    <!-- <TheHeader /> -->
    <!-- <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!-- if we have to send only to default slot -->
    <!-- <course-goals #default="slotProps">
      <h2>
        {{ sloProps.item }}
      </h2>
      <p>
        {{ sloProps['another-prop'] }}
      </p>
    </course-goals> -->
    <!-- <course-goals>
     <template #default="sloProps">
      <h2>
        {{ sloProps.item }}
      </h2>
      <p>
        {{ sloProps['another-prop'] }}
      </p>
     </template>
    </course-goals> -->

    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <manage-goals v-if="selectedComponent=== 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent=== 'active-goals'"></active-goals> -->
    <!-- Now we will get the same result but this time using dynamic components -->
    <!-- This compoonent does not work key alone. and require key that is ':is' -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components:{
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals
    //We can also define components locally in this way
    // TheHeader: TheHeader
    //Also write in this way
    // TheHeader
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>