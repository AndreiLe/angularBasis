import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  Input
} from '@angular/core'

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit{
  @Input('hoverColor') hoverColor:string = 'blue'
  @Input('defaultColor') defaultColor:string = 'transparent'
  constructor(private element:ElementRef, private renderer:Renderer2){}

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.hoverColor);
  }
  @HostListener('mouseleave', ['$event']) mouseLeave(event:Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.defaultColor);
  }
}
