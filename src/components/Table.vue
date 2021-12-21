


<template>
  <div class="container">
    <br />
    <br />
    <h3>Agendas</h3>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Conta de Origem</th>
          <th scope="col">Conta de Destino</th>
          <th scope="col">Valor da Tranfêrencia</th>
          <th scope="col">Data da Transferência</th>
          <th scope="col">Data de Agendamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(agenda, index) in agendas" :key="index">
          <th>{{ agenda.contaOrigem }}</th>
          <th>{{ agenda.contaDestino }}</th>
          <th>{{ agenda.valor }}</th>
          <th>{{ agenda.dataTransferencia | moment("DD/MM/YYYY") }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: { agendas: Array },
};
</script>
