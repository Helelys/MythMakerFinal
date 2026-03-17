import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Npc } from './npc';

describe('Npc', () => {
  let component: Npc;
  let fixture: ComponentFixture<Npc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Npc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Npc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
