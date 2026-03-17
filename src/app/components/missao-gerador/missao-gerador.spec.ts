import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaoGerador } from './missao-gerador';

describe('MissaoGerador', () => {
  let component: MissaoGerador;
  let fixture: ComponentFixture<MissaoGerador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissaoGerador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissaoGerador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
