import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModallibroPage } from './modallibro.page';

describe('ModallibroPage', () => {
  let component: ModallibroPage;
  let fixture: ComponentFixture<ModallibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModallibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModallibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
