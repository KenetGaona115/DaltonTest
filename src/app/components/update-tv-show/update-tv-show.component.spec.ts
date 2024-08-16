import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTvShowComponent } from './update-tv-show.component';

describe('UpdateTvShowComponent', () => {
  let component: UpdateTvShowComponent;
  let fixture: ComponentFixture<UpdateTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTvShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
