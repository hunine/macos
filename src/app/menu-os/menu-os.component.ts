import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-os',
  templateUrl: './menu-os.component.html',
  styleUrls: ['./menu-os.component.scss'],
})
export class MenuOsComponent implements OnInit {
  dateTimeNow: Date = new Date();
  items: any[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Finder',
        styleClass: 'menubar-root',
      },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            items: [
              {
                label: 'Bookmark',
              },
              {
                label: 'Video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
    ];
  }
}
