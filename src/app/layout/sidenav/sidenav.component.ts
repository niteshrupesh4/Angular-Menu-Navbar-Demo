import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Starter Page', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'invoice', type: 'link', name: 'Invoice', icon: 'insert_drive_file' },
  { state: 'card', type: 'link', name: 'Cards', icon: 'credit_card' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' }
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  menuItems = MENUITEMS;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(
      this._mobileQueryListener
      );
  }

  ngOnInit() {
  }

}
