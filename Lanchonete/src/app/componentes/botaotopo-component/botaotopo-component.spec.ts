import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaotopoComponent } from './botaotopo-component';

describe('BotaotopoComponent', () => {
  let component: BotaotopoComponent;
  let fixture: ComponentFixture<BotaotopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaotopoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaotopoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
