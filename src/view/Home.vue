<template>
  <div>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";

export default {
  name: "Home",
  components: {
    Header,
    Main
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
