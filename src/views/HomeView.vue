<template>
  <header>
    <h1>Voltinha.app</h1>
  </header>

  <v-card rounded flat>
    <v-card-title>

      <h2>Lista de Corridas</h2>
    </v-card-title>
    <v-data-table :items="items" :headers="headers" disable-sort>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn color="primary" append-icon="mdi-arrow-right-bold" flat :id="item.id" rounded
          @click="() => $router.push('/run')">
          Detalhes
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { title: 'Corrida', value: 'name' },
      { title: 'Iniciada em:', value: 'startedAt' },
      { title: 'Finalizada em:', value: 'finishedAt' },
      { title: '', value: 'actions' },
    ],
    items: [
      {
        id: 0,
        name: 'Corrida de Terça',
        createdAt: new Date('2024-06-09T17:20:51.465Z').toLocaleString('pt-br'),
        startedAt: new Date('2024-06-09T17:21:20.465Z').toLocaleString('pt-br'),
        finishedAt: new Date('2024-06-09T17:23:48.465Z').toLocaleString('pt-br'),
        actions: null,
        description: 'Corridinha curta a tarde, estava muito quente acabei passando mal.'
      }
    ],
  }),
}
</script>