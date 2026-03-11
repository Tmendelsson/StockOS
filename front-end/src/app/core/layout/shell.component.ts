import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-[var(--bg)] text-[var(--text)] md:grid md:grid-cols-[260px_1fr]">
      <aside class="hidden border-r border-[var(--border)] bg-[var(--surface)] p-4 md:block">
        <div class="mb-6 flex items-center gap-3 border-b border-[var(--border)] pb-4">
          <div class="grid h-9 w-9 place-content-center rounded-md bg-[var(--accent)] font-black text-black">S</div>
          <div>
            <p class="text-lg font-semibold tracking-tight">StockOS</p>
            <p class="font-mono text-xs text-[var(--text2)]">Enterprise Inventory</p>
          </div>
        </div>

        <nav class="space-y-1 text-sm">
          <a routerLink="/dashboard" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Dashboard</a>
          <a routerLink="/products" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Produtos</a>
          <a routerLink="/stock-movements" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Movimentacoes</a>
          <a routerLink="/alerts" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Alertas</a>
          <a routerLink="/csv-import" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Importacao CSV</a>
          <a routerLink="/audit-logs" routerLinkActive="bg-[var(--surface2)] text-[var(--accent)]" class="block rounded-md px-3 py-2 text-[var(--text2)] transition hover:bg-[var(--surface2)] hover:text-[var(--text)]">Auditoria</a>
        </nav>
      </aside>

      <main>
        <header class="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[rgba(17,19,24,0.85)] px-4 py-3 backdrop-blur md:px-6">
          <p class="font-mono text-xs text-[var(--text2)]">STOCKOS CONTROL CENTER</p>
          <div class="flex items-center gap-3">
            <button class="rounded-md border border-[var(--border2)] px-3 py-1.5 text-xs text-[var(--text2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Nova Acao</button>
            <div class="grid h-8 w-8 place-content-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent2))] text-xs font-bold text-black">AD</div>
          </div>
        </header>

        <section class="p-4 md:p-6">
          <router-outlet />
        </section>
      </main>
    </div>
  `,
})
export class ShellComponent {}
