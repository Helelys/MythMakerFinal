import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaoGeradorDnd } from './missao-gerador-dnd';

describe('MissaoGeradorDnd', () => {
  let component: MissaoGeradorDnd;
  let fixture: ComponentFixture<MissaoGeradorDnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissaoGeradorDnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissaoGeradorDnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
