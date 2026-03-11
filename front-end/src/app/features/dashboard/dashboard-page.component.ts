import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="space-y-5">
      <div>
        <p class="font-mono text-xs tracking-widest text-[var(--text3)]">RESUMO GERAL</p>
        <h1 class="text-2xl font-extrabold tracking-tight md:text-3xl">Dashboard de estoque</h1>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <article class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <p class="text-xs uppercase tracking-wide text-[var(--text2)]">Total de produtos</p>
          <p class="mt-2 text-3xl font-black">284</p>
        </article>
        <article class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <p class="text-xs uppercase tracking-wide text-[var(--text2)]">Itens em estoque</p>
          <p class="mt-2 text-3xl font-black">12.540</p>
        </article>
        <article class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <p class="text-xs uppercase tracking-wide text-[var(--text2)]">Alertas ativos</p>
          <p class="mt-2 text-3xl font-black text-[var(--danger)]">3</p>
        </article>
        <article class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <p class="text-xs uppercase tracking-wide text-[var(--text2)]">Movimentacoes no mes</p>
          <p class="mt-2 text-3xl font-black">426</p>
        </article>
      </div>

      <section class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-sm font-semibold">Movimentacoes por periodo</h2>
          <span class="font-mono text-xs text-[var(--text2)]">ultimos 7 dias</span>
        </div>
        <canvas #movementsChart class="max-h-72 w-full"></canvas>
      </section>
    </div>
  `,
})
export class DashboardPageComponent implements AfterViewInit {
  @ViewChild('movementsChart') chartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const chart = this.chartRef.nativeElement;

    new Chart(chart, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
          {
            label: 'Entradas',
            data: [12, 18, 14, 22, 17, 20, 24],
            borderColor: '#00e5a0',
            backgroundColor: 'rgba(0,229,160,0.15)',
            tension: 0.35,
            fill: true,
          },
          {
            label: 'Saidas',
            data: [8, 10, 11, 9, 13, 12, 14],
            borderColor: '#ff6b35',
            backgroundColor: 'rgba(255,107,53,0.08)',
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#8892a4' } },
        },
        scales: {
          x: {
            ticks: { color: '#8892a4' },
            grid: { color: '#1e2330' },
          },
          y: {
            ticks: { color: '#8892a4' },
            grid: { color: '#1e2330' },
          },
        },
      },
    });
  }
}
