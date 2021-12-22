


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
          <th scope="col">Taxa</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(agenda, index) in agendas" :key="index">
          <th v-if="agenda.contaOrigem">{{ agenda.contaOrigem }}</th>
          <th v-else>Item não cadastrado</th>

          <th v-if="agenda.contaDestino ">{{ agenda.contaDestino }}</th>
          <th v-else>Item não cadastrado</th>


          <th  v-if="agenda.valor">{{ agenda.valor }}</th>
          <th v-else>Item não cadastrado</th>

          <th  v-if="agenda.dataTransferencia " >{{ agenda.dataTransferencia | moment("DD/MM/YYYY") }}</th>
          <th v-else>Item não cadastrado</th>


          <th  v-if="agenda.dataAgendamento " >{{ agenda.dataAgendamento | moment("DD/MM/YYYY") }}</th>
          <th v-else>Item não cadastrado</th>


          <th  v-if="agenda.taxa " >{{ agenda.taxa }}</th>
          <th v-else>Item não cadastrado</th>

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
