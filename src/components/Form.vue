<template>
  <div class="card">
    <div class="container">
      <form>
        <div class="row">
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label for="formGroupExampleInput">Conta de Origem</label>
              <input
                @keyup="validarOrigem"
                required
                maxlength="9"
                id="origem"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label for="formGroupExampleInput">Conta de Destino</label>
              <input
                @keyup="validarDestino"
                id="destino"
                maxlength="9"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label for="formGroupExampleInput">Valor da Tranfêrencia</label>

              <money
                id="valor"
                class="form-control"
                v-model="price"
                v-bind="money"
              ></money>
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label for="formGroupExampleInput">Data da Transferência</label>
              <input id="dataTransferencia" type="date" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label for="formGroupExampleInput">Data de Agendamento</label>
              <input
                disabled
                type="text"
                v-bind:value="dataAgendamento"
                class="form-control"
              />
            </div>
          </div>

          <div style="padding-top: 14px" class="d-flex align-items-center">
            <!-- <button
              type="button"
              v-on:click="agendar"
              class="btn btn-primary btn-sm"
            >
              Agendar
            </button> -->

            <button @click="agendar()" class="btn btn-primary" type="button">
              Agendar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  components: { Money },

  name: "Form",

  methods: {
    obterValore: () => {
      return {
        contaOrigem: document.getElementById("origem").value,
        contaDestino: document.getElementById("destino").value,
        valor: document.getElementById("valor").value,
        dataTransferencia:document.getElementById("dataTransferencia").value
      };
    },
    validarOrigem: function () {
      let origem = document.getElementById("origem").value;
      if (origem != "") {
        if (isNaN(origem)) {
          document.getElementById("origem").value = "";
          return false;
        } else {
          return true;
        }
      }
    },

    validarDestino: function () {
      let destino = document.getElementById("destino").value;
      if (destino != "") {
        if (isNaN(destino)) {
          document.getElementById("destino").value = "";
          return false;
        } else {
          return true;
        }
      }
    },

    agendar: function () {
      let dataTransferencia =
        document.getElementById("dataTransferencia").value;

      let valor = document.getElementById("valor").value;

      let origem = document.getElementById("origem").value;

      let destino = document.getElementById("destino").value;

      let validar =
        dataTransferencia == "" || valor == "" || origem == "" || destino == "";

      if (validar) {
        alert("Todos os campos são obrigatórios");
        return;
      }
      if (origem.length != 9 || destino.length != 9) {
        alert("O número da conta está incorreto!");
        return;
      }
      this.$emit("incrementar", this.obterValore());
    },
  },
  created() {
    this.$emit("handler", this.setValue);
  },
  data() {
    function dataAtualFormatada() {
      var data = new Date(),
        dia = data.getDate().toString().padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"),
        ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    }
    return {
      price: 0,

      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " ",
        precision: 2,
        masked: false,
      },
      origem: "",
      dataAgendamento: dataAtualFormatada(),
    };
  },
};
</script>
