<template>
  <div id="app">

    <Form v-on:incrementar="adicionarQuantidade($event)" />
    <Table v-bind:agendas="agendas"/>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",
  data() {
    return {
      agendas: [],
    };
  },
  methods: {
    adicionarQuantidade(agenda) {
     this.agendas.push(agenda)
    },
  },
  components: {
    Form,
    Table,
  },
};
</script>

