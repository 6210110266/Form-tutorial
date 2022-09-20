import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  // @ViewChild(ChildComponent,{static:true})
  // @ViewChild('ch')
  @ViewChildren(ChildComponent) chilList: QueryList<ChildComponent> | undefined
  // child: ChildComponent | undefined

  // p_counter = 0

  showTwo = false
  constructor() { }
  ngAfterViewInit(): void {
    // this.chilList?.forEach((child) => console.log(child.counter))
    this.chilList?.changes.subscribe((queryList) =>
    queryList.forEach((child) => console.log(child.counter)))
    setTimeout(() => (this.showTwo = true),5000);
  }

  ngOnInit(): void {
  }

  update(){
    // this.p_counter += 1
    // if(this.child){
    //   this.child.counter += 1
    // }
  }

}
