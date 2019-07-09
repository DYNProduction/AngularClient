import {Component, Injectable, Injector, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-options',
  templateUrl: './ngbd-modal-options.component.html',
  styleUrls: ['./ngbd-modal-options.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Injectable({ providedIn: 'root' })
export class NgbdModalOptionsComponent {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) { this.modalService.open(content, {size: 'xl'}); }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
