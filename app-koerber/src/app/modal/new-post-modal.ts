import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './new-post-modal.html',
  styleUrls: ['./new-post-modal.scss']
})
export class ModalComponent implements OnInit {
  @Output() passDatatoParent: EventEmitter<any> = new EventEmitter();

  public title: string;
  public description: string;
  public postForm: FormGroup;
  public list: any[] = [];
  public bsModalRef: NgbModalRef;

  constructor(private formBuilder: FormBuilder,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      description: new FormControl(''),
      title: new FormControl(''),
    })
  }


  addPost(): void {
    this.passDatatoParent.emit({ title: this.title, description: this.description }); // passing data of modal to ts;
    this.close();
  }

  close(): void {
    this.activeModal.close();
  }

}