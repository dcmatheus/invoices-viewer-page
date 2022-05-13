<script setup>
import { ref } from 'vue';
import TableCell from '../units/TableCell.vue';
import TableButton from '../units/TableButton.vue';
import TableLine from '../units/TableLine.vue';
import api from '../api';

const invoices = ref([]);
const fetchInvoices = async () => {
  const response = await api.getInvoices();
  invoices.value = response;
};

fetchInvoices();
</script>

<template>
<div>
  <TableLine class="pl-2 text-text">
    <TableCell>NOTA FISCAL</TableCell>
    <TableCell>SACADO</TableCell>
    <TableCell>CEDENTE</TableCell>
    <TableCell>EMISSÃO</TableCell>
    <TableCell>VALOR</TableCell>
    <TableCell>STATUS</TableCell>
    <TableCell></TableCell>
  </TableLine>
  <TableLine class="pl-2 border rounded-lg" v-for="(invoice, index) in invoices" :key="index">
    <TableCell>{{ invoice.nNf }}</TableCell>
    <TableCell>{{ invoice.buyers }}</TableCell>
    <TableCell>{{ invoice.providers }}</TableCell>
    <TableCell>{{ invoice.emissionDate }}</TableCell>
    <TableCell class="text-primary">R$ {{ invoice.value }}</TableCell>
    <TableCell class="text-primary">{{ invoice.orderStatusBuyer }}</TableCell>
    <TableButton>Dados do cedente</TableButton>
  </TableLine>
</div>
</template>
