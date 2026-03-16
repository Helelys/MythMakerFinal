import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcGenerator } from './npc-generator';

describe('NpcGenerator', () => {
  let component: NpcGenerator;
  let fixture: ComponentFixture<NpcGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpcGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
