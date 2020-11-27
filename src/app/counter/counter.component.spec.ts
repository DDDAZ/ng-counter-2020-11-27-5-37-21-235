import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase count when click add button', () => {

    // given
    component.count = 0;

    // when
    component.increaseCount();

    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click decrease button', () => {

    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.count).toBe(-1);
  });

  it('should disappear increase button when count > 10', () => {

    // given
    component.count = 11;

    // when
    component.changeButton();

    // then
    expect(component.increaseButtonAppear).toBe(false);
  });

  it('should disappear decrease button when count < 0', () => {

    // given
    component.count = -1;

    // when
    component.changeButton();

    // then
    expect(component.decreaseButtonAppear).toBe(false);
  });

  it('should text background color be green when count < 0', () => {

    // given
    component.count = -1;

    // when
    component.changeColor();

    // then
    expect(component.textBackgroundColor).toBe('green');
  });

  it('should text background color be red when count > 10', () => {

    // given
    component.count = 11;

    // when
    component.changeColor();

    // then
    expect(component.textBackgroundColor).toBe('red');
  });

  it('should text background color be white when count = 0', () => {

    // given
    component.count = 0;

    // when
    component.changeColor();

    // then
    expect(component.textBackgroundColor).toBe('white');
  });

  it('should text background color be white when count = 10', () => {

    // given
    component.count = 10;

    // when
    component.changeColor();

    // then
    expect(component.textBackgroundColor).toBe('white');
  });

  it('should count be reset as 0 when click reset button', () => {

    // given
    component.count = 5;

    // when
    component.resetCount();

    // then
    expect(component.count).toBe(0);
  });
});
