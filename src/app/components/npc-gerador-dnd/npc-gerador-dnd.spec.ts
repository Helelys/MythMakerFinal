import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcGeradorDnd } from './npc-gerador-dnd';

describe('NpcGeradorDnd', () => {
  let component: NpcGeradorDnd;
  let fixture: ComponentFixture<NpcGeradorDnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpcGeradorDnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcGeradorDnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
