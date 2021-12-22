<template>
  <div id="app">
    <Form v-on:incrementar="agendar($event)" />
    <Table v-bind:agendas="agendas" />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
import WeService from "./services/WebService";

export default {
  name: "App",
  data() {
    return {
      agendas: [],
    };
  },
  mounted() {
    this.obterAgendas();
  },
  methods: {
    obterAgendas() {
      WeService.getAll()
        .then((response) => {
          this.agendas = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cadastrarAgenda(agenda) {

      agenda.valor = parseFloat(agenda.valor.replace("R$","").replace(".","").replace(",",".").trim())
      WeService.create(agenda)
        .then((response) => {
          this.agendas.push(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    agendar(agenda) {
      this.cadastrarAgenda(agenda);
    },
  },
  components: {
    Form,
    Table,
  },
};
</script>

