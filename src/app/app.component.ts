import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChildren("midiv")
  divRefs: QueryList<ElementRef>;

  @ViewChildren(TimerComponent)
  componenteRefs: QueryList<TimerComponent>;

  title = 'elementRefViewchild';

  ngAfterViewInit(): void {
    console.log(this.divRefs); 
    this.divRefs.forEach(element => {
      console.log(element); 
      element.nativeElement
      .innerHTML = "Hola Curso Element Ref"; 
    });

    console.log(this.componenteRefs);
  }

  eventoAction1() {

    this.componenteRefs.forEach(element => {
      element.incrementar();
      console.log(element.count);
    });
    
  }

  eventoAction2() {
    this.componenteRefs.forEach(element => {
      element.decrementar();
      console.log(element.count);
    });    
  }

}
