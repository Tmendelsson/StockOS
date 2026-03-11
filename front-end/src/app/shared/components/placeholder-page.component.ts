import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-page',
  template: `
    <section class="rounded-lg border border-dashed border-[var(--border2)] bg-[var(--surface)] p-10 text-center">
      <p class="font-mono text-xs tracking-widest text-[var(--text3)]">EM CONSTRUCAO</p>
      <h1 class="mt-2 text-3xl font-black tracking-tight">{{ title }}</h1>
      <p class="mx-auto mt-3 max-w-2xl text-sm text-[var(--text2)]">
        Estrutura inicial pronta. Nesta etapa vamos implementar CRUD, filtros, validacoes e integracao da API.
      </p>
    </section>
  `,
})
export class PlaceholderPageComponent {
  @Input({ required: true }) title!: string;
}
