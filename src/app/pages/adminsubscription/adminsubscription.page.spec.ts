import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminsubscriptionPage } from './adminsubscription.page';

describe('AdminsubscriptionPage', () => {
  let component: AdminsubscriptionPage;
  let fixture: ComponentFixture<AdminsubscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminsubscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
