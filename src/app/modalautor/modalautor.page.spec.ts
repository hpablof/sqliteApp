import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalautorPage } from './modalautor.page';

describe('ModalautorPage', () => {
  let component: ModalautorPage;
  let fixture: ComponentFixture<ModalautorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalautorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalautorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
