<script setup>
import TableCell from '../units/TableCell.vue';
import TableButton from '../units/TableButton.vue';
import TableLine from '../units/TableLine.vue';
</script>

<template>
<div>
  <TableLine class="text-text">
    <TableCell>NOTA FISCAL</TableCell>
    <TableCell>SACADO</TableCell>
    <TableCell>CEDENTE</TableCell>
    <TableCell>EMISSÃO</TableCell>
    <TableCell>VALOR</TableCell>
    <TableCell>STATUS</TableCell>
    <TableCell></TableCell>
  </TableLine>
  <TableLine class="border rounded-lg">
    <TableCell>1234</TableCell>
    <TableCell>SACADO 001</TableCell>
    <TableCell>CEDENTE 002</TableCell>
    <TableCell>12/02/2020</TableCell>
    <TableCell class="text-primary">R$ 49.725,00</TableCell>
    <TableCell class="text-primary">Recebido</TableCell>
    <TableButton>Dados do cedente</TableButton>
  </TableLine>
  <TableLine class="border rounded-lg">
    <TableCell>1234</TableCell>
    <TableCell>SACADO 001</TableCell>
    <TableCell>CEDENTE 002</TableCell>
    <TableCell>12/02/2020</TableCell>
    <TableCell class="text-primary">R$ 49.725,00</TableCell>
    <TableCell class="text-primary">Recebido</TableCell>
    <TableButton>Dados do cedente</TableButton>
  </TableLine>
  <TableLine class="border rounded-lg">
    <TableCell>1234</TableCell>
    <TableCell>SACADO 001</TableCell>
    <TableCell>CEDENTE 002</TableCell>
    <TableCell>12/02/2020</TableCell>
    <TableCell class="text-primary">R$ 49.725,00</TableCell>
    <TableCell class="text-primary">Recebido</TableCell>
    <TableButton>Dados do cedente</TableButton>
  </TableLine>
</div>
</template>
