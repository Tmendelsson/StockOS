import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  template: `
    <div class="relative grid min-h-screen place-content-center overflow-hidden bg-[var(--bg)] px-4">
      <div class="pointer-events-none absolute inset-0 opacity-30" style="background-image:linear-gradient(var(--border) 1px, transparent 1px),linear-gradient(90deg, var(--border) 1px, transparent 1px);background-size:40px 40px"></div>
      <div class="relative w-full max-w-md rounded-xl border border-[var(--border2)] bg-[var(--surface)] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div class="mb-8 text-center">
          <h1 class="text-3xl font-black tracking-tight">StockOS</h1>
          <p class="mt-2 font-mono text-xs text-[var(--text2)]">Acesso ao painel empresarial</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
          <div>
            <label class="mb-1 block text-xs text-[var(--text2)]">E-mail</label>
            <input formControlName="email" class="w-full rounded-md border border-[var(--border2)] bg-[var(--surface2)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]" type="email" placeholder="admin@empresa.com" />
          </div>

          <div>
            <label class="mb-1 block text-xs text-[var(--text2)]">Senha</label>
            <input formControlName="password" class="w-full rounded-md border border-[var(--border2)] bg-[var(--surface2)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]" type="password" placeholder="••••••••" />
          </div>

          <button [disabled]="form.invalid" class="w-full rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50" type="submit">Entrar no sistema</button>
        </form>
      </div>
    </div>
  `,
})
export class LoginPageComponent {
  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  });

  constructor(private readonly router: Router) {}

  submit(): void {
    if (this.form.valid) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
