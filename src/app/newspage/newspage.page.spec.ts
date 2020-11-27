import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewspagePage } from './newspage.page';

describe('NewspagePage', () => {
  let component: NewspagePage;
  let fixture: ComponentFixture<NewspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
