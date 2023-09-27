import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
  items: any[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Finder',
        tooltipOptions: {
          tooltipLabel: 'Finder',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 100,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
      },
      {
        label: 'App Store',
        tooltipOptions: {
          tooltipLabel: 'App Store',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 100,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
      },
      {
        label: 'Safari',
        tooltipOptions: {
          tooltipLabel: 'Safari',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 100,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
      },
      {
        label: 'Photos',
        tooltipOptions: {
          tooltipLabel: 'Photos',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 100,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
      },
      {
        label: 'Trash',
        tooltipOptions: {
          tooltipLabel: 'Trash',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 100,
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
      },
    ];
  }
}
